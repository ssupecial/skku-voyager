from django.contrib import admin
from .models import Photo


@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = (
        "file",
        "description",
        "country",
        "spot",
    )


# Register your models here.
