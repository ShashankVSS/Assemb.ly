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
import time
import sys
sys.path.insert(1, '../ML')
import detect_1
import detect_2
import requests
import base64, cv2
import json

client = MongoClient("mongodb+srv://Harshil:Patel@cluster0.bi28rrw.mongodb.net/?retryWrites=true&w=majority")
dbname = client['scans']
collection = dbname['id']

defaultdict = {'Blue Button': 1, 'LED': 1, 'Capacitor': 2, 'Pressure Sensor': 1, 'Red Button': 1, 'Resistor': 3, 'Transistor': 2}

def get_good(request):
    return HttpResponse(collection.find({'Pass': True}))

def get_bad(request):
    return HttpResponse(collection.find({'Pass': False}))

def scan(request):
    dataurl = request.POST.get('file')
    bytes = base64.b64decode(dataurl)
    cv2.imwrite('testimg.jpg')

    missing, img = detect_2.detect()
    join = ','.join(missing)

    retval, buffer = cv2.imencode('.jpg', img)
    img_base64 = base64.b64encode(buffer)
    post_data = {'key': "5cbafe6f2ff8a9f0342fe29d7ee7ae17", 'image': img_base64}
    response = requests.post('https://api.imgbb.com/1/upload', data=post_data)
    content = response.content
    
    jsonResponse = json.loads(content.decode('utf-8'))
    # print(jsonResponse)
    collection.insert_one({'Date': time.time(), 'Img': jsonResponse['data']['url'], 'Missing': join, 'Pass': False if len(missing) else True})

    return HttpResponse(jsonResponse['data']['url'])

urlpatterns = [
    path('admin/', admin.site.urls),
    path('scan/', scan),
    path('get_good/', get_good),
    path('get_bad/', get_bad),
]

print(detect_1.defaultdict)