from rest_framework import viewsets
from rest_framework import permissions
from rest_framework_simplejwt import authentication

from .models import User
from .serializers import UserSerializer

class UserListAPI(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "slug"
    authentication_classes = [authentication.JWTTokenUserAuthentication]

    def get_permissions(self):
        if self.action in ["create", "partial_update"]:
            return [permissions.AllowAny()]
        else:
            return [permissions.IsAdminUser()]

    def get_queryset(self):
        if self.request.user.is_staff:
            return User.objects.all()
        return User.objects.filter(id=self.request.user.id)
