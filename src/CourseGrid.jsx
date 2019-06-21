import React from "react";
import Curso from "./Curso";

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

const Coursegrid = () => (
  <div className='ed-grid m-grid-4'>
    {cursos.map(c => (
      <Curso
        key={c.id}
        id={c.id}
        title={c.titulo}
        image={c.image}
        price={c.price}
        profesor={c.profesor}
      />
    ))}
  </div>
);

export default Coursegrid;
