from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True, null=True)
    start_time = models.DateTimeField(blank=True, null=True)
    end_time = models.DateTimeField(blank=True, null=True)
    location = models.CharField(max_length=200, blank=True, null=True)
    # creator = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
