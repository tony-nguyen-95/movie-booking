import { observer } from 'mobx-react';
import React, { useCallback, useEffect, useMemo } from 'react';
import { Container, Row, Col, ListGroup, Table, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Loading } from '../../components';
import { ITicket } from '../../models';
import { CoreAuthenticationStore } from '../../stores';
import { CoreTicketStore } from '../../stores/store-\u001Dticket';
import { Footer, NavBar } from '../../views';
import './booking.style.scss';
import { IBookingProps } from './booking.type';

const prefixClassName = 'booking';

const colSeats = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

export const Booking: React.FC<IBookingProps> = observer((props) => {
  const history = useHistory();

  const listTickets = CoreTicketStore.ticketsByShowtimeIdSelector();

  const infoShowtime = CoreTicketStore.infoShowtimeSelector();

  const selectedTickets = CoreTicketStore.selectedTicketsSelector();

  const loadingBookTickets = CoreTicketStore.loadingBookTicketSelector();

  const showtimeId = CoreTicketStore.showtimeIdSelector();

  const isLogin = CoreAuthenticationStore.isLoginSelector();

  const listSelectTicketId: string[] = useMemo(() => {
    const _listSelectTicketId: string[] = [];
    if (selectedTickets && selectedTickets.length !== 0) {
      selectedTickets.forEach((ticket) => {
        _listSelectTicketId.push(ticket.id || '');
      });
    }
    return _listSelectTicketId;
  }, [selectedTickets.length]);

  const handleSelectTicket = useCallback(
    (item: ITicket) => {
      if (selectedTickets.includes(item)) {
        return CoreTicketStore.removeSelectedTicket(item);
      }
      return CoreTicketStore.addSelectedTicket(item);
    },
    [selectedTickets],
  );

  const handleBooking = useCallback(() => {
    if (listSelectTicketId.length === 0) return;
    CoreTicketStore.bookTicketsAction(listSelectTicketId);
  }, [listSelectTicketId]);

  useEffect(() => {
    if (!isLogin || listTickets?.length === 0 || !showtimeId) {
      return history.push('/home');
    }
  }, [history, isLogin, listTickets?.length]);

  return (
    <div className={prefixClassName}>
      <NavBar />

      <Container className={`${prefixClassName}__main-wrapper`}>
        {loadingBookTickets && <Loading />}
        <Row>
          <Col lg={3} xs={12}>
            <h4>Booking Tickets</h4>

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
                    {selectedTickets.map((ticket, index) => (
                      <tr key={ticket.id}>
                        <td>{ticket.seatPosition}</td>
                        <td>1</td>
                        <td>79.000</td>
                        <td>
                          <Button onClick={() => CoreTicketStore.removeSelectedTicket(ticket)}>
                            <i className="fa-solid fa-xmark" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td>Total</td>
                      <td>{selectedTickets.length}</td>
                      <td>{selectedTickets.length * 79000}</td>
                      <td>
                        <Button onClick={() => CoreTicketStore.removeAllSelectedTickets()}>
                          <i className="fa-solid fa-xmark" />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className={`${prefixClassName}__booking-button`} onClick={() => handleBooking()}>
                  Booking
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col lg={9} xs={12} className={`${prefixClassName}__room-wrapper`}>
            <h5>
              {infoShowtime?.movieName} - {infoShowtime?.cinemaName} - {infoShowtime?.showtime}
            </h5>

            <div className={`${prefixClassName}__screen`}>Screen</div>
            <div className={`${prefixClassName}__seats-wrapper`}>
              <div className={`${prefixClassName}__seats-row`}>
                <div className={`${prefixClassName}__seat-sign`} />
                {[...Array(10)].map((item, index) => (
                  <div key={index} className={`${prefixClassName}__seat-sign`}>
                    {index + 1}
                  </div>
                ))}
              </div>
              {colSeats.map((colSeat, indexSeat) => {
                return (
                  <div key={colSeat} className={`${prefixClassName}__seats-row`}>
                    <div>{colSeat}</div>
                    {listTickets &&
                      listTickets.slice(indexSeat * 10, indexSeat * 10 + 10).map((item, index) => {
                        return item.seatStatus === 'OPEN' ? (
                          <div
                            key={item.id}
                            className={
                              selectedTickets.includes(item)
                                ? `${prefixClassName}__seat-selected`
                                : `${prefixClassName}__seat`
                            }
                            onClick={() => handleSelectTicket(item)}
                          >
                            {item.seatPosition}
                          </div>
                        ) : (
                          <div key={item.id} className={`${prefixClassName}__seat-booked`}>
                            {item.seatPosition}
                          </div>
                        );
                      })}
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
});
