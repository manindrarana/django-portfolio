from django.urls import path

from . views import home # . refers to current dir we imported the home func

urlpatterns = [
    path('', home, name="home")
]
