import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Button from './components/Button'
import { Nav, NavItem } from './components/Nav'
import Alert from './components/Alert'
import { Card, CardImg, CardBody, CardTitle, CardText } from './components/Card'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='mt-3'>
          <Button title='Google' href='https://www.google.com/' />
          <Button title='Second' variation='primary' />
          <Button title='Third' variation='success' />
        </div>
        <div className='mt-3'>
          <Nav>
            <NavItem>First</NavItem>
            <NavItem active={ true }>Second</NavItem>
            <NavItem>Third</NavItem>
          </Nav>
        </div>
        <div className='mt-8'>
          <Alert status='primary'>
            This is a primary alert
          </Alert>
          <Alert status='secondary'>
            This is a secondary alert
          </Alert>
          <Alert status='success'>
            This is a success alert
          </Alert>
          <Alert status='danger'>
            This is a danger alert
          </Alert>
          <Alert status='warning'>
            This is a warning alert
          </Alert>
          <Alert status='info'>
            This is a info alert
          </Alert>
          <Alert status='dark'>
            This is a dark alert
          </Alert>
          <Alert status='light'>
            This is a light alert
          </Alert>
        </div>
        <div id="cardtest">
          <Card>
            <CardImg src="https://a.wattpad.com/useravatar/Finnluvsfionna.128.218756.jpg" alt="Finn The Human" />
            <CardBody>
              <CardTitle level='4'>Finn The Human</CardTitle>
              <CardText>The last remaining human on Ooo</CardText>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
