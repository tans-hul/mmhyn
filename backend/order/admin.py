from django.contrib import admin

from .models import Payment, Order, OrderItem


# Register your models here.
@admin.register(Payment)
class PaymentAdmin(admin.ModelAdmin):
	list_display = ['id', 'method', 'state', 'amount', 'delivery_charges', 'taxes', 'total_amount']


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
	list_display = ['id', 'order_item', 'payment', 'user', 'is_paid', 'is_delivered', 'delivered_at', 'created_at']


@admin.register(OrderItem)
class OrderItemAdmin(admin.ModelAdmin):
	list_display = ['id', 'quantity', 'price']
