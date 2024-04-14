from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound, PermissionDenied
from rest_framework.status import HTTP_200_OK
from rest_framework.response import Response
from .models import Country
from .serializers import CountryListSerializer, CountryDetailSerializer


# APIView for listing all countries or deleting a country.
class Countries(APIView):
    # GET method handler for listing all countries.
    def get(self, request):
        # Fetch all country records from the database.
        all_countries = Country.objects.all()
        # Serialize the country data.
        serializer = CountryListSerializer(
            all_countries,
            many=True,  # 'many=True' indicates that we are serializing a queryset, not a single object.
            context={
                "request": request
            },  # Context may be needed for hyperlinked fields, if any.
        )
        # Return serialized data as a response.
        return Response(serializer.data)

    # DELETE method handler for deleting a country by primary key (pk).
    def delete(self, request, pk):
        # Fetch the country to be deleted.
        country = self.get_object(pk)
        # Delete the country record from the database.
        country.delete()
        # Return an HTTP 200 OK response on successful deletion.
        return Response(status=HTTP_200_OK)


# APIView for retrieving or deleting the details of a specific country.
class CountryDetail(APIView):
    # Helper method to get a country object, or raise a NotFound exception if it doesn't exist.
    def get_object(self, pk):
        try:
            # Attempt to get the country by primary key (pk).
            return Country.objects.get(pk=pk)
        except Country.DoesNotExist:
            # If the country does not exist, raise a NotFound exception.
            raise NotFound

    # GET method handler for retrieving the details of a specific country.
    def get(self, request, pk):
        # Fetch the specific country object using the helper method.
        country = self.get_object(pk)
        # Serialize the country data using the detail serializer.
        serializer = CountryDetailSerializer(country)
        # Return serialized data as a response.
        return Response(serializer.data)

    # DELETE method handler for deleting a specific country.
    def delete(self, request, pk):
        # Fetch the specific country object using the helper method.
        country = self.get_object(pk)
        # Delete the country record from the database.
        country.delete()
        # Return an HTTP 200 OK response on successful deletion.
        return Response(status=HTTP_200_OK)
