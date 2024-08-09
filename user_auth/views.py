from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.models import User


def user_login(request):
    """
    purpose:
    - to render the login page

    args:
    - HttpRequest object

    returns:
    - rendered login.html template
    """
    return render(request, "authentication/login.html")


def authenticate_user(request):
    """
    purpose:
    - to authenticate the user based on credentials given

    args:
    - HttpRequest object containing post request data (username and password)

    returns:
    - HttpResponseRedirect object if successful
    - re-renders login.html template with error message if unsuccessful
    """

    # captures & attempts to authenticate the credentials provided by the user
    username = request.POST["username"]
    password = request.POST["password"]
    user = authenticate(username=username, password=password)

    # if the login object returns None, then the user is not authenticated
    if user is None:
        # added error handling for if the login credentials are incorrect
        error_message = "Invalid username or password."
        return render(
            request, "authentication/login.html", {"error_message": error_message}
        )

    # if the login object returns a user object, then the user is authenticated and redirected
    else:
        login(request, user)
        # directs the user to the index page '/'
        return HttpResponseRedirect(reverse("news:index"))


def show_user(request):
    """
    purpose:
    - to display the authenticated user's information

    args:
    - HttpRequest object

    Returns:
    - rendered user.html template with the user's username and password
    """
    return render(
        request,
        "authentication/user.html",
        {"username": request.user.username, "password": request.user.password},
    )


def register(request):
    """
    purpose:
    - to register a new user

    args:
    - HttpRequest object

    returns:
    - HttpResponseRedirect object if successful
    - re-renders register.html template with error message if unsuccessful
    - if the request method is not a POST request, it renders the registration form page
    """
    # checks if the request method is a POST request
    if request.method == "POST":
        name = request.POST.get("name")
        username = request.POST.get("username")
        password = request.POST.get("password")
        confirmed_password = request.POST.get("confirmed_password")

        # checks if the passwords match
        if password != confirmed_password:
            error_message = "Passwords do not match"
            return render(
                request,
                "authentication/register.html",
                {"error_message": error_message},
            )

        # checks if the username already exists
        if User.objects.filter(username=username).exists():
            error_message = "Username already exists"
            return render(
                request,
                "authentication/register.html",
                {"error_message": error_message},
            )

        # if the above checks pass, create the user in the db
        user = User.objects.create_user(username=username, password=password)
        user.first_name = name
        user.save()

        # logs the user in if the registration is successful
        user = authenticate(username=username, password=password)
        login(request, user)

        # sends the user to the logged in confirmation page
        return HttpResponseRedirect(reverse("news:index"))

    return render(request, "authentication/register.html")


def user_logout(request):
    """
    purpose:
    - to log the user out

    args:
    - HttpRequest object

    returns:
    - user no longer authenticated and is then redirected to the login page
    """
    # logs the user out using the built-in logout function
    logout(request)
    # sends the user to the login page
    return redirect("user_auth:login")


# references:
# My own work from Level 2 Task 22
# Docstrings - https://www.youtube.com/watch?v=HsHJo8RRkn0&ab_channel=VeryAcademy
