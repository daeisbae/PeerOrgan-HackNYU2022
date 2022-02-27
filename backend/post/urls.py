from django.urls import path
from . import views

urlpatterns = [
    path('author/', views.PostAuthor.as_view()),
    path('', views.PostEveryone.as_view()),
]