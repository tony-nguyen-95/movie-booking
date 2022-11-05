import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.style.scss';
import { IFooterProps } from './footer.type';
import logoFooter from '../../assets/logo-footer.svg';

const prefixClassName = 'footer';

export const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <footer className={prefixClassName}>
      <Container>
        <Row>
          <Col md={2} className={`${prefixClassName}__footer-logo`}>
            <img src={logoFooter} alt="footer-logo" width="75%" />
          </Col>
          {[...Array(3)].map((item, index) => (
            <Col key={index} md={2} className={`${prefixClassName}__footer-part-list-wrapper`}>
              <h4>The Basic</h4>
              <ul>
                <li>About TMDB</li>
                <li>Contact Us</li>
                <li>Support Forums</li>
                <li>Contact Us</li>
              </ul>
            </Col>
          ))}
        </Row>
      </Container>
    </footer>
  );
};
