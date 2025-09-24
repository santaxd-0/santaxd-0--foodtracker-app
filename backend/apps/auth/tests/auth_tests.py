from django.test import TestCase

from ..models import User

# Create your tests here.
class AdminAuthenticationTestCase(TestCase):
    def setUp(self) -> None:
        User.objects.create_superuser(
            email="admin1@example.com",
            username="admin1",
            first_name="Jack"
        )

    def test_admin_has_all_fields(self) -> None:
        admin_user = User.objects.get(email="admin1@example.com")
        self.assertEqual(admin_user.first_name, "Jack")
        self.assertEqual(admin_user.slug, "admin1")
        self.assertEqual(admin_user.username, "admin1")
        self.assertEqual(admin_user.is_superuser, True)
