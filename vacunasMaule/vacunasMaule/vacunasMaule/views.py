from asyncio.windows_events import NULL
from django.shortcuts import render
from vacunasMaule.models import Paciente
from django.http import HttpResponse

# Create your views here.
def index(request):
    return render(request,"paciente/index.html")

def index_pro(request):
    return render(request,"profesional/index_pro.html")

def v_ingresar_paciente(request):
    return render(request, "paciente/ingresarPaciente.html")

def v_buscar_paciente(request):
    return render(request, "paciente/buscarPaciente.html")

def v_listar_pacientes(request):
    return render(request, "paciente/listaPacientes.html")

def v_eliminar_paciente(request):
    return render(request, "paciente/eliminarPaciente.html")

def listar_pacientes(request):
    datos = Paciente.objects.all()
    return render(request,"paciente/listaPacientes.html",{'pacientes':datos})

def ingresar_paciente(request):
    rut = request.GET["rut"]
    nombre = request.GET["nombre"]
    appaterno = request.GET["appaterno"]
    apmaterno = request.GET["apmaterno"]
    edad = request.GET["edad"]
    vacuna = request.GET["vacuna"]
    fecha = request.GET["fecha"]
    if len(nombre) > 0 and len(rut) > 0 and len(appaterno) > 0 and len(apmaterno) > 0 and edad != NULL and len(vacuna) > 0 and fecha != NULL:
        pte = Paciente(rut = rut, nombre = nombre, appaterno = appaterno, apmaterno = apmaterno, edad = edad, vacuna = vacuna, fecha = fecha)
        pte.save()
        mensaje = "Paciente registrado exitosamente."
    else:
        mensaje = "Verifique datos ingresados, no se ingresó paciente."
    return render(request, "paciente/ingresarPaciente.html", {'mensaje':mensaje})

def buscar_paciente(request):
    if request.GET["rut_paciente"]:
        paciente = request.GET["rut_paciente"]
        resultados = Paciente.objects.filter(rut__icontains=paciente)
        if resultados: 
            return render(request, "paciente/buscarPaciente.html", {"pacientes": resultados, "query": paciente})
        else:
            mensaje = "No se encontraron coincidencias."
            return render(request, "paciente/buscarPaciente.html", {"mensaje": mensaje})
    else:
        mensaje = "Debe ingresar un rut para buscar."
        return render(request, "paciente/buscarPaciente.html", {"mensaje": mensaje})

def eliminar_paciente(request):
    if request.GET["rut_paciente"]:
        id_paciente = request.GET["rut_paciente"]
        paciente = Paciente.objects.filter(rut = id_paciente)
        if paciente:
            pte = Paciente.objects.get(rut = id_paciente)
            pte.delete()
            mensaje = "Registro eliminado exitosamente."
        else:
            mensaje = "Registro no ha sido eliminado, no existe paciente con rut ingresado."
    else:
        mensaje = "Debe ingresar un rut correcto para su eliminación."
    return render(request, "paciente/eliminarPaciente.html", {"mensaje": mensaje})

