from django.shortcuts import render
from django.contrib.auth.decorators import login_required


# Protected the route with the login_required decorator
@login_required
def index(request):
    return render(request, 'news/index.html')


# References:
# My own work from task 21
# Login decorator -
# https://docs.djangoproject.com/en/4.2/topics/auth/default/#the-login-required-decorator
