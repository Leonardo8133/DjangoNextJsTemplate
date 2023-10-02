from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from user.models import User
from customer.models import Customer


class TestCreateUserView(APITestCase):
    def test_create_user(self):
        customer = Customer.objects.create(name="Bix").id
        url = reverse("user_register")

        ## Test with wrong customer id
        data = {
            "username": "testuser",
            "email": "test@test.com",
            "password": "testpassword",
            "name": "test name",
            "customer": "123242"
        }
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

        data["customer"] = customer
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["username"], data["username"])
        self.assertEqual(response.data["email"], data["email"])
        self.assertIsNone(response.data.get("password"))
        self.assertEqual(response.data['customer'], data['customer'])

        user = User.objects.get(username=data["username"])
        self.assertEqual(user.name, data["name"])
        self.assertTrue(user.check_password(data["password"]))
        self.assertEqual(user.customer.id, data["customer"])


class TestMyUserView(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(username="testuser", email="test@test.com", password="testpassword")

    def test_get_unauthorized(self):
        url = reverse("my-user")
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_authorized(self):
        url = reverse("my-user")
        self.client.force_authenticate(user=self.user)
        response = self.client.get(url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_data(self):
        url = reverse("my-user")
        self.client.force_authenticate(user=self.user)
        response = self.client.get(url)
        self.assertEqual(response.data["username"], self.user.username)
        self.assertEqual(response.data["email"], self.user.email)
        self.assertEqual(response.data["name"], self.user.name)
        self.assertIsNone(response.data.get("password"))

    def test_put_data(self):
        url = reverse("my-user")
        self.client.force_authenticate(user=self.user)
        response = self.client.put(url, {"name": "new name"})
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_patch_data(self):
        url = reverse("my-user")
        self.client.force_authenticate(user=self.user)
        response = self.client.patch(url, {"name": "new name"})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], "new name")

    def test_delete_data(self):
        url = reverse("my-user")
        self.client.force_authenticate(user=self.user)
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(User.objects.filter(username=self.user.username).exists())
