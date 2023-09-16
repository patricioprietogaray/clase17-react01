import './App.css';

function App() {
  return (
    <>
  <h1>Node JS</h1>
  <h2>¿Qué es Node?</h2>
  <p>Node es un entorno de ejecución que permite ejecutar código JS por fuera del navegador. 
  Node desata el poder de JS, dandole las posibilidades de tener las mismas capacidades de 
  cualquier otro lenguaje de programación, tales como interactuar con nuestro sistema operativo 
  y desarrollar aplicaciones completas. Node hace que JS se pueda utilizar como un lenguaje de tipo 
  compilado, y no interpretado en el que se necesita un navegador para ejecutar el programa. 
  En otras palabras node no depende del navegador.</p>
  <p>Node administrará los paquetes del proyecto en react que construyamos.</p>
  <h2>¿Cómo instalar o actualizar nodeJs desde la consola?</h2>
  <code>$ nvm install node</code>
  <h2>NPM (npm)</h2>
  <p>Es el Administrador de Paquetes de Node (Node Package Manager), a traves del cual vamos a poder 
  instalar o desinstalar las librerias que consideremos necesarias para el desarrollo de nuestra 
  aplicación.</p>
  <p>Podemos instalarlas localmente, disponibles para usar en un proyecto en específico o globalmente, 
  disponibles para usar cada vez que querramos. NPM es una librería de JS.</p>
  <h2>React</h2>
  <p>React es una biblioteca de JS eficiente y declarativa que se utiliza para crear interfaces 
  interactivas. Una librería o biblioteca en este sentido es un conjunto de herramientas 
  (archivos de código) que facilitan el trabajo de los programadores. Es un Framework 
  (marco de trabajo) basado en JS, más simplificado y que se puede crear sitios más eficientemente. 
  Interfaz es algo con lo que se puede interactuar. La interfaz gráfica es para que el usuario 
  se desenvuelva más facilmente.</p>
  <h3>¿Que es Declarativa?</h3>
  <p>Hay dos formas de hacer código una se denomina imperativa y otra declarativa. Imperativa es crear 
  código como se hace en JS vanilla (código paso a paso y explícito en cada lugar, llamarlo 
  y devolver datos). Declarativa se pone que quiero lograr y el sistema por atrás resuelve como hacerlo. </p>
  <h4>Ejemplo de Imperativo</h4>
  <pre>
  <code>
  <span>var kid_names = [];</span><br/>
  <span>for (let person of people) {'{'}</span><br/>
  <span> if (person.age {'<='} 12) {'{'}</span><br/>
  <span> kid_names.push(person.name);</span><br/>
  <span> {'}'}</span><br/>
  <span>{'}'}</span><br/>
  <span>console.log(kid_names);</span>
  {/* for (let person of people) { */}
  </code>
  </pre>

  <h4>Ejemplo de Declarativo</h4>
  <pre>
  <code>
  <span>SELECT name FROM people AS kids WHERE age {'<='} 12;</span><br/>
  </code>
  </pre>
      <p>Para mostrar caracteres especiales se utiliza el {'{}'} y en su interior el caracter
        entre comillas simples {"' '"}.</p>
  <h2>¿Quién es el creador de React?</h2>
      <p>React fué creado por el ingeniero <strong>Jordan Walke</strong> que trabajo en Facebook y
        lanzado al mercado en el año 2013.</p>
  
  <h2>Desde la consola puede ejecutar node y creo un pequeño bucle….</h2>    
  
      <pre>
        <code>
          <span>$ node</span><br />
          <span>Welcome to Node.js v20.6.1.</span><br />
          <span>Type ".help" for more information.</span><br />
          <span>{'>'} .help</span><br />
          <span>.break    Sometimes you get stuck, this gets you out</span><br />
          <span>.clear    Alias for .break</span><br />
          <span>.editor   Enter editor mode</span><br />
          <span>Welcome to Node.js v20.6.1.</span><br />
          <span>.exit     Exit the REPL</span><br />
          <span>.help     Print this help message</span><br />
          <span>.load     Load JS from a file into the REPL session</span><br />
          <span>.save     Save all evaluated commands in this REPL session to a file</span><br />
          <span>Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL</span><br />
          <br />
          <span>{'>'} let a = 1</span><br />
          <span>undefined</span><br />
          <span>{'>'} a</span><br />
          <span>1</span><br />
          <span>{'>'} for(let i=0; i{'<'}a; i++) {'{'}</span><br />
          <span>... console.log(a + " " + i);</span><br />
          <span>... {'}'}</span><br />
          <span>1 0</span><br />
          <span>undefined</span><br />
          <span>{'>'} let a = 10</span><br />
          <span>Uncaught SyntaxError: Identifier 'a' has already been declared</span><br />
          <span>{'>'} a = 10</span><br />
          <span>10</span><br />
          <span>{'>'} for(let i=0; i{'<'}a; i++) {'{'}</span><br />
          <span>... console.log(a + " " + i);</span><br />
          <span>... {'}'}</span><br />
          <span>10 0</span><br />
          <span>10 1</span><br />
          <span>10 2</span><br />
          <span>10 3</span><br />
          <span>10 4</span><br />
          <span>10 5</span><br />
          <span>10 6</span><br />
          <span>10 7</span><br />
          <span>10 8</span><br />
          <span>10 9</span><br />
          <span>undefined</span><br />
          <span>{'>'}</span><br /> 
        </code>
      </pre>

      <h2>Ventajas de React</h2>
      <ul>
        <li>Alto rendimiento</li>
        <li>Se puede usar tanto del lado del cliente como del lado del servidor</li>
        <li>Se integra facilmente con otras tecnologías</li>
        <li>Posee recursos abundantes ya que es mantenida por facebook y tiene una gran comunidad de contribuyentes.</li>
        <li>Es compatible con versiones anteriores</li>
        <li>Posee  una estructura fácil de mantener gracias a su arquitectura basada en componentes.</li>
        <li>Posee documentación multidioma.</li>
        <li>Maneja flujos de datos unidireccional.</li>
      </ul>
      <h2>Desventajas de React</h2>
      <ul>
        <li>Es complejo y tiene su curva de aprendizaje elevada.</li>
        <li>El uso de JSX (JavaScript XML) agrega una complejidad extra.</li>
        <li>Requiere de un gran conjunto de herramientas para funcionar de manera óptima y ser compatible con otras tecnologías.</li>
        <li>Tiene problemas de SEO. (posicionamiento en los buscadores -ya solucionado?)</li>
      </ul>
</>

  );
}

export default App;
