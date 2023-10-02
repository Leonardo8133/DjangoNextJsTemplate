from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    name = models.CharField(max_length=50, unique=False)
    email = models.CharField(max_length=50, unique=False)

    def __str__(self):
        return self.name + " " + self.email
