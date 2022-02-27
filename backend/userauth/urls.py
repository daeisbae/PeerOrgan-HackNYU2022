from django.urls import path
from . import views

urlpatterns = [
    path('signup/donor/', views.DonorSignUp.as_view()),
    path('signup/recipient/', views.RecipientSignUp.as_view()),
    path('get/', views.GETRecipient.as_view()),
    # path('login/', views.Login.as_view(), name='login'),
]