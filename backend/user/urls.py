from django.urls import path
from rest_framework import routers

from .views import CreateUserView, MyUserView

router = routers.SimpleRouter()

urlpatterns = [
    path("register/", CreateUserView.as_view(), name="user_register"),
    path("me/", MyUserView.as_view(), name="my-user"),
] + router.urls
