from django.contrib import admin
from .models import Country, Spot


# This decorator registers the Country model with the admin site using the CountryAdmin class.
@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    # Customizes the display of the Country model in the admin interface.
    list_display = (
        "name",  # Shows the name of the country in the list view.
        "thumbnail",  # Shows the thumbnail URL of the country in the list view.
        "flight_hour",  # Shows the number of flight hours from a reference point in the list view.
        "flag",  # Shows the URL of the country's flag image in the list view.
    )
    # The list_display attribute specifies which fields are displayed on the change list page of the admin.


# This decorator registers the Spot model with the admin site using the SpotAdmin class.
@admin.register(Spot)
class SpotAdmin(admin.ModelAdmin):
    # Customizes the display of the Spot model in the admin interface.
    list_display = (
        "name",  # Shows the name of the spot in the list view.
        "description",  # Shows the description of the spot in the list view.
        "theme",  # Shows the theme associated with the spot in the list view.
    )
    # The list_display attribute specifies which fields are displayed on the change list page of the admin.
