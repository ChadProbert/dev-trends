# Generated by Django 4.2.7 on 2023-11-13 13:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='article',
            old_name='likes',
            new_name='likes_count',
        ),
    ]
