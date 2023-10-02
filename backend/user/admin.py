from django.contrib import admin
from user.models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ["id", "name", "email"]
    search_fields = ["name", "email"]

admin.site.register(User, UserAdmin)
