import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <h1>react router crash course</h1>
                <Route path="/" render={() => <h1>Hello  i am home route</h1>}/>
                <Route path="/about" render={() => <h1>Hello i am about route</h1>} />
                 <Route path="/help" render={() => <h1>Hello i am help route</h1>} />

            </div>
        </BrowserRouter>

    );
}

export default App;
