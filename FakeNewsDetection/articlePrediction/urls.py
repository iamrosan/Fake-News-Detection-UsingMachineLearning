from unicodedata import name
from django.urls import path,include
from . import views
urlpatterns = [
    path('', views.index, name='index'),
    path('lstm/',views.home,name='home'),
]