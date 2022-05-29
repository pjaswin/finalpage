"""final_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
from home import views
from my_app.views import PersonCreate,UserSignup,UserLogin,PersonList,PersonDetail,PersonUpdate,PersonDelete
from django.contrib.auth.views import LogoutView
from todo_api import urls as todo_urls
# from todo_api.viewsviews import (
#     TodoListApiView,
#     TodoDetailApiView,
# )

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('tic_tak/', views.get_tic_tac,  name='tic_tak'),
    path('wordle/', views.get_worlde,  name='wordle'),
    path('blog/', include('blog.urls')),
    path('employee/', include('my_app.urls')),
    path('person-create/', PersonCreate.as_view(), name='personcreate'),
    path('signup/', UserSignup.as_view(), name='signup'),
    path('accounts/login/', UserLogin.as_view(), name='login'),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
    path('person-create/', PersonCreate.as_view(), name='personcreate'),
    path('person-list', PersonList.as_view(), name='personlist'),
    path('person-detail/pk=<int:pk>', PersonDetail.as_view(), name='persondetail'),
    path('person-update/pk=<int:pk>', PersonUpdate.as_view(), name='personupdate'),
    path('person-delete/pk=<int:pk>', PersonDelete.as_view(), name='persondelete'),
    path('api-auth/', include('rest_framework.urls')),
    path('todos/', include(todo_urls)),
    
]
