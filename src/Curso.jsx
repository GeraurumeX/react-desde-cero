import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Curso = ({ id, title, image, price, profesor }) => (
  <article class='card'>
    <div className='img-container s-ratio-16-9 s-radius-tr s-radius-tl'>
      <Link to={`/cursos/${id}`}>
        <img src={image} alt={title} />
      </Link>
    </div>
    <div className='card__data s-border s-radius-br s-radius-bl s-pxy-2'>
      <h3 className='center'>{title}</h3>
      <div className='s-main-center'>{profesor}</div>
      <div className='s-main-center'>
        <a className='button--ghost-alert button--tiny' href='https://edteam'>
          {`$ ${price} USD`}
        </a>
      </div>
    </div>
  </article>
);

Curso.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  profesor: PropTypes.string
};

Curso.defaultProps = {
  title: "no se encontro titulo",
  image:
    "https://solvedpuzzle.com//wp-content/uploads/2017/08/p%C3%A1ginas-web-en-Bogot%C3%A1-2.jpg",
  price: "--",
  profesor: ""
};

export default Curso;
