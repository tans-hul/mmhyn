from django.contrib import admin
from .models import User, Address


# Register your models here.
@admin.register(Address)
class AddressAdmin(admin.ModelAdmin):
	list_display = ['address_line_1', 'address_line_2', 'city', 'state', 'country', 'zipcode', 'user']


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
	list_display = ['username', 'first_name', 'last_name', 'email', 'phone_number']
