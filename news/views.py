from django.shortcuts import render
from django.contrib.auth.decorators import login_required


@login_required  # Protected the route
def index(request):
    """Render the index page for logged-in users.

    :param HttpRequest request: The HTTP request object.

    :returns: The rendered 'index.html' template.
    :rtype: HttpResponse
    """
    return render(request, 'news/index.html')


# References:
# My own work from task 21
# Login decorator -
# https://docs.djangoproject.com/en/4.2/topics/auth/default/#the-login-required-decorator
