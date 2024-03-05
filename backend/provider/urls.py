from django.urls import path

from .views import Providers

urlpatterns = [
	path('all/', Providers.as_view(), name='all-providers'),
	path('<int:id>/', Providers.as_view(), name='single-provider'),
	path('add/', Providers.as_view(), name='add-provider')
]
