from django.shortcuts import render

from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import Provider
from .serializers import ProviderSerializer


class Providers(GenericAPIView):
	serializer_class = ProviderSerializer
	queryset = Provider.objects.all()
	lookup_field = 'id'

	def get(self, req, *args, **kwargs):
		# Get single Provider
		if 'id' in kwargs:
			provider = self.get_object()
			serializer = self.get_serializer(provider)
			return Response(serializer.data, status=status.HTTP_200_OK)

		# Get All Providers
		serializer = self.get_serializer(self.get_queryset(), many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
