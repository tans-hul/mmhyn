from django.contrib.auth import get_user_model

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
	token = serializers.CharField(read_only=True)

	@staticmethod
	def get_token(instance):
		token = RefreshToken.for_user(instance)
		return str(token.access_token)

	class Meta:
		model = User
		fields = ['id', 'username', 'email', 'phone_number', 'first_name', 'last_name', 'address', 'order', 'token']


class SignupSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ['username', 'email', 'phone_number', 'password', 'first_name', 'last_name']
		extra_kwargs = {
			'password': {'write_only': True}
		}

	def create(self, validated_data):
		user = User.objects.create_user(**validated_data)
		return user


class LoginSerializer(TokenObtainPairSerializer):
	def validate(self, attrs):
		data = super().validate(attrs)

		serialized_data = UserSerializer(self.user).data

		for key, value in serialized_data.items():
			data[key] = value

		return data
