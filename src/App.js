import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import TestComponent from "./components/TestComponent";
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <h1>react router crash course</h1>
                {/*<Route path="/" render={() => <h1>Hello  i am home route</h1>}/>*/}
                {/*<Route path="/about" render={() => <h1>Hello i am about route</h1>} />*/}
                {/* <Route path="/help" render={() => <h1>Hello i am help route</h1>} />*/}
                {/*<Route path="/" exact component={Home}/>*/}
                <Nav/>
                <Switch>
                    <Route path="/" exact render={ () => <Home name="maruf" />}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/post/:postId" component={TestComponent}/>
                </Switch>



            </div>
        </BrowserRouter>

    );
}

export default App;
