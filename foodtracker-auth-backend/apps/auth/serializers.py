import json
from rest_framework import serializers

from .models import User
from .utils.message import auth_handler


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            "email",
            "username",
            "slug",
            "first_name",
            "last_login",
            "password"
        ]

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()

        message_properties = {
            "id": user.id, # type: ignore
            "email": user.email,
            "username": user.username,
        }
        message = json.dumps(message_properties)
        auth_handler.send_message("User created", message) # type: ignore
        
        return user
