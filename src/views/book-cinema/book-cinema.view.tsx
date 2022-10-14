import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './book-cinema.style.scss';
import { IBookCinemaProps } from './book-cinema.type';
import mockLogo from '../../assets/bhd-logo.png';

const prefixClassName = 'book-cinema';

export const BookCinema: React.FC<IBookCinemaProps> = (props) => {
  return (
    <Container className={prefixClassName}>
      <div className={`${prefixClassName}__header`}>
        <h3>Get your tickets</h3>
      </div>
      <div className={`${prefixClassName}__main`}>
        <Row>
          <Col md={1} xs={2} className={`${prefixClassName}__col-cinema`}>
            <ul className={`${prefixClassName}__list-cinema-wrapper`}>
              <li className={`${prefixClassName}__cinema-item`}>
                <img src={mockLogo} alt="logo" />
                <span />
              </li>
              <li className={`${prefixClassName}__cinema-item`}>
                <img src={mockLogo} alt="logo" />
              </li>
            </ul>
          </Col>
          <Col md={5} xs={10} className={`${prefixClassName}__col-location`}>
            <ul className={`${prefixClassName}__list-location-wrapper`}>
              <li className={`${prefixClassName}__location-item`}>
                <div>
                  <h4>BHD STAR CINEPLEX</h4>
                  <p>430 Hồ Thị Hương, Phường Xuân An, Thành Phố Long Khánh, Tỉnh Đồng Nai</p>
                </div>
              </li>
              <li className={`${prefixClassName}__location-item`}>
                <div>
                  <h4>BHD STAR CINEPLEX</h4>
                  <p>430 Hồ Thị Hương, Phường Xuân An, Thành Phố Long Khánh, Tỉnh Đồng Nai</p>
                </div>
              </li>
            </ul>
          </Col>
          <Col md={6} xs={12} className={`${prefixClassName}__col-calender`}>
            <ul className={`${prefixClassName}__list-calender-wrapper`}>
              <li className={`${prefixClassName}__calender-item`}>
                <div className={`${prefixClassName}__calender-item-header`}>
                  <img
                    src="https://www.themoviedb.org/t/p/w440_and_h660_face/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg"
                    alt="thumbnail"
                  />
                  <div>
                    <h6>Tên phim</h6>
                    <p>2D Digital</p>
                  </div>
                </div>
                <div className={`${prefixClassName}__calender-item-main`}>
                  <div className={`${prefixClassName}__calender-showtime`}>
                    <h6>Suất chiếu hôm nay</h6>
                    <div className={`${prefixClassName}__calender-showtime-group`}>
                      {[...Array(15)].map((item, index) => (
                        <button key={index}>02:00</button>
                      ))}
                    </div>
                  </div>
                  <div className={`${prefixClassName}__calender-showtime`}>
                    <h6>Suất chiếu ngày mai</h6>
                    <div className={`${prefixClassName}__calender-showtime-group`}>
                      {[...Array(15)].map((item, index) => (
                        <button key={index}>02:00</button>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className={`${prefixClassName}__calender-item`}>
                <div className={`${prefixClassName}__calender-item-header`}>
                  <img
                    src="https://www.themoviedb.org/t/p/w440_and_h660_face/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg"
                    alt="thumbnail"
                  />
                  <div>
                    <h6>Tên phim</h6>
                    <p>2D Digital</p>
                  </div>
                </div>
                <div className={`${prefixClassName}__calender-item-main`}>
                  <div className={`${prefixClassName}__calender-showtime`}>
                    <h6>Suất chiếu hôm nay</h6>
                    <div className={`${prefixClassName}__calender-showtime-group`}>
                      {[...Array(15)].map((item, index) => (
                        <button key={index}>02:00</button>
                      ))}
                    </div>
                  </div>
                  <div className={`${prefixClassName}__calender-showtime`}>
                    <h6>Suất chiếu ngày mai</h6>
                    <div className={`${prefixClassName}__calender-showtime-group`}>
                      {[...Array(15)].map((item, index) => (
                        <button key={index}>02:00</button>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
};
