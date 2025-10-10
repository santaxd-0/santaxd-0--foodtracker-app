from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "email",
            "username",
            "slug",
            "first_name",
            "last_login",
        ]

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])  # Явно хешируем
        user.save()
        return user
