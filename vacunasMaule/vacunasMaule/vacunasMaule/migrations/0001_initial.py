# Generated by Django 4.0.5 on 2022-06-30 21:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Paciente',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('rut', models.CharField(max_length=15)),
                ('nombre', models.CharField(max_length=50)),
                ('appaterno', models.CharField(max_length=50)),
                ('apmaterno', models.CharField(max_length=50)),
                ('edad', models.IntegerField()),
                ('vacuna', models.CharField(max_length=50)),
                ('fecha', models.DateField()),
            ],
        ),
    ]
