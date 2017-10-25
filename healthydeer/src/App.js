import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';

import Header from './componts/Header/Header'
import Footer from './componts/Footer/Footer'

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header></Header>
                <Button type="primary">Button</Button>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
