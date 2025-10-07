from datetime import timedelta

JWT_TOKEN = {
    "ACCESS_TOKEN_LIFETIME": timedelta(minutes=20),
    "REFRESH_TOKEN_LIFETIME": timedelta(weeks=1),

    "TOKEN_OBTAIN_SERIALIZER": "app.jwt_token.jwt_token_serializer.CustomTokenObtainPairSerializer",
}