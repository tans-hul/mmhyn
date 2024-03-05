from django.shortcuts import render

from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import Order
from .serializers import OrderSerializer


class Orders(GenericAPIView):
	serializer_class = OrderSerializer
	queryset = Order.objects.all()
	lookup_field = 'id'

	def get(self, req, *args, **kwargs):
		# Get single Order
		if 'id' in kwargs:
			order = self.get_object()
			serializer = self.get_serializer(order)
			return Response(serializer.data, status=status.HTTP_200_OK)

		# Get All Orders
		serializer = self.get_serializer(self.get_queryset(), many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
