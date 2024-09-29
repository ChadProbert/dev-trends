import os
import sys
import django

# Add the Django project path to sys.path
sys.path.insert(0, os.path.abspath('../../devTrends'))

# Set the Django settings module
os.environ['DJANGO_SETTINGS_MODULE'] = 'devTrends.settings'

# Initialize Django
django.setup()

# Sphinx configuration
extensions = [
    'sphinx.ext.autodoc',
    'sphinx.ext.intersphinx',
    'sphinx.ext.todo',
    'sphinx.ext.viewcode',
    'sphinx.ext.napoleon',
    'sphinx_autodoc_typehints'
]

templates_path = ['_templates']
exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']

html_theme = 'insegel'
html_static_path = ['_static']

# Project information
project = 'Dev Trends'
copyright = '2024, Chad Probert'
author = 'Chad Probert'
release = '1.0'
