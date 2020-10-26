from rest_framework import serializers
from .models import Quiz

class QuizSerializer(serializers.Serializer):
    question = serializers.CharField(max_length=100)
    choice1 = serializers.CharField(max_length = 100)
    choice2 = serializers.CharField(max_length = 100)
    choice3 = serializers.CharField(max_length = 100)
    choice4 = serializers.CharField(max_length = 100)