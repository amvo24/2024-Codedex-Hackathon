from django.urls import path, include
from rest_framework.routers import SimpleRouter
from .views import EventViewSet

router = SimpleRouter()

router.register(
    r'events',
    EventViewSet,
    basename='events'
)

urlpatterns = [
    path('', include(router.urls)),
]
# from django.urls import path
# from .views import EventListView, EventDetailView, EventCreateView, EventUpdateView, EventDeleteView

# app_name = 'events'

# urlpatterns = [
#     path('hi', EventListView.as_view(), name='events-list'),
#     path('<int:pk>/', EventDetailView.as_view(), name='event-detail'),
#     path('create/', EventCreateView.as_view(), name='event-create'),
#     path('<int:pk>/update/', EventUpdateView.as_view(), name='event-update'),
#     path('<int:pk>/delete/', EventDeleteView.as_view(), name='event-delete'),
# ]
