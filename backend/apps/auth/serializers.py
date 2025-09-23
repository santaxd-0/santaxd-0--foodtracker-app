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
            "is_superuser",
            "is_active",
        ]
