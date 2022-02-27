from rest_framework import serializers
from . import models
from userauth import serializers as userauth_serializers

class OrganSerializer(serializers.ModelSerializer):
    recipent = userauth_serializers.RecipientUserSerializer(required=False)

    class Meta:
        model = models.Organ
        exclude = ('donor',)
