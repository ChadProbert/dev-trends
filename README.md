<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<div align="center">
  <img src="placeholder.webp" alt="Logo" width="250" height="250" style="border-radius: 15px;">

  ### Dev Trends

  <p>
    Trends today, skills tomorrow.
    <br />
    <br />
    <a href="https://github.com/ChadProbert/dev-trends/issues">Report Bug</a>
    ·
    <a href="https://github.com/ChadProbert/dev-trends/pulls">Request Feature</a>
  </p>

  <!-- SHIELDS.IO -->
  ![GitHub repo size](https://img.shields.io/github/repo-size/ChadProbert/dev-trends)
  ![GitHub last commit](https://img.shields.io/github/last-commit/ChadProbert/dev-trends)
  ![GitHub issues](https://img.shields.io/github/issues-raw/ChadProbert/dev-trends)
  ![GitHub pull requests](https://img.shields.io/github/issues-pr/ChadProbert/dev-trends)
  ![GitHub Repo stars](https://img.shields.io/github/stars/ChadProbert/dev-trends?style=social)

  #### Built With

  ![DJANGO](https://img.shields.io/badge/Django-016201?style=for-the-badge&logo=django&logoColor=white)
  ![PYTHON](https://img.shields.io/badge/Python-4221E7?style=for-the-badge&logo=python&logoColor=F8BB01)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F3BF21?style=for-the-badge&logo=javascript&logoColor=black)
  ![CSS](https://img.shields.io/badge/CSS3-4067DB?style=for-the-badge&logo=css3&logoColor=white)

</div>

<br/>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#setup-your-virtual-environment">Setup your Virtual Environment</a></li>
        <li><a href="#installing-dependencies">Installing Dependencies</a></li>
        <li><a href="#running-dev-trends">Running Dev Trends</a></li>
      </ul>
    </li>
    <li><a href="#sphinx-documentation">Sphinx Documentation</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>

<br/>

## Getting Started

To get a local copy up and running follow these steps.

<br/>

### Setup Your Virtual Environment
Install **[VirtualEnv](https://virtualenv.pypa.io/)** globally


    pip3 install virtualenv

Navigate to the root directory

    cd dev-trends

Activate virtual environment

    source venv/bin/activate

<br/>

### Installing Dependencies
**Once the virtual environment is setup**, install project dependencies using:

    pip3 install -r requirements.txt

<br/>

### Running Dev Trends

Start the development server using:

    python3 manage.py runserver

<br/>

The application should now be running at **http://127.0.0.1:8000/**.

<br/>

<img src="images/1.png" alt="homepage" style="border-radius: 5px;">

## Running With Docker

To run the application with Docker, run the following commands in the terminal:

    
    sudo docker pull chadcprobert/my-website

then
    
    sudo docker run -p 8000:8000 my-website


<br />

## Sphinx Documentation
To view the documentation generated using **[Sphinx](https://www.sphinx-doc.org/en/master/)**, navigate to the `docs/_build/html` folder and open `index.html` in your browser.

<br />

## Contributors
[<img src="https://github.com/ChadProbert.png" width="40"/>](https://github.com/ChadProbert/)
<br />
<br />
<br />
<p align="center"><a href="#readme-top">(back to top)</a></p>
