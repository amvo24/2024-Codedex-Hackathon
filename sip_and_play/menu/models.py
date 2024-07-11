from django.db import models

# Create your models here.
class MenuItem(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)



# class Drink(MenuItem):
    # Might need additional fields for drinks here
