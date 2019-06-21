import React from "react";
import "./styles/styles.scss";
import MainMenu from "./MainMenu";
import Banner from "./Banner";
import Formulario from "./Formulario";
import CourseGrid from "./CourseGrid";
import Historial from "./Historial";
import Course from "./Course";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path='/' exact component={Banner} />
      <Route path='/cursos/:id' component={Course} />
      <Route path='/cursos' component={CourseGrid} />
      <Route path='/historial' component={Historial} />
      <Route
        path='/formulario'
        component={() => <Formulario name='Página de contacto' />}
      />
      <Route
        component={() => (
          <div className='ed-grid'>
            <h1>Error 404</h1>
            <span>Página no encontrada</span>
          </div>
        )}
      />
    </Switch>
  </Router>
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
