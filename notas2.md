# Map

- El map en react funciona igual que en JS, se utiliza sobre un array y devuelve el array modificado con las modificaciones expresadas

## Atomic Design

- Se refiere a ir construyendo partes pequeñas y reutilizables de la interface de usuario como botones, tarjetas, etc...

# className

- La forma de asignar clases en jsx (react)

# Formularios

# Pasar datos (props) de padre a hijo

# Envio de info desde child
- El hijo se puede comunicar con el padre a travez de funciones que reciben parametros:
    - Se envia como prop una funcion que espera un parametro y luego desde el hijo se ejecuta esa funcion enviando el parametro, esta funcion ya ha sido definida en el padre y contiene la logica de lo que hara el padre con la informacion recibida

# useEffect y Fetch

- Que es json placeholder: JSONPlaceholder es una API falsa (mock) gratuita que se usa para practicar llamadas HTTP sin necesidad de tener un backend real. Básicamente: te da datos “de mentira” pero realistas para que pruebes fetch, axios, etc.

- Que es useEffect: Vamos directo al grano: useEffect es el hook que usas cuando necesitas ejecutar “algo extra” fuera del render normal, Ese “algo extra” suele ser:

    - Llamar una API
    - Escuchar eventos
    - Manipular el DOM
    - Sincronizar datos