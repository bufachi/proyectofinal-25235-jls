import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white text-center py-4 mt-4">
      <div>
        <h2 id="mapa">MAPA DE UBICACION</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2778.6133299729217!2d-58.36735132425862!3d-34.6284668729454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a334c941248855%3A0x58a5b83cdfbc5233!2sNecochea%20321%2C%20C1158ACA%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e1!3m2!1ses-419!2sar!4v1746715126984!5m2!1ses-419!2sar"
          width="50%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Container>
        <Row>
          <Col md={6}>
            <h3 className="mb-0">MARKETING PRODUCTOS</h3>
            <h3 className="mb-0">NECOCHEA 321 CABA</h3>
          </Col>
          <Col md={6}>
            <div>
              <a href="#" className="text-white me-3">
                <FontAwesomeIcon icon={faFacebook} size="3x" />
              </a>
              <a href="#" className="text-white me-3">
                <FontAwesomeIcon icon={faTwitter} size="3x" />
              </a>
              <a href="#" className="text-white">
                <FontAwesomeIcon icon={faInstagram} size="3x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <a id="contactos"></a>
        <h4 id="escribinos">ESCRIBINOS</h4>
        <h5>enviar mail a jorgesaal@gmail.com</h5>
        <h5>mandar whatsapp 1141496959</h5>
      </div>
    </footer>
  );
};

export default Footer;
