import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Counter from './pages/Counter';
import React from 'react';
import Modal from './pages/Modal';
import Home from './Home';
import Navbar from './components/Navbar';
import Quiz from './pages/Quiz';
import Photos from './pages/Photos';
import Converter from './pages/Converter';
import { TransitionProvider } from './context/TransitionContext';
import TransitionComponent from './components/Transition';
function App() {
  
  return (
    <TransitionProvider>
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/'>
        <TransitionComponent>
         <Home />
        </TransitionComponent>
        </Route>
        <Route path='/counter'>
        <TransitionComponent>
        <Counter/>
        </TransitionComponent>
        </Route>
        <Route path='/modal'>
        <TransitionComponent>
        <Modal/>
        </TransitionComponent>
        </Route>
        <Route path='/quiz'>
        <TransitionComponent>
        <Quiz/>
        </TransitionComponent>
        </Route>
        <Route path='/photos'>
        <TransitionComponent>
        <Photos/>
        </TransitionComponent>
        </Route>
        <Route path='/converter'>
        <TransitionComponent>
        <Converter/>
        </TransitionComponent>
        </Route>
     
      </Switch>
    </div>
    </Router>
    </TransitionProvider>
  );
}

export default App;
