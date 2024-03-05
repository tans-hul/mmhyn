from rest_framework import serializers
from .models import Product, ProductImage, ProductColor, ProductSize
from provider.serializers import ProviderSerializer


class ProductImageSerializer(serializers.ModelSerializer):
	class Meta:
		model = ProductImage
		fields = ['image']


class ProductColorSerializer(serializers.ModelSerializer):
	images = serializers.SerializerMethodField(read_only=True)

	@staticmethod
	def get_images(instance):
		try:
			images_data = ProductImage.objects.filter(for_color=instance, product=instance.size.product)
			print(images_data)
			images = ProductImageSerializer(images_data, many=True).data
			return images
		except Exception as e:
			print(e)
			return []

	class Meta:
		model = ProductColor
		fields = ['name', 'color_code', 'count_of_product', 'images']


class ProductSizeSerializer(serializers.ModelSerializer):
	color = serializers.SerializerMethodField(read_only=True)

	@staticmethod
	def get_color(instance):
		try:
			colors_data = ProductColor.objects.filter(size=instance)
			colors = ProductColorSerializer(colors_data, many=True).data
			return colors
		except Exception as e:
			print(e)
			return []

	class Meta:
		model = ProductSize
		fields = ['size', 'color']


class ProductSerializer(serializers.ModelSerializer):
	provider = serializers.SerializerMethodField(read_only=True)
	variants = serializers.SerializerMethodField(read_only=True)
	images = serializers.SerializerMethodField(read_only=True)

	@staticmethod
	def get_provider(instance):
		return ProviderSerializer(instance.provider).data

	@staticmethod
	def get_variants(instance):
		try:
			variants_data = instance.productsize_set.all()
			print("variants data: " + str(variants_data))
			return ProductSizeSerializer(variants_data, many=True).data
		except Exception as e:
			print(e)
			return []

	@staticmethod
	def get_images(instance):
		try:
			images_data = ProductImage.objects.filter(product=instance)
			images = ProductImageSerializer(images_data, many=True).data
			return images
		except Exception as e:
			print(e)

	class Meta:
		model = Product
		fields = ('id', 'name', 'type', 'variants', 'price', 'description', 'provider', 'images')
