from rest_framework import serializers

from .models import Order, OrderItem, Payment
from product.serializers import ProductSerializer


class PaymentSerializer(serializers.ModelSerializer):
	class Meta:
		model = Payment
		fields = '__all__'


class OrderItemSerializer(serializers.ModelSerializer):
	product = serializers.SerializerMethodField()

	@staticmethod
	def get_product(instance):
		return ProductSerializer(instance.product, many=True).data

	class Meta:
		model = OrderItem
		fields = '__all__'


class OrderSerializer(serializers.ModelSerializer):
	order_item = serializers.SerializerMethodField()
	user = serializers.SerializerMethodField()
	payment = serializers.SerializerMethodField()

	@staticmethod
	def get_order_item(instance):
		return OrderItemSerializer(instance.order_item).data

	@staticmethod
	def get_user(instance):
		return instance.user.username

	@staticmethod
	def get_payment(instance):
		if instance.payment:
			return PaymentSerializer(instance.payment).data
		return None

	class Meta:
		model = Order
		fields = '__all__'
