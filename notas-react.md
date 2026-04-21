# Estructura del proyecto:

### React vs React-Dom

- React: se encarga de crear componentes y manejar la lógica.
- ReactDOM: se encarga de renderizar esos componentes en el navegador (DOM).

### Que es JSX

- Es una extencion de sintaxis de react que combina HTML con Javascript para poder hacer componentes dinamicos y reutilizables.

# Componentes

- Un componente es un bloque de construccion de la interface de usuario, encapsula la logica de una parte pequeña de lo que ve el usuario, la union de todas esas partes pequeñas es lo que conforma la app
- Cuando exportamos una funcion en particular (no haciendo export default), debemos encerrar el nombre de la funcion entre corchetes al momento de hacer la importacion en el lugar deseado.
- Si la funcion retorna JSX ya es un componente, es decir, no necesariamente tiene que ser la funcion que se exporta fuera del archivo en concreto.

# Variables en JSX

- Es recomendable declarar las variables fuera del componente (funcion), es decir, en el ambito global, para asi evitar que las variables se vuelvan a crear cada vez que el componente es renderizado. Esto no hace a las variables disponibles para toda la app, solo para ese componente en particular y en todas las funciones dentro de ese archivo.
- Las variables en JSX se declaran igual que en JS, pero se llaman (utilizan) poniendo llaves y dentro de las llaves la referencia a la variable:

```jsx
//Declaracion de variables:

const string = "Soy un string";
const number = 6;
const boolean = true;
const funcion = () => {
  return "Soy una funcion";
};
const array = [
  "Dato uno",
  2,
  false,
  "Delante de mi hay un boolean con valor false",
];
const obj = {
  nombre: "Julio",
  apellido: "Cojepalo",
  edad: 22,
};
const fecha = new Date();

export const PrimerComponente = () => {
  return <h1>{string}</h1>;
};
```

- Las funciones hay que ejecutarlas dentro de las llaves para que renderize el valor que retornan: funcion()
- Los objetos no los renderiza, si necesitamos el renderizado de un objeto, podemos usar json.stringify(aqui pasamos el objeto)

# PROPS

- Los props son un mecanismo para pasar informacion desde un componente padre a un componente hijo, son objetos que tiene valores y nos permiten la comunicacion entre componentes.

```jsx
//Forma antigua de trabajar con los props:
export const PrimerComponente = (props) => {
  console.log(props);
  return (
    <>
      <h1>Seccion de props</h1>
      <h3>{props.titulo}</h3>
    </>
  );
};
```

- En el padre (donde se usa el componente) se usa asi:

```jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimerComponente valor-prop="Este es el valor de P" />
    <SegundoComponente />
  </StrictMode>,
);
```

- Generalmente los props se trabajan usando desestructuracion:

```jsx
//Forma moderna de trabajar con los props:
export const PrimerComponente = ({ titulo, subtitulo }) => {
  console.log(titulo, subtitulo);
  return (
    <>
      +<h1>Seccion de props</h1>
      <h3>{titulo}</h3>
      <h3>{subtitulo}</h3>
    </>
  );
};
```

- Los numeros se pasan dentro de corchetes:

```jsx
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrimerComponente titulo="Este es el valor de P" subtitulo={5} />
    <SegundoComponente />
  </StrictMode>,
);
```

### prop-types

- Para agregar una especie de tipado (cuando no estamos usando TypeScript) podemos hacerlo importanto prop-types, es una libreria y no viene incluida en la instalacion del proyecto de react con vite, hay que instalarla manualmente con el comando npm i prop-types el uso de las prop-types es el siguiente:

```jsx
//Importante que aqui ponemos propTypes con la "p" minuscula
PrimerComponente.propTypes = {
  titulo: PropTypes.string.isRequired, // Con isRequired la hacemos obligatoria
  subtitulo: PropTypes.string, //Es opcional ya que no lleva isRequired
};
```

- Podemos colocar valores por defecto para prevenir el caso de que no se envie alguna propiedad esperada, lo podemos hacer tanto en la desestructuracion de las props:

```jsx
const Prueba => ({valor = "valor de prueba"}  ){
  return ({valor})
}
```

- Tambien se puede hacer en una declaracion separada:

```jsx
Prueba.defaultProps = {
  valor: "Esto es un valor de prueba",
};
```

# Eventos

- Los eventos son mecanismos por los cuales los componentes pueden reaccionar a la interaccion del usuario (click, mouse, etc...)
- Se pueden crear funciones que contengan codigo .jsx fuera del componente como tal. La forma habitual de trabajar con los eventos en React es como se muestra a continuacion:

