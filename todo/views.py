from rest_framework.generics import ListAPIView, CreateAPIView

from .models import Task
from .serializers import TaskSerializer


class ListTaskView(ListAPIView):

    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class CreateTaskView(CreateAPIView):

    queryset = Task.objects.all()
    serializer_class = TaskSerializer
