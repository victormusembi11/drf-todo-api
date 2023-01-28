from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView

from .models import Task
from .serializers import TaskSerializer


class ListTaskView(ListAPIView):

    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class CreateTaskView(CreateAPIView):

    queryset = Task.objects.all()
    serializer_class = TaskSerializer


class DetailTaskView(RetrieveAPIView):

    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get(self, request, pk, *args, **kwargs):
        self.queryset = Task.objects.filter(pk=pk)
        return super().get(request, pk, *args, **kwargs)
