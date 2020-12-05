import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Services from './components/pages/Services/Services';
import Products from './components/pages/Products/Products';
import SignUp from './components/pages/SignUp/SignUp';
import Form from './components/pages/SignUp/PatientSignUp/Form';
import SignIn from './components/pages/SignIn/SignInForm';
import ContactUs from './components/pages/Products/ContactUs/ContactUs';
import DoctorSignUp from './components/pages/SignUp/DoctorSignUp/DoctorForm';
import Patient from './components/pages/Patient/Patient';
import PatientAppoint from './components/pages/Patient/patientPages/BookAppoint';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';
import EntryOut from './components/pages/Patient/patientPages/EntryOut'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/patient-sign-up' component={Form} />
        <Route path='/sign-in' component={SignIn} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/doctor-sign-up' component={DoctorSignUp} />
        <Route path='/patient-home' component={Patient} />
        <Route path='/patient-appoint' component={PatientAppoint} />
        <Route path='/patient-appoint-book' component={EntryOut} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
