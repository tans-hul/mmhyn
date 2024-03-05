from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response

from .models import Product
from .serializers import ProductSerializer


# Create your views here.
class Products(GenericAPIView):
	serializer_class = ProductSerializer
	queryset = Product.objects.all()
	lookup_field = 'id'

	def get(self, req, *args, **kwargs):
		# Get single Product
		if 'id' in kwargs:
			product = self.get_object()
			serializer = self.get_serializer(product)
			return Response(serializer.data, status=status.HTTP_200_OK)

		# Get All Products by type
		product_type = req.GET.get('type')

		products = self.get_queryset()
		if product_type and product_type != '0':
			products = products.filter(type=product_type)

		print(products)

		serializer = self.get_serializer(products, many=True)
		return Response(serializer.data, status=status.HTTP_200_OK)
