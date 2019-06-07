import React from "react";

const Curso = () => (
  <article class='card'>
    <div className='img-container s-ratio-16-9 s-radius-tr s-radius-tl'>
      <img
        src='https://cdn.pixabay.com/photo/2015/10/11/11/20/banner-982162_960_720.jpg'
        alt='curso'
      />
    </div>
    <div className='card__data s-border s-radius-br s-radius-bl s-pxy-2'>
      <h3 className='t5 s-mb-2 s-center'>
        Programación orientada a objetos con Go
      </h3>
      <div className='s-mb-2 s-main-center'>
        <div className='card__teacher s-cross-center'>
          <div className='card__avatar s-mr-1'>
            <div className='circle img-container'>
              <img
                src='https://cdn.pixabay.com/photo/2016/03/27/17/42/man-1283235_960_720.jpg'
                alt='teacher'
              />
            </div>
          </div>
          <span className='small'>Alexys Lozada</span>
        </div>
      </div>
      <div className='s-main-center'>
        <a className='button--ghost-alert button--tiny' href='https://edteam'>
          $ 20USD
        </a>
      </div>
    </div>
  </article>
);

export default Curso;
