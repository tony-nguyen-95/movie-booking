import React from 'react';
import { Container, Row, Col, ListGroup, Table, Button } from 'react-bootstrap';
import { Footer, NavBar, SearchBar } from '../../views';
import './booking.style.scss';
import { IBookingProps } from './booking.type';

const prefixClassName = 'booking';

export const Booking: React.FC<IBookingProps> = (props) => {
  return (
    <div className={prefixClassName}>
      <NavBar />
      <SearchBar />

      <Container className={`${prefixClassName}__main-wrapper`}>
        <h4>Booking Tickets</h4>

        <Row>
          <Col xs={3}>
            <ListGroup>
              <ListGroup.Item className={`${prefixClassName}__annotation-wrapper`}>
                <h5>Annotation</h5>
                <div className={`${prefixClassName}__annotation-item`}>
                  <div>A1</div>
                  <p>Booked</p>
                </div>
                <div className={`${prefixClassName}__annotation-item`}>
                  <div>A1</div>
                  <p>Selected</p>
                </div>
                <div className={`${prefixClassName}__annotation-item`}>
                  <div>A1</div>
                  <p>Available</p>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5>Selection</h5>
                <Table striped bordered hover size="sm" className={`${prefixClassName}__table-selection`}>
                  <thead>
                    <tr>
                      <th>Position</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A1</td>
                      <td>1</td>
                      <td>79.000</td>
                      <td>
                        <Button>
                          <i className="fa-solid fa-xmark" />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>A2</td>
                      <td>1</td>
                      <td>79.000</td>
                      <td>
                        <Button>
                          <i className="fa-solid fa-xmark" />
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td>2</td>
                      <td>140.000</td>
                      <td>
                        <Button>
                          <i className="fa-solid fa-xmark" />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className={`${prefixClassName}__booking-button`}>Booking</Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col xs={9} className={`${prefixClassName}__room-wrapper`}>
            <div className={`${prefixClassName}__screen`}>Screen</div>
            <div className={`${prefixClassName}__seats-wrapper`}>
              <div className={`${prefixClassName}__seats-row`}>
                <div />
                {[...Array(10)].map((item, index) => (
                  <div key={index} className={`${prefixClassName}__seat-sign`}>
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className={`${prefixClassName}__seats-row`}>
                <div>A</div>
                {[...Array(10)].map((item, index) => (
                  <div key={index} className={`${prefixClassName}__seat`}>
                    A{index + 1}
                  </div>
                ))}
              </div>
              <div className={`${prefixClassName}__seats-row`}>
                <div>B</div>
                {[...Array(10)].map((item, index) => (
                  <div
                    key={index}
                    className={`${prefixClassName}__seat`}
                    style={{ background: 'var(--primary)', color: '#fff' }}
                  >
                    B{index + 1}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
};
