from django.shortcuts import render

from rest_framework import status
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import LoginSerializer, SignupSerializer, UserSerializer


# Create your views here.
class Login(TokenObtainPairView):
	serializer_class = LoginSerializer


class Signup(GenericAPIView):
	serializer_class = SignupSerializer

	def post(self, req, *args, **kwargs):
		try:
			serializer = self.get_serializer(data=req.data)
			serializer.is_valid(raise_exception=True)
			user = serializer.save()

			user_serializer = UserSerializer(user)
			user_data = user_serializer.data

			response = {
				'user': user_data,
				'message': 'User Created Successfully'
			}

			return Response(response, status=status.HTTP_200_OK)
		except Exception as e:
			response = {'message': str(e)}
			return Response(response, status=status.HTTP_400_BAD_REQUEST)
