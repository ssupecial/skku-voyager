from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path("", views.Users.as_view()),
    path("login", views.LogIn.as_view()),
    path("signup", views.Users.as_view()),
]
