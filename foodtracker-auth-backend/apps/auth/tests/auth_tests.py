from django import test

from ..models import User


class AdminAuthenticationTestCase(test.TestCase):
    def setUp(self) -> None:
        """Creating admin user"""
        User.objects.create_superuser(
            email="admin1@example.com",
            username="admin1",
            first_name="Jack"
        )

    def test_admin_has_all_fields(self) -> None:
        """Is admin has all needed fields for serialization"""
        admin_user = User.objects.get(email="admin1@example.com")
        self.assertEqual(admin_user.first_name, "Jack")
        self.assertEqual(admin_user.slug, "admin1")
        self.assertEqual(admin_user.username, "admin1")
        self.assertEqual(admin_user.is_superuser, True)
