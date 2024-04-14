from django.db import models


# Photo model represents a photo related to a country or a spot.
class Photo(models.Model):
    # An ImageField to store the photo file. The 'upload_to' argument specifies the subdirectory of MEDIA_ROOT.
    file = models.ImageField(
        upload_to="images/",  # Directory where image files will be stored.
        null=True,  # Allows the field to be null in the database.
    )

    # A CharField for a short description of the photo.
    description = models.CharField(
        max_length=100
    )  # Max length of description is set to 100 characters.

    # ForeignKey relationship to the Country model.
    # If the related country is deleted, this field is set to null due to the on_delete=models.SET_NULL setting.
    country = models.ForeignKey(
        "countries.Country",  # References the Country model in the 'countries' app.
        on_delete=models.SET_NULL,  # If the related Country is deleted, this field will be set to null.
        null=True,  # Allows the field to be null in the database.
        blank=True,  # Allows the field to be blank in forms.
        related_name="photos",  # Name to use for the reverse relation from Country to Photo.
    )

    # ForeignKey relationship to the Spot model.
    # Similar to the 'country' field, it also sets to null if the related Spot is deleted.
    spot = models.ForeignKey(
        "countries.Spot",  # References the Spot model in the 'countries' app.
        on_delete=models.SET_NULL,  # If the related Spot is deleted, this field will be set to null.
        null=True,  # Allows the field to be null in the database.
        blank=True,  # Allows the field to be blank in forms.
        related_name="photos",  # Name to use for the reverse relation from Spot to Photo.
    )

    # String representation of the Photo model.
    def __str__(self) -> str:
        return "Photo File"  # Returns a generic string. You might want to return something more descriptive.
