from django.urls import path

from . import views

app_name = 'todo'

urlpatterns = [
    path('task-list/', views.ListTaskView.as_view(), name='task-list'),
    path('task-create/', views.CreateTaskView.as_view(), name='task-create'),
    path('task-detail/<int:pk>/', views.DetailTaskView.as_view(), name='task-detail'),
    path('task-update/<int:pk>/', views.UpdateTaskView.as_view(), name='task-update'),
    path('task-delete/<int:pk>/', views.DeleteTaskView.as_view(), name='task-delete'),
]
