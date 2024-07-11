from django.shortcuts import render
from rest_framework import viewsets
# from rest_framework.renderers import TemplateHTMLRenderer
# from rest_framework.response import Response
from .models import Event
from .serializers import EventSerializer


# Create your views here.
class EventViewSet(viewsets.ModelViewSet):
    # renderer_classes = [TemplateHTMLRenderer]
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    # def list(self, request, *args, **kwargs):
    #     queryset = self.get_queryset()
    #     serializer = self.get_serializer(queryset, many=True)
    #     return Response({'events': serializer.data}, template_name='events-list.html')

    # def retrieve(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     serializer = self.get_serializer(instance)
        # return Response({'event': serializer.data})

# from django.shortcuts import render, get_object_or_404, redirect
# from django.views import View
# from django.http import HttpResponse
# from .models import Event
# from .serializers import EventSerializer
# from django.urls import reverse_lazy
# from django.views.generic import CreateView, UpdateView, DeleteView

# class EventListView(View):
#     template_name = 'events/events-list.html'

#     def get(self, request):
#         queryset = Event.objects.all()
#         serializer = EventSerializer(queryset, many=True)
#         return render(request, self.template_name, {'events': serializer.data})

# class EventDetailView(View):
#     template_name = 'events/event_detail.html'

#     def get(self, request, pk):
#         event = get_object_or_404(Event, pk=pk)
#         serializer = EventSerializer(event)
#         return render(request, self.template_name, {'event': serializer.data})

# class EventCreateView(CreateView):
#     model = Event
#     template_name = 'events/event_form.html'
#     fields = ['title', 'description', 'date']

#     def form_valid(self, form):
#         form.save()
#         return redirect('events:event-list')

# class EventUpdateView(UpdateView):
#     model = Event
#     template_name = 'events/event_form.html'
#     fields = ['title', 'description', 'date']

#     def form_valid(self, form):
#         form.save()
#         return redirect('events:event-list')

# class EventDeleteView(DeleteView):
#     model = Event
#     template_name = 'events/event_confirm_delete.html'
#     success_url = reverse_lazy('events:event-list')
