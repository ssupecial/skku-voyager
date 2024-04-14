from django.db import models


# Define a Country model to represent a country in the database.
class Country(models.Model):
    # Nested LanguageChoices class to define language options for a country.
    class LanguageChoices(models.TextChoices):
        KR = ("Korean", "kr")
        EN = ("English", "en")
        CB = ("Cebuano", "cb")
        VT = ("Vietnamese", "vt")
        CH = ("Chinese", "ch")

    name = models.CharField(max_length=30)  # String field for the country's name.
    thumbnail = (
        models.URLField()
    )  # URL field for an image representing the country's thumbnail.
    flight_hour = (
        models.IntegerField()
    )  # Integer field for the flight duration in hours from Korea
    flag = models.URLField()  # URL field for the country's flag image.
    description = models.TextField(
        null=True, blank=True
    )  # Optional text field for a description of the country.
    good_month = models.CharField(
        max_length=20, null=True, blank=True
    )  # Optional string field for the best months to visit the country.
    language = models.CharField(
        max_length=10,
        choices=LanguageChoices.choices,
        null=True,
        blank=True,
    )  # Optional string field for the primary language spoken in the country, using choices from LanguageChoices.
    theme = models.CharField(
        max_length=50,
        null=True,
        blank=True,
    )  # Optional string field for the country's theme
    rating = models.FloatField(
        default=0,
        null=True,
        blank=True,
    )  # Optional float field for the country's rating.
    avg_flight_price = models.FloatField(
        default=0,
        null=True,
        blank=True,
    )  # Optional float field for the average flight price to the country.
    spots = models.ManyToManyField(
        "countries.Spot",
        related_name="countries",
        null=True,
        blank=True,
    )  # ManyToMany field linking to the Spot model. This represents all spots associated with the country.

    # Define the string representation of the model which will display the country's name.
    def __str__(self) -> str:
        return self.name


# Define a Spot model to represent a tourist spot within a country.
class Spot(models.Model):
    # String field for the spot's name.
    name = models.CharField(max_length=50)
    # Text field for a description of the spot.
    description = models.TextField()
    # String field for the theme of the spot (e.g., adventure, relaxation).
    theme = models.CharField(max_length=50)
    # Optional URL field for an image of the spot.
    image = models.URLField(blank=True, null=True)

    # Define the string representation of the model which will display the spot's name.
    def __str__(self) -> str:
        return self.name
