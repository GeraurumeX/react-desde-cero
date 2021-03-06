import React from "react";
import "../styles/styles.scss";
import MainMenu from "./Organisms/MainMenu";
import Form from "./Pages/Form";
import CourseGrid from "./Organisms/CourseGrid";
import History from "./Pages/History";
import Course from "./Pages/Course";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";

const App = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/cursos/:id' component={Course} />
      <Route path='/cursos' component={CourseGrid} />
      <Route path='historial/:valor' component={History} />
      <Route path='/historial' component={History} />
      <Route path='/usuarios' component={Users} />
      <Route
        path='/formulario'
        component={() => <Form name='Página de contacto' />}
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
