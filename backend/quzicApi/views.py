from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializers import QuizSerializer
from .models import Quiz

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all().order_by('question')
    serializer_class = QuizSerializer