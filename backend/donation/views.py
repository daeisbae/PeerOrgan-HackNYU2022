from rest_framework.views import APIView
from rest_framework.response import Response
from . import models
from . import serializers
from userauth import models as userauth_models
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication, BasicAuthentication

# class CompareOrganCompatibility(APIView):
#     def get(self, request):
#         donor = userauth_models.Donor.objects.filter(user=request.user).first()
#         if donor:
#             recipient = userauth_models.Recipient.objects.filter(user=request.data['user']).first()
#             if recipient:
#                 return Response(donor.compare_organ_compatibility(recipient))
#             return Response({'message': 'You do not have a recipient'})