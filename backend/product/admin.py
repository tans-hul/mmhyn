from django.contrib import admin
from .models import Product, ProductImage, ProductColor, ProductSize


# Register your models here.
@admin.register(ProductImage)
class PoductImageAdmin(admin.ModelAdmin):
	list_display = ['product', 'image']


@admin.register(ProductSize)
class ProductSizeAdmin(admin.ModelAdmin):
	list_display = ['size', 'product']


@admin.register(ProductColor)
class ProductColorAdmin(admin.ModelAdmin):
	list_display = ['name', 'color_code', 'count_of_product', 'size', 'product']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
	list_display = ['name', 'type', 'price', 'description', 'provider']
