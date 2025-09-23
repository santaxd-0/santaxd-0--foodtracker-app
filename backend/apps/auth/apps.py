from django.apps import AppConfig


class AuthConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.auth'
    # If we have folder that named as django module we should create
    # label for app
    label = "custom_auth"
