from django.db import models

from provider.models import Provider


class Product(models.Model):
	TYPE_CHOICES = (
		('', 'Select Type'),
		('1', 'T-Shirt'),
		('2', 'Sweat Pants'),
		('3', 'Sweaters'),
		('4', 'Accessories'),
	)

	name = models.CharField(max_length=200)
	type = models.CharField(max_length=200, choices=TYPE_CHOICES)
	price = models.FloatField()
	description = models.TextField()
	provider = models.ForeignKey(Provider, on_delete=models.CASCADE, null=True, blank=True)

	def __str__(self):
		return self.name


class ProductSize(models.Model):
	size = models.CharField(max_length=100, null=True, blank=True)
	product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)

	def __str__(self):
		return self.size
	
	class Meta:
		unique_together = ('size', 'product')


class ProductColor(models.Model):
	name = models.CharField(max_length=100, null=True, blank=True)
	color_code = models.CharField(max_length=100, null=True, blank=True)

	count_of_product = models.PositiveIntegerField(default=0)

	size = models.ForeignKey(ProductSize, on_delete=models.SET_NULL, null=True, blank=True)
	product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True, blank=True)

	class Meta:
		unique_together = ('name', 'color_code', 'size', 'product')

	def __str__(self):
		return f'{self.name}__{self.product.name}__{self.size.size}'


def set_image_path(instance, filename):
	image_count = ProductImage.objects.filter(product=instance.product).count()

	file_type = filename.split(".")[-1]
	refactored_filename = f'{image_count + 1}.{file_type}'
	return f"product_images/{instance.product.id}/{instance.product.name}/{instance.for_color.name}/{refactored_filename}"


class ProductImage(models.Model):
	for_color = models.ForeignKey(ProductColor, on_delete=models.CASCADE)
	product = models.ForeignKey(Product, on_delete=models.CASCADE)
	image = models.ImageField(upload_to=set_image_path)

	def __str__(self):
		return self.image.name
