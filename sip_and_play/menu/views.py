from django.shortcuts import render
from rest_framework import viewsets
# from rest_framework.renderers import TemplateHTMLRenderer
# from rest_framework.response import Response
from .models import MenuItem
from .serializers import MenuItemSerializer


# Create your views here.
class MenuItemViewSet(viewsets.ModelViewSet):
    # renderer_classes = [TemplateHTMLRenderer]
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

    # def list(self, request, *args, **kwargs):
    #     queryset = self.get_queryset()
    #     serializer = self.get_serializer(queryset, many=True)
    #     return Response({'events': serializer.data})

    # def retrieve(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     serializer = self.get_serializer(instance)
    #     return Response({'event': serializer.data})
