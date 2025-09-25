from rest_framework.routers import SimpleRouter
from rest_framework_simplejwt import views
from django.urls import path

from .views import UserListAPI

router = SimpleRouter()
router.register(r"users", UserListAPI)

urlpatterns = [
    path("token/", views.TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", views.TokenRefreshView.as_view(), name="token_refresh")
]

urlpatterns += router.urls
