from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from rest_framework.status import HTTP_200_OK
from rest_framework.response import Response
from .models import Photo


# APIView for handling specific photo details.
class PhotoDetail(APIView):
    # Helper method to get a photo object by primary key (pk).
    # If the photo does not exist, it raises a NotFound exception.
    def get_object(self, pk):
        try:
            # Retrieve and return the Photo object.
            return Photo.objects.get(pk=pk)
        except Photo.DoesNotExist:
            # If no Photo object is found with the given pk, raise a NotFound exception.
            raise NotFound

    # DELETE method handler to delete a specific photo.
    def delete(self, request, pk):
        # Use the helper method to get the photo object.
        photo = self.get_object(pk)
        # Delete the photo object from the database.
        photo.delete()
        # Return an HTTP 200 OK status to indicate successful deletion.
        # Note: Usually, HTTP 204 No Content is used to indicate successful deletion without a response body.
