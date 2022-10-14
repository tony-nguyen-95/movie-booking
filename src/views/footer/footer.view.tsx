import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.style.scss';
import { IFooterProps } from './footer.type';

const prefixClassName = 'footer';

export const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <footer className={prefixClassName}>
      <Container>
        <Row>
          <Col md={2} className={`${prefixClassName}__footer-logo`}>
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
              alt="footer-logo"
              width="75%"
            />
          </Col>
          {[...Array(4)].map((item, index) => (
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
