import React from 'react';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Titre from '../components/Titre';
import "../styles/contact.css";


const Contact = () => {
    return (
        
        <div className='contactContainer'>
              <Header/>
                <Titre text="Contactez-nous"/>
          <ContactForm/> 
          <Footer/> 
        </div>
    );
};

export default Contact;