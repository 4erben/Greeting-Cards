import { useState } from 'react'
import {Routes , Route, Link} from "react-router-dom";
import './App.css'
import CaptureComponent from './Components/CaptureComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Header from "./assets/header.jpg";
import HomePage from './Pages/HomePage';
import home from "./assets/home.jpg";
import CardsPage from './Pages/CardsPage';
import ImageEditor from './Components/ImageEditor';
function App() {

  return (
  <Container fluid className='justify-content-center align-items-center'>
    <Row className='justify-content-center align-items-center mb-2'>
      <img src={Header} className='img-fluid w-50 mx-auto '/>
    </Row>
    <Row>
    <Link to="/" className='mx-auto  w-75'> 
    <img src={home} className='img-fluid '/>
    </Link>
    </Row>
    <Routes>
      <Route
      path='/'
      element={<HomePage />}
      />
      <Route
      path='/:id'
      element={<CardsPage/>}
      />
    <Route
    path='/card/:id'
    element={<ImageEditor/>}
    />
    </Routes>

  </Container>
  )
}

export default App
