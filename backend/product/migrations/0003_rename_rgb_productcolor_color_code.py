# Generated by Django 5.0.2 on 2024-02-29 12:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_remove_product_size'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productcolor',
            old_name='rgb',
            new_name='color_code',
        ),
    ]
