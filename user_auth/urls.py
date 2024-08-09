from django.urls import path
from . import views

app_name = "user_auth"

# defining the app's url paths based on the views defined in views.py
urlpatterns = [
    path("", views.user_login, name="login"),
    path("authenticate_user/", views.authenticate_user, name="authenticate_user"),
    path("show_user/", views.show_user, name="show_user"),
    path("register/", views.register, name="register"),
    path("logout/", views.user_logout, name="logout"),
]

# references:
# This task's PDF - HyperionDev
