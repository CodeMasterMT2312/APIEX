# Batalla Pokémon y Usuarios Random

Este proyecto es una página web interactiva que permite a los usuarios seleccionar Pokémon al azar para una batalla y también visualizar una tabla con usuarios random obtenidos de una API. Además, la página incluye una galería de memes extraídos desde una API pública.

## Características

1. **Batalla Pokémon:**
   - Al hacer clic en el botón "Seleccionar", se eligen dos Pokémon al azar de una base de datos en línea (PokéAPI) y se muestran en la página, junto con su imagen y habilidades.
   
2. **Tabla de Usuarios Random:**
   - La aplicación consume datos de la API `https://jsonplaceholder.typicode.com/users` para mostrar una tabla con información sobre usuarios random, como su ID, nombre y correo electrónico.
   
3. **Galería de Memes:**
   - Se utiliza la API de `https://api.imgflip.com/get_memes` para cargar memes aleatorios en una galería dentro de la página.

## Tecnologías Utilizadas

- **HTML5:** Estructura de la página.
- **CSS3:** Diseño y estilo visual de la página, utilizando el framework **Bootstrap 5.3** para componentes responsivos.
- **JavaScript:** Lógica para manejar la obtención de datos desde APIs y manipulación del DOM.
- **APIs:** 
  - PokéAPI para mostrar Pokémon.
  - Jsonplaceholder para generar una tabla de usuarios.
  - Imgflip para cargar memes.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/nombre-del-proyecto.git
   ```

2. Abre el archivo `index.html` en tu navegador para ver la página funcionando.

## Uso

1. **Seleccionar Pokémon para la Batalla:**
   - Haz clic en el botón "Seleccionar" para elegir dos Pokémon aleatorios y enfrentarlos.

2. **Visualizar Usuarios Random:**
   - En la sección de "Usuarios Random", se mostrará una tabla con los datos extraídos de la API. No es necesario realizar ninguna acción adicional, ya que los datos se cargan automáticamente.

3. **Ver Memes:**
   - Los memes se cargarán automáticamente en la sección "Poli Memes". Se mostrarán varios memes de manera dinámica al abrir la página.

## Archivos Principales

- `index.html`: Estructura principal del proyecto, que incluye las secciones de Pokémon, tabla de usuarios y galería de memes.
- `datosPokemon.js`: Lógica que maneja la obtención de Pokémon y su despliegue.
- `datosUsers.js`: Manejo de la API para obtener y mostrar usuarios random en la tabla.
- `datosMemes.js`: Script que se encarga de obtener memes de la API y mostrar en la página.
- `styles.css`: (Si tienes un archivo CSS personalizado) Estilos adicionales para mejorar la presentación visual.

## APIs Utilizadas

- **PokéAPI:** [https://pokeapi.co/](https://pokeapi.co/)
- **Jsonplaceholder API:** [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
- **Imgflip Meme Generator API:** [https://api.imgflip.com/](https://api.imgflip.com/)

## Imagenes

![Imagen1](https://github.com/user-attachments/assets/51725099-0e7b-4ea5-b913-34cfe5ad94a5)

![Imagen2](https://github.com/user-attachments/assets/c7d2dd74-1670-441c-9826-a9805a94dbc2)

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir issues o pull requests para sugerir mejoras o reportar errores.

