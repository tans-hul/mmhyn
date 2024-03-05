from django.urls import path

from .views import Products

urlpatterns = [
	path('all/', Products.as_view(), name='all-products'),
	path('<int:id>/', Products.as_view(), name='single-product'),
	path('add/', Products.as_view(), name='add-product')
]
