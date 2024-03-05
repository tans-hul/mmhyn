from django.db import models
from django.db.models import F

from users.models import User
from product.models import Product


# Create your models here.
class Payment(models.Model):
	STATE_CHOICES = {
		'': 'Select State',
		'PENDING': 'Pending',
		'SUCCESS': 'Success',
		'FAILED': 'Failed',
	}

	method = models.CharField(max_length=200)
	state = models.CharField(choices=STATE_CHOICES, max_length=200)
	amount = models.DecimalField(max_digits=10, decimal_places=2)
	delivery_charges = models.DecimalField(max_digits=10, decimal_places=2)
	taxes = models.DecimalField(max_digits=10, decimal_places=2)
	total_amount = models.GeneratedField(expression=F('delivery_charges') + F('taxes') + F('amount'),
	                                     output_field=models.DecimalField(max_digits=10, decimal_places=2),
	                                     db_persist=True)

	def __str__(self):
		return f'{self.id} | {self.method}'


class OrderItem(models.Model):
	product = models.ManyToManyField(Product, related_name='order_items_set')
	quantity = models.IntegerField()
	price = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

	def __str__(self):
		return f'{self.product.all().count()} Order Items'


class Order(models.Model):
	order_item = models.OneToOneField(OrderItem, on_delete=models.CASCADE, null=True, blank=True)
	payment = models.OneToOneField(Payment, on_delete=models.SET_NULL, null=True, blank=True)
	user = models.ForeignKey(User, on_delete=models.CASCADE)

	is_paid = models.BooleanField(default=False)
	is_delivered = models.BooleanField(default=False)

	delivered_at = models.DateTimeField(null=True, blank=True)
	created_at = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return str(self.order_item)
