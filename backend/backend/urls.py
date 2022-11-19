"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
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
from django.urls import path
from django.http import HttpResponse
from pymongo import MongoClient

client = MongoClient("mongodb+srv://Harshil:Patel@cluster0.bi28rrw.mongodb.net/?retryWrites=true&w=majority")
dbname = client['scans']
collection = dbname['id']

def scan(request):
    pass

def get_good(request):
    return HttpResponse(collection.find({'Pass': True}))

def get_bad(request):
    return HttpResponse(collection.find({'Pass': False}))

urlpatterns = [
    path('admin/', admin.site.urls),
    path('scan/', scan),
    path('get_good/', get_good),
    path('get_bad/', get_bad),
]
