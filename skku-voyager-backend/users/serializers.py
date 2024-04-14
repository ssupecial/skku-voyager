from rest_framework import serializers
from .models import User


# Serializer to create a new user. This is typically used in user registration endpoints.
class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  # Specifies the User model to be used for serialization.
        fields = (  # Defines the fields to be included in the serialized output for user creation.
            "username",  # The username for the user.
            "name",  # The name of the user.
            "email",  # The email address of the user.
            "password",  # The password for the user (will be handled appropriately in views).
        )
        # Note: It is important to handle the password securely, typically by hashing.


# Serializer for private user data. This can be used for user detail endpoints where sensitive information is omitted.
class PrivateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  # Specifies the User model to be used for serialization.
        exclude = (  # Defines the fields to be excluded from the serialized output.
            "password",  # Excludes the password field for security reasons.
            "is_superuser",  # Excludes fields related to admin and permission management.
            "id",  # The internal ID of the user is excluded (could be included based on use case).
            "is_active",  # Excludes the is_active flag, which indicates if the user account is active.
            "first_name",  # Excludes the first name, which may be part of sensitive personal data.
            "last_name",  # Excludes the last name for the same reason as first name.
            "groups",  # Excludes group memberships, which are related to permissions.
            "user_permissions",  # Excludes specific user permissions.
        )
        # This serializer is suitable for endpoints where user privacy is important.
