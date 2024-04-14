from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User


# Register your models here.
@admin.register(User)
class CustomUserAdmin(UserAdmin):
    fieldsets = (
        (
            "Profile",
            {
                "fields": (
                    "avatar",
                    "name",
                    "username",
                    "password",
                    "email",
                ),
                "classes": ("wide",),  # wide: 더 넓게
            },
        ),
        (
            "Permission",
            {
                "fields": (
                    "is_active",
                    "is_superuser",
                    "groups",
                    "user_permissions",
                ),
                "classes": ("collapse",),
            },
        ),
        (
            "Important Dates:",
            {
                "fields": ("last_login", "date_joined"),
                "classes": ("collapse",),
            },
        ),
    )
    # fields = ("email", "password", "name")
    list_display = (
        "username",
        "email",
        "name",
        "is_superuser",
    )
