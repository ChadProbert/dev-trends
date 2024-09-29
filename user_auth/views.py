from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth.models import User


def user_login(request):
    """Render the login page.

    :param HttpRequest request: The HTTP request object.

    :returns: The rendered 'login.html' template.
    :rtype: HttpResponse
    """
    return render(request, "authentication/login.html")


def authenticate_user(request):
    """Authenticate the user based on provided credentials.

    :param HttpRequest request: The HTTP request object containing POST data.

    :returns: A redirect to the 'index' page if successful,
              otherwise re-renders 'login.html' with an error message.
    :rtype: HttpResponse or HttpResponseRedirect
    """

    # Captures & attempts to authenticate the credentials provided by the user
    username = request.POST["username"]
    password = request.POST["password"]
    user = authenticate(username=username, password=password)

    # If the login object returns None, then the user is not authenticated
    if user is None:
        # Added error handling for if the login credentials are incorrect
        error_message = "Invalid username or password."
        return render(
            request, "authentication/login.html", {"error_message": error_message}
        )

    # If the login object returns a user object, then the user is authenticated
    # and redirected
    else:
        login(request, user)
        # Directs the user to the index page '/'
        return HttpResponseRedirect(reverse("news:index"))


def show_user(request):
    """Display the authenticated user's information.

    :param HttpRequest request: The HTTP request object.

    :returns: The rendered 'user.html' template with the user's username and password.
    :rtype: HttpResponse
    """
    return render(
        request,
        "authentication/user.html",
        {"username": request.user.username, "password": request.user.password},
    )


def register(request):
    """Register a new user and log them in if successful.

    :param HttpRequest request: The HTTP request object.

    :returns: A redirect to the 'index' page if successful,
            otherwise re-renders 'register.html' with an error message.
    :rtype: HttpResponse or HttpResponseRedirect
    """
    # Checks if the request method is a POST request
    if request.method == "POST":
        name = request.POST.get("name")
        username = request.POST.get("username")
        password = request.POST.get("password")
        confirmed_password = request.POST.get("confirmed_password")

        # Checks if the passwords match
        if password != confirmed_password:
            error_message = "Passwords do not match"
            return render(
                request,
                "authentication/register.html",
                {"error_message": error_message},
            )

        # Checks if the username already exists
        if User.objects.filter(username=username).exists():
            error_message = "Username already exists"
            return render(
                request,
                "authentication/register.html",
                {"error_message": error_message},
            )

        # If the above checks pass, create the user in the db
        user = User.objects.create_user(username=username, password=password)
        user.first_name = name
        user.save()

        # Logs the user in if the registration is successful
        user = authenticate(username=username, password=password)
        login(request, user)

        # Sends the user to the app
        return HttpResponseRedirect(reverse("news:index"))

    return render(request, "authentication/register.html")


def user_logout(request):
    """Log the user out and redirect to the login page.

    :param HttpRequest request: The HTTP request object.

    :returns: A redirect to the login page.
    :rtype: HttpResponseRedirect
    """

    # Logs the user out using the built-in logout function
    logout(request)
    return redirect("user_auth:login")


# References:
# My own work from Level 2 Task 22
# Docstrings -
# https://www.youtube.com/watch?v=HsHJo8RRkn0&ab_channel=VeryAcademy
