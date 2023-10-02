from customer.models import Customer
from django.test import TestCase
from user.models import User

from .factories import UserFactory


class UserTestCase(TestCase):
    def setUp(self):
        customer = Customer.objects.create(name="GV Natural Gas")
        self.user = UserFactory(customer=customer)

    def get_user(self):
        user = User.objects.first()
        return user

    def test_user_unicode(self):
        user = self.get_user()
        user_str = user.__str__()
        self.assertEqual(f"{user.name} {user.email}", user_str)
