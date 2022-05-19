import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import Info from './components/Info';
import ToDoApp from './components/ToDoApp';
import NextToDo from './components/NextToDo';

const DATA = [
  { id: "0", name: "Weekly Exercises", completed: true },
  { id: "1", name: "Student presentation", completed: true },
  { id: "2", name: "Prog Assignment", completed: false },
  { id: "3", name: "Shopping from lidl", completed: false },
  { id: "4", name: "Cook Salmon", completed: true },
  { id: "5", name: "Shopping from Prisma", completed: true },
  { id: "6", name: "Cook beef", completed: false },
  { id: "7", name: "Eat Salmon", completed: true },
  { id: "8", name: "Eat beef", completed: false }
];

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <li className="nav-item">
              <Link to="/">Today</Link>
            </li>
            <li className="nav-item">
              <Link to="/tomorrow">Tomorrow</Link>
            </li>
            <li className="nav-item">
              <Link to="/future">Future</Link>
            </li>
            <li className="nav-item">
              <Link to="/info">Info</Link>
            </li>
          </ul>
        </nav>

        <Switch>
            <Route path="/" exact>
                <h1>Welcome to TODO App</h1>
                <ToDoApp tasks={DATA} />
            </Route>
            <Route path="/tomorrow" component={NextToDo} />
            <Route path="/future" component={NextToDo} />
            <Route path="/info" component={Info} />
            <Route path="/">
              <h1>Do not do that!</h1>
            </Route>
        </Switch>

        <footer>
          <p>All right reserved. Copyright 2022</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
