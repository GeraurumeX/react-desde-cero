import React from "react";

const cursos = [
  {
    id: 1,
    titulo: "React desde cero",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: 40,
    profesor: "Beto Quiroga"
  },
  {
    id: 2,
    titulo: "Drupal desde cero",
    image:
      "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: 30,
    profesor: "Beto Quiroga"
  },
  {
    id: 3,
    titulo: "Go desde cero",
    image:
      "https://images.pexels.com/photos/2194062/pexels-photo-2194062.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: 50,
    profesor: "Alexis Lozada"
  },
  {
    id: 4,
    titulo: "HTML desde cero",
    image:
      "https://images.pexels.com/photos/270366/pexels-photo-270366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    price: 10,
    profesor: "Alvaro Felipe"
  }
];

const Course = ({ match }) => {
  const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0];
  return (
    <div className='ed-grid m-grid-3'>
      {cursoActual ? (
        <>
          <h1 className='m-cols-3'>{cursoActual.titulo}</h1>
          <img
            className='m-cols-1'
            src={cursoActual.image}
            alt={cursoActual.titulo}
          />
          <p className='m-cols-2'>Profesor: {cursoActual.profesor}</p>
        </>
      ) : (
        <h1>El curso no existe</h1>
      )}
    </div>
  );
};

export default Course;
