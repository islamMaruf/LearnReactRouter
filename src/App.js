import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <h1>react router crash course</h1>
                {/*<Route path="/" render={() => <h1>Hello  i am home route</h1>}/>*/}
                {/*<Route path="/about" render={() => <h1>Hello i am about route</h1>} />*/}
                {/* <Route path="/help" render={() => <h1>Hello i am help route</h1>} />*/}
                <Route path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>


            </div>
        </BrowserRouter>

    );
}

export default App;
