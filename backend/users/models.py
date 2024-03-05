from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.

class User(AbstractUser):
	phone_number = models.CharField(max_length=12, null=True, blank=True)

	def __str__(self):
		return self.username


class Address(models.Model):
	address_line_1 = models.CharField(max_length=100)
	address_line_2 = models.CharField(max_length=100)
	city = models.CharField(max_length=100)
	state = models.CharField(max_length=100)
	country = models.CharField(max_length=100)
	zipcode = models.CharField(max_length=100)

	user = models.ForeignKey(User, on_delete=models.CASCADE)

	def __str__(self):
		return f'{self.address_line_1}, {self.address_line_2}, {self.city}, {self.state}'
