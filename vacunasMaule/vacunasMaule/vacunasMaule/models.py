from statistics import mode
from django.db import models
from django.utils.timezone import now

# Create your models here.
class Paciente(models.Model): 
    rut = models.CharField(max_length=15)
    nombre = models.CharField(max_length=50)
    appaterno = models.CharField(max_length=50)
    apmaterno = models.CharField(max_length=50)
    edad = models.IntegerField()
    vacuna = models.CharField(max_length=50)
    fecha = models.DateField()

    
class Professional(models.Model): 
    rut = models.CharField(max_length=15)
    nombre = models.CharField(max_length=50)
    appaterno = models.CharField(max_length=50)
    apmaterno = models.CharField(max_length=50)
    profesion = models.CharField(max_length=50, editable=True)
    fechanacto = models.DateField(default=now, editable=True )
    email = models.CharField(max_length=100, default='', editable=True)