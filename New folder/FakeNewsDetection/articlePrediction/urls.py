from unicodedata import name
from django.urls import path,include
from . import views
urlpatterns = [
    path('',views.home,name='home'),
    path('result/', views.index, name='index'),
]