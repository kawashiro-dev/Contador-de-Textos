# Contadores de Texto (JavaScript y Python)

Este repositorio contiene dos implementaciones de una herramienta de contador de texto: una en JavaScript para su uso en navegadores web y otra en Python para su uso en scripts y aplicaciones del lado del servidor. Ambas versiones permiten analizar un texto y obtener diversas estadísticas sobre su contenido, como la cantidad de caracteres, palabras, números y caracteres especiales.

## Descripción General

Estas herramientas de contador de texto son útiles para analizar la composición de un texto.  Pueden ser empleadas en aplicaciones de edición de texto, procesamiento de datos, análisis de contenido y otras áreas donde se requiera obtener información estadística sobre el texto.

### Características

* **Conteo de Caracteres:** Calcula el número total de caracteres, con y sin espacios.
* **Conteo de Letras:** Determina el número total de letras en el texto.
* **Conteo de Números:** Identifica y cuenta el número de valores numéricos.
* **Conteo de Caracteres Especiales:** Cuenta los caracteres que no son letras, números ni espacios.
* **Conteo de Palabras:** Calcula el número total de palabras completas.
* **Conteo de Elementos:** Cuenta el número total de "elementos" (palabras y números separados por espacios).
* **Mensajes Informativos:** Proporciona mensajes claros sobre la ausencia de palabras en el texto.
* **Implementaciones Versátiles:** Disponible en JavaScript para su uso en el cliente y en Python para el servidor.

## Contador de Texto en JavaScript

### Descripción

La versión en JavaScript es una aplicación web que permite a los usuarios ingresar un texto y analizarlo directamente en el navegador.  Calcula diversas estadísticas del texto y las muestra en la página.

### Funcionalidades

* **Interfaz de Usuario:** Proporciona un área de texto para la entrada del usuario y muestra los resultados del análisis de forma organizada.
* **Análisis en Tiempo Real:** El análisis se realiza en el cliente, ofreciendo una respuesta inmediata.
* **Validación de Entrada:** Verifica que se haya ingresado texto antes de realizar el análisis.
* **Presentación de Resultados:** Muestra claramente el conteo de caracteres, letras, números, caracteres especiales, palabras y elementos.
* **Mensajes Informativos:** Muestra un mensaje si no se encuentran palabras completas en el texto.

### Tecnologías Utilizadas

* HTML
* CSS
* JavaScript

### Instalación y Uso

1.  Clona el repositorio.
2.  Abre el archivo `index.html` en un navegador web.
3.  Ingresa el texto que deseas analizar en el área de texto proporcionada.
4.  Haz clic en el botón "Analizar".
5.  Los resultados del análisis se mostrarán debajo del área de texto.

### Estructura de Archivos
/
├── index.html
└── Contador de texto.js
* `index.html`: La página web principal que contiene la interfaz de usuario.
* `Contador de texto.js`: El código JavaScript que realiza el análisis del texto.

## Contador de Texto en Python

### Descripción

La versión en Python es un script que realiza el análisis de texto y muestra los resultados en la consola.  Utiliza expresiones regulares para identificar patrones en el texto.

### Funcionalidades

* **Análisis de Texto Detallado:** Calcula el conteo de caracteres, letras, números, caracteres especiales, palabras y elementos.
* **Uso de Expresiones Regulares:** Emplea el módulo `re` para un análisis eficiente de patrones en el texto.
* **Interfaz de Línea de Comandos:** Toma la entrada del usuario a través de la línea de comandos y muestra los resultados en la consola.
* **Mensajes Informativos:** Proporciona un mensaje si no se encuentran palabras completas en el texto.

### Tecnologías Utilizadas

* Python
* Módulo `re` (expresiones regulares)

### Requisitos

* Python 3.x

### Instalación y Uso

1.  Asegúrate de tener Python 3.x instalado.
2.  Ejecuta el script `Contador de texto.py` desde la línea de comandos: `python Contador de texto.py`
3.  Ingresa el texto que deseas analizar cuando se te solicite.
4.  Los resultados del análisis se mostrarán en la consola.

### Estructura de Archivos

/
└── Contador de texto.py


* `Contador de texto.py`: El script de Python que realiza el análisis del texto.

## Consideraciones Importantes

* **Definición de "Palabra":** Ambas versiones definen "palabra" como una secuencia de letras separada por espacios.  Esto puede no ser adecuado para todos los contextos lingüísticos.
* **Manejo de Casos Especiales:** Las herramientas pueden tener dificultades con ciertos casos especiales, como palabras con guiones o apóstrofes.
* **Mejoras Futuras:** Se podrían considerar mejoras como la implementación de opciones para personalizar la definición de "palabra", soporte para diferentes codificaciones de caracteres y la adición de más estadísticas de texto.

## Licencia

Este proyecto se distribuye bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
MIT License

Copyright (c) 2024 Mitsunori Kawashiro

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
## Autor

**Mitsunori Kawashiro**

* Sitio web: [https://kawashiro.dev/](https://kawashiro.dev/)
* Correo electrónico: [contact@kawashiro.dev](mailto:contact@kawashiro.dev)

## Agradecimientos

Agradezco a la comunidad de código abierto por sus valiosas contribuciones y recursos que hicieron posible este proyecto.
