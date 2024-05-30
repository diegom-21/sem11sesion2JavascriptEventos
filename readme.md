# Proyecto de Formulario en Javascript

## Descripcion

El formulario para ingresar el nombre de una tarea y el autor de la misma. Valida que ambos campos no estén vacíos antes de enviar los datos, muestra mensajes de error o éxito según corresponda, limpia los campos después de enviarlos correctamente y muestra los datos ingresados en la consola.

## Funcionalidad con JavaScript

**Captura y manejo de eventos**:
   - Se añadieron escuchadores de eventos addEventListener para capturar la entrada del usuario en los campos de texto y el envío del formulario.
   
**Validación de datos**:
   - Se implementó una función validateData que verifica si los campos de texto no están vacíos.
   - Si los campos están vacíos, se muestra un mensaje de error en el contenedor de mensajes messageElement

**Limpieza de campos**:
   - Tras la validación y envío exitoso del formulario, se limpian los campos de entrada llamando a la función clearFields.
   
**Mostrar mensajes**:
   - La función showMessage se encarga de mostrar mensajes de éxito o error en el contenedor de mensajes, utilizando clases de Bootstrap para estilizar el texto  text-success para éxito y text-danger para error).

**Mostrar datos en la consola**:
   - Cuando el formulario se envía correctamente, los datos ingresados se muestran en la consola del navegador usando console.log.

## CSS Personalizado

- Se definieron estilos personalizados en el archivo style.css para los mensajes de texto text-success y text-danger), asegurando que los mensajes de éxito se muestren en verde y los mensajes de error en rojo.

