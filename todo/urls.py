from django.urls import path

from . import views

app_name = 'todo'

urlpatterns = [
    path('task-list/', views.ListTaskView.as_view(), name='task-list'),
    path('task-create/', views.CreateTaskView.as_view(), name='task-create'),
]
