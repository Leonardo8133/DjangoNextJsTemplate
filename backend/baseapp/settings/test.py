from .base import *

# Database
# https://docs.djangoproject.com/en/3.0/ref/settings/#databases

## sqlite for testing
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': 'database',
    }
}