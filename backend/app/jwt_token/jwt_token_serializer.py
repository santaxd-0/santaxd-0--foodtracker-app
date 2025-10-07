import redis

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    # email: test_admin@example.com
    # password: 1234

    def get_token(cls, user):
        token = super().get_token(user)

        token["email"] = user.email

        return token


