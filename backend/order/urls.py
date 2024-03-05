from django.urls import path

from .views import Orders

urlpatterns = [
	path('all/', Orders.as_view(), name='all-orders'),
	path('<int:id>/', Orders.as_view(), name='single-order'),
	path('add/', Orders.as_view(), name='add-order')
]
