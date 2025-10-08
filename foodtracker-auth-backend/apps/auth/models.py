from django.db import models
from django.utils.text import slugify

from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True, blank=False, max_length=40)
    slug = models.SlugField(unique=True, blank=True, max_length=200)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username", "first_name"]

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.username)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"User: {self.username}; User email: {self.email}"
