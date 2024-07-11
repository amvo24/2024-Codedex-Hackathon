from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import MenuItemViewSet

router = SimpleRouter()

router.register(
    r'menu-items',
    MenuItemViewSet,
    basename='menu-items'
)

urlpatterns = [
    path('', include(router.urls)),
]
