# Generated by Django 4.0 on 2022-02-27 09:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('donation', '0001_initial'),
        ('userauth', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='organ',
            name='donor',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='userauth.donor'),
        ),
    ]