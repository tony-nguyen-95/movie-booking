import React from 'react';
import { Container, Image, Row, Col, Card } from 'react-bootstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { Footer, NavBar, SearchBar } from '../../views';
import './detail.style.scss';
import { IDetailProps } from './detail.type';

const prefixClassName = 'detail';

const scoreInPercent = 89;

export const Detail: React.FC<IDetailProps> = (props) => {
  const moviePrimaryColor = { '--movie-primary-color': '31.5, 10.5, 10.5' } as React.CSSProperties;

  return (
    <div className={prefixClassName}>
      <NavBar />
      <SearchBar />

      <Container className={`${prefixClassName}__content-wrapper`} style={moviePrimaryColor}>
        <Row>
          <Col xs={3} className={`${prefixClassName}__content-image`}>
            <Image
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kY0BogCM8SkNJ0MNiHB3VTM86Tz.jpg"
              width={300}
              height={450}
            />
          </Col>
          <Col xs={9} className={`${prefixClassName}__content-info`}>
            <div className={`${prefixClassName}__content-info-title`}>
              <h2>After Ever Happy</h2>
              <h2>(2022)</h2>
            </div>
            <div className={`${prefixClassName}__content-info-more`}>
              <div className={`${prefixClassName}__content-age-rate`}>P</div>
              <div className={`${prefixClassName}__content-date-region`}>09/07/2022 (US)</div>
              <div className={`${prefixClassName}__content-category`}>Romance, Drama</div>
              <div className={`${prefixClassName}__content-time`}>1h 35m</div>
            </div>
            <div className={`${prefixClassName}__content-from-user`}>
              <div className={`${prefixClassName}__circle-percent-wrapper`}>
                <CircularProgressbarWithChildren
                  value={scoreInPercent}
                  strokeWidth={5}
                  background
                  backgroundPadding={5}
                  styles={{
                    path: {
                      stroke: `rgba(76,209,122)`,
                      transformOrigin: 'center center',
                    },
                    trail: {
                      stroke: 'rgba(76,209,122, 0.2)',
                    },
                  }}
                >
                  <p>
                    {scoreInPercent}
                    <span>%</span>
                  </p>
                </CircularProgressbarWithChildren>
                <p className={`${prefixClassName}__circle-percent-title`}>User Score</p>
              </div>
              <div className={`${prefixClassName}__user-add-favorite`}>
                <i className="fa-solid fa-heart" />
              </div>
              <div className={`${prefixClassName}__user-add-watchlist`}>
                <i className="fa-solid fa-list" />
              </div>
            </div>

            <div className={`${prefixClassName}__movie-text`}>
              <h4>An offer you can&apos;t refuse.</h4>
              <h3>Overview</h3>
              <p>
                Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.
                When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his
                youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody
                revenge.
              </p>
            </div>

            <div className={`${prefixClassName}__movie-people`}>
              <div className={`${prefixClassName}__movie-people-item`}>
                <h6>Francis Ford Coppola</h6>
                <p>Director, Screenplay</p>
              </div>
              <div className={`${prefixClassName}__movie-people-item`}>
                <h6>Mario Puzo</h6>
                <p>Novel, Screenplay</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className={`${prefixClassName}__recommendations-part`}>
        <h4>Recommendations</h4>

        <div className={`${prefixClassName}__recommendations-content`}>
          <div className={`${prefixClassName}__recommendations-content-inner`}>
            {[...Array(10)].map((item, index) => (
              <Card key={index} className={`${prefixClassName}__recommendation-item`}>
                <Card.Img
                  variant="top"
                  src="https://www.themoviedb.org/t/p/w500_and_h282_face/piEEg5kDQyxK05V4Am8sVxFe267.jpg"
                />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the content.
                  </Card.Text>
                  <Card.Text>72%</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Container>

      <Footer />
    </div>
  );
};
