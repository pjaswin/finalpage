# from django.conf.urls import urls
from django.urls import path, include
from django.urls import re_path as url
from .views import (
    TodoListApiView,
    TodoDetailApiView,
)

urlpatterns = [
    path('api/', TodoListApiView.as_view()),
    path('api/<int:todo_id>/', TodoDetailApiView.as_view()),
]