from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from . import models
from . import serializers
from userauth import models as userauth_models
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

# Create your views here.

# For the author's perspective
# Make post, get, update and delete
class PostAuthor(APIView):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = [IsAuthenticated]


    def get(self, request):
        author = userauth_models.Recipient(user=request.user)
        posts = models.Post.objects.filter(author=author)
        serializer = serializers.PostSerializer(posts)
        return Response(serializer.data)
    
    def post(self, request):
        author = userauth_models.Recipient.objects.filter(user=request.user).first()
        if author:
            post = models.Post.objects.filter(author=author).first()
            if not post:
                models.Post.objects.create(author=author, **request.data)
                return Response({'message': 'Successfully created post'})
            return Response({'message': 'You already have a post'})
        return Response({'message': 'Failed to create post'})

    def delete(self, request):
        author = userauth_models.Recipient.objects.filter(user=request.user).first()
        if author:
            posts = models.Post.objects.filter(author=author).first()
            if posts:
                posts.delete()
                return Response({'message': 'Successfully deleted post'})
            return Response({'message': 'You do not have a post'})
        return Response({'message': 'Invalid request'})
        
    def put(self, request):
        author = userauth_models.Recipient.objects.filter(user=request.user).first()
        if author:
            posts = models.Post.objects.filter(author=author).first()
            if posts:
                posts.update(author=author, **request.data)
                return Response({'message': 'Successfully changed post'})
            return Response({'message': 'You do not have a post'})
        return Response({'message': 'Invalid request'})

# For the Everyone perspective of watching the posts
class PostEveryone(APIView):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = [IsAuthenticated]

    def get(self, request):
        posts = models.Post.objects.all()
        serializer = serializers.PostSerializer(posts, many=True)
        return Response(serializer.data)
