from ..utils.redis import redis_client
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.conf import settings

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def get_token(cls, user):
        token = super().get_token(user)

        token["email"] = user.email

        return token
    
    def validate(self, attrs):
        data = super().validate(attrs)
        redis_db = redis_client.connect_to_db()

        user = self.user

        refresh_token = data["refresh"]
        redis_key = f"blacklist:refresh:{user.username}"
        token_expires_at = settings.SIMPLE_JWT["REFRESH_TOKEN_LIFETIME"].total_seconds()

        if redis_db.get(f"blacklist:refresh:{user.username}"):
            data["refresh"] = "Refresh token was stored"
        else:
            redis_client.store_jwt(redis_db, redis_key, token_expires_at, refresh_token)

        data['username'] = user.username

        return data

