import React from "react";
import "./styles/styles.scss";
import Curso from "./Curso";

const cursos = [
  {
    title: "React desde cero",
    image:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg",
    price: 20,
    profesor: "Marciano Martinez"
  },
  {
    title: "React desde cero",
    image:
      "https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg",
    price: 25,
    profesor: "Eustaquio Herrera"
  },
  {
    title: "React desde cero",
    image:
      "https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_960_720.jpg",
    price: 15,
    profesor: "Juan Camaney"
  },
  {
    title: "React desde cero",
    image:
      "https://cdn.pixabay.com/photo/2017/10/10/21/47/laptop-2838921_960_720.jpg",
    price: 0,
    profesor: "Pancho Cachondo"
  }
];

const App = () => (
  <>
    <div className='main-banner img-container l-section' id='main-banner'>
      <div className='ed-grid lg-grid-6'>
        <div className='lg-cols-4 lg-x-2'>
          <img
            className='main-banner__img'
            src='https://cdn.pixabay.com/photo/2017/03/29/15/18/tianjin-2185510__340.jpg'
            alt='ciudad'
          />
          <div className='main-banner__data s-center'>
            <p className='t2 s-mb-0'>Título del banner</p>
            <p> Subtítulo del banner</p>
            <a href='https://ed.team' className='button'>
              Botón del banner
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className='ed-grid m-grid-3'>
      {cursos.map(curso => (
        <Curso
          title={curso.title}
          image={curso.image}
          price={curso.price}
          profesor={curso.profesor}
        />
      ))}
    </div>
  </>
);

export default App;

// Reglas JSX
// 1: Toda etiqueta debe cerrarse
// 2: Los componentes deben devolver un sólo elemento padre
// Fragment sin necesidad de importarlo se colocan <> </> (al inicio y final) en lugar de <Fragment></Fragment>
// 3: Apoyarse de los fragment cuando necesite devolver dos elementos
// 4: Fragment => <> hijos </>
// 5: img siempre se cierra
// 6: class => className
// 7: for => htmlFor
// 8: no se puede utilizar if, else, while
