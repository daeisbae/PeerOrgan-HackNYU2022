from django.db import models

class Organ(models.Model):
    blood_group = models.CharField(max_length=3)
    organ = models.CharField(max_length=50)
    organ_date_time = models.DateTimeField()
    smoke = models.BooleanField()
    alcohol = models.BooleanField()
    drug = models.BooleanField()
    avg_sleep = models.PositiveIntegerField()
    daily_exercise = models.PositiveIntegerField()
    donor = models.OneToOneField('userauth.Donor', on_delete=models.CASCADE)

    def __str__(self):
        return self.organ
