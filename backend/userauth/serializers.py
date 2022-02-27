from rest_framework import serializers
from django.contrib.auth.models import User
from . import models


class DonorSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Donor
        exclude = ('user',)

class RecipientSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Recipient
        exclude = ('user',)


class DonorUserSerializer(serializers.ModelSerializer):
    donor = DonorSerializer(required=False)

    class Meta:
        model = User
        fields = "__all__"

    def save(self):
        password = self.validated_data['password']

        acc = User(username=self.validated_data['username'])
        acc.set_password(password)
        acc.save()

        # try:
        if self.validated_data['donor']:
            donorinfo = models.Donor.objects.create(user=acc, **self.validated_data['donor'])
            donorinfo.user = acc
            donorinfo.save()

class RecipientUserSerializer(serializers.ModelSerializer):
    recipient = RecipientSerializer(required=False)

    class Meta:
        model = User
        fields = "__all__"

    def save(self):
        password = self.validated_data['password']
        
        acc = User(username=self.validated_data['username'])
        acc.set_password(password)
        acc.save()

        donorinfo = models.Recipient.objects.create(user=acc, **self.validated_data['recipient'])
        donorinfo.save()