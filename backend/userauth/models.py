from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Donor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='donor')   
    phone_number = models.CharField(max_length=15)
    birthday = models.DateField()
    address = models.CharField(max_length=100, null=True, blank=True)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=10)
    health_card_number = models.CharField(max_length=12)

    def __str__(self):
        return self.user.username

class Recipient(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='recipient')
    phone_number = models.CharField(max_length=15)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    zipcode = models.CharField(max_length=10)
    state = models.CharField(max_length=50)
    health_card_number = models.CharField(max_length=12)
    birthday = models.DateField()
    blood_group = models.CharField(max_length=3)
    organ = models.CharField(max_length=50)

    

    def __str__(self):
        return self.user.username
