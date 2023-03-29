from django.contrib import admin
from django.urls import path
from calc import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('add', views.AddView.as_view() ),
    path('sub', views.SubstractView.as_view() ),
    path('fact', views.Factorialview.as_view() ),
    
]
