"""vacunasMaule URL Configuration

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
from django.urls import path
from vacunasMaule import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('buscar_paciente/', views.v_buscar_paciente),
    path('listar_pacientes/', views.listar_pacientes),
    path('ingresar_paciente/', views.v_ingresar_paciente),
    path('eliminar_paciente/', views.v_eliminar_paciente),

    path('ingresar_registro/', views.ingresar_paciente),
    path('busca_pte/', views.buscar_paciente),
    path('elimina_pte/', views.eliminar_paciente),

    # professional
    path('profesional/', views.index_pro),
    path('listar_profesionales/', views.listar_profesionales),
    path('buscar_profesional/', views.v_buscar_profesional),
    path('ingresar_profesional/', views.v_ingresar_profesional),
    path('eliminar_profesional', views.v_eliminar_profesional),
    path('ingresar_registro_pro', views.ingresar_profesional),
    path('busca_pro/', views.buscar_profesional),
    path('elimina_pro', views.eliminar_profesional),
    path('editar_profesional/<str:rut_profesional>', views.v_editar_profesional),
    path('edita_pro', views.editar_profesional),
    
]
