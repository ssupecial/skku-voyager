from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import ParseError, NotFound
from . import serializers
from .models import User
from django.conf import settings
from django.contrib.auth.hashers import make_password


# A view for creating users.
class Users(APIView):
    def post(self, request):
        # Extract the password from the request data.
        password = request.data.get("password")

        # If no password is provided, raise a parsing error.
        if not password:
            raise ParseError

        # Initialize the serializer with the request data.
        serializer = serializers.CreateUserSerializer(data=request.data)

        # Check if the serializer is valid.
        if serializer.is_valid():
            # Hash the password using Django's make_password utility.
            password = serializer.validated_data.get("password")
            serializer.validated_data["password"] = make_password(password)

            # Save the user instance.
            user = serializer.save()

            # Set the password again to ensure it's hashed.
            user.set_password(password)

            # Re-serialize the user instance to return as response.
            serializer = serializers.CreateUserSerializer(user)
            return Response(
                {
                    "success": "True",
                    "data": serializer.data,
                }
            )
        else:
            # If the serializer is not valid, return the errors.
            return Response(
                {
                    "success": "False",
                    "data": serializer.errors,
                }
            )


# A view for logging in users.
class LogIn(APIView):
    def post(self, request):
        # Extract username and password from the request data.
        username = request.data.get("username")
        password = request.data.get("password")

        # If either is missing, raise a parsing error.
        if not username or not password:
            raise ParseError

        # Authenticate the user.
        user = authenticate(
            request,
            username=username,
            password=password,
        )

        # If authentication is successful, log in the user.
        if user:
            login(request, user)
            return Response({"success": "True", "message": "Welcome"})
        else:
            # If authentication fails, return an error message.
            return Response({"success": "False", "message": "wrong password"})


# A view for logging out users.
class LogOut(APIView):
    # Set permission classes to require authentication.
    permission_classes = [IsAuthenticated]

    def post(self, request):
        # Log out the user.
        logout(request)
        # Return a response indicating the user has been logged out.
        return Response({"ok": "Bye"})
