import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css'
import Button from './components/Button'
import { Nav, NavItem } from './components/Nav'
import Alert from './components/Alert'
import { Card, CardImg, CardBody, CardTitle, CardText } from './components/Card'
import { Form, FormGroup, FormLabel, FormInput } from './components/Form'

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
    <Form>
      <FormGroup>
        <FormLabel labelName="exampleInputEmail1">Email</FormLabel>
        <FormInput type="email" id="exampleInputEmail1" placeholder="Enter email" aria={ true } ariaDescribeByID="emailHelp" ariaText="We'll never share your email with anyone else."></FormInput>
      </FormGroup>
      <FormGroup>
        <FormLabel labelName="exampleInputPassword1">Password</FormLabel>
        <FormInput type="password" id="exampleInputEmail1" placeholder="Password"></FormInput>
      </FormGroup>
      <FormGroup>
        <FormLabel labelName="testTextField">TextField</FormLabel>
        <FormInput type="text" id="exampleInputText1" placeholder="Enter text here"></FormInput>
      </FormGroup>
      <FormGroup check={ true }>
        <FormLabel check={ true }>
          <FormInput type="checkbox" value="" />
          This is not disabled
        </FormLabel>
      </FormGroup>
      <FormGroup check={ true } enable={ true }>
        <FormLabel check={ true }>
          <FormInput type="checkbox" value="" disabled />
          This is disabled
        </FormLabel>
      </FormGroup>
      <FormGroup check={ true }>
        <FormLabel check={ true }>
          <FormInput type="radio" name="exampleRadio" id="exampleRadios2" value="option1" />
          This is not disabled
        </FormLabel>
      </FormGroup>
      <FormGroup check={ true } enable={ true }>
        <FormLabel check={ true }>
          <FormInput type="radio" name="exampleRadio" id="exampleRadios2" value="option2" disabled />
          This is disabled
        </FormLabel>
      </FormGroup>
    </Form>
      </div>
    );
  }
}

export default App;
