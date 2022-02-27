from rest_framework import serializers
from . import models
from userauth import serializers as userauth_serializers

class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Post
        fields = "__all__"

    