```jsx
//Aqui debajo la declaracion de la funcion externa
// const FuncionExterna = () => {
//   return <button>Soy un Boton</button>;
// };

export const Contador = () => {
  return (
    <>
      <h1>Contador</h1>
      {/* <FuncionExterna></FuncionExterna> //Llamada a la funcion externa */}
      <button
        onClick={function () {
          console.log("Soy un bonton en React!");
        }}
      >
        Soy un boton
      </button>
    </>
  );
};
```

- cuando vamos a recibir un solo parametro de la funcion, podemos ejecutar la funcion de la siguiente manera:

```jsx

export const Contador = () => {
  const handleClick = (event) => {
  console.log(event);
};
  return (
    <>
      <h1>Contador</h1>

      <button onClick={handleClick}>Soy un boton</button>
        Soy el segundo boton
      </button>
    </>
  );
};

```

- Cuando vamos a manejar mas de un parametro, lo hacemos de la siguiente manera:

```jsx
export const Contador = () => {
  const handleAnotherClick = (event, segundoArgumento) => {
    console.log(event);
    console.log(segundoArgumento);
  };
  return (
    <>
      <h1>Contador</h1>

      <button onClick={(event) => handleAnotherClick(event, "Hola Mundo")}>
        Soy el segundo boton
      </button>
    </>
  );
};
```

- Tambien, una forma en que se puede trabajar con esto es creando la funcion que crea el boton y el evento onClick fuera (en el escope global), tambien crear la funcion con el codigo que ejecutara el evento onClick ya sea dentro del escope de la funcion que crea el boton o en el escope global y dentro del componente solo llamar la funcion que crea el boton:

```jsx
// const FuncionExterna = () => {
//   return <button>Soy un Boton</button>;
// };

const handleClick = (event) => {
  console.log(event);
};

const Button = () => {
  return <button onClick={handleClick}>Soy el boton de afuera</button>;
};

export const Contador = () => {
  return (
    <>
      <h1>Contador</h1>
      <Button></Button>
    </>
  );
};
```

# Hooks

- Un hook es una funcion especial que nos permite usar una funcion de react en un componente de tipo funcion, sirven para manejar el estado y otros componentes de react, sin necesidad de usar componentes de clase. Existen hooks nativos de reat y tambien se pueden crear hooks propios llamados custom hooks.

### Estado en React:

- Un estado en react es un objeto que contiene datos y representa la informacion que una interface de usuario necesita para renderizarse y funcionar correctamete. El estado es mutable y tiene todos los datos que necesita un componente para funcionar correctamente y mutar si es lo que necesita

- Para modificar el estado de la app en react usamos el hook useState, para usarlo debemos declarar una constante asignando dos variables: 1 la variable a modificar, 2 el metodo que modificara la variable, encerramos estas dos variables entre llaves y la igualamos al hook useState, pasando como parametro al hook el punto de inicio de la variable que modificaremos, este puede ser: el prop que recibimos del padre o un dato ingresado manualmente:

```jsx
export const Contador = ({ num }) => {
  const [contar, setContar] = useState(num);
  const handleClick = () => {
    setContar(contar + 1);
  };
  return (
    <>
      <h1>Contador</h1>
      <h3>{contar}</h3>
      <button onClick={handleClick}>Haz click!</button>
    </>
  );
};
```

- Como se puede ver, dentro de la funcion que maneja el click es donde usamos el metodo que definimos para modificar la variable.

# Condicionales y Ternarios

- Los ternarios son if-else en formato reducido, sirven para renderizar basado en condiciones:

```jsx

const Items = ({descripcion, visto}) => {
  return(<li>{descripcion} {visto ? "✅" : ⛔} </li>)
}

export const ListApp = () => {
  return (
    <>
      <Items descripcion = "Una cosa" visto: false />
      <Items descripcion = "Una cosa" visto: false />
      <Items descripcion = "Una cosa" visto: false />
      <Items descripcion = "Una cosa" visto: false />
      <Items descripcion = "Una cosa" visto: false />
      <Items descripcion = "Una cosa" visto: false />
      <Items descripcion = "Una cosa" visto: false />
      <Items descripcion = "Una cosa" visto: false />
      <Items descripcion = "Una cosa" visto: false />
      <Items descripcion = "Una cosa" visto: false />
      <Items descripcion = "Una cosa" visto: false />
    </>
  )
}
```
