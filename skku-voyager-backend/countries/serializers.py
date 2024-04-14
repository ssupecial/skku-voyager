from rest_framework.serializers import ModelSerializer
from medias.serializers import PhotoSerializer
from .models import Country, Spot
import logging

logger = logging.getLogger(__name__)


# Serializer for listing countries, typically used in an API endpoint that lists all countries.
class CountryListSerializer(ModelSerializer):
    logger.info("CountryListSerializer")

    class Meta:
        model = Country  # Specifies the Country model to be serialized.
        fields = (  # Defines the fields to be included in the serialized output.
            "pk",
            "name",
            "thumbnail",
            "flight_hour",
            "flag",
        )
        depth = 1  # With depth=1, the serializer will include a single level of related objects.


# Serializer for detailed information about a spot, used in an API endpoint that shows detailed info for a spot.
class SpotDetailSerializer(ModelSerializer):
    class Meta:
        model = Spot  # Specifies the Spot model to be serialized.
        fields = (  # Defines the fields to be included in the serialized output.
            "pk",
            "theme",
            "description",
            "image",
            "name",
        )


# Serializer for detailed information about a country, including related photos and spots.
class CountryDetailSerializer(ModelSerializer):
    photos = PhotoSerializer(
        many=True, read_only=True
    )  # Nested serializer for related photos.
    spots = SpotDetailSerializer(
        many=True, read_only=True
    )  # Nested serializer for related spots.

    class Meta:
        model = Country  # Specifies the Country model to be serialized.
        fields = (  # Defines the fields to be included in the serialized output.
            "pk",
            "name",
            "description",
            "good_month",
            "language",
            "theme",
            "avg_flight_price",
            "photos",
            "flag",
            "rating",
            "spots",
        )
        depth = 1  # With depth=1, the serializer will include a single level of related objects.
