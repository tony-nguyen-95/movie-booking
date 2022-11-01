import { observer } from 'mobx-react';
import React, { useEffect, useMemo } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { ICinemaResponse, IMovieResponse } from '../../models';
import { CoreCinemaStore } from '../../stores';
import { CoreMovieStore } from '../../stores/store-movie';
import './search-bar.style.scss';
import { ISearchBarProps } from './search-bar.type';

const prefixClassName = 'search-bar';

export const SearchBar: React.FC<ISearchBarProps> = observer((props) => {
  const moviesByCinemaId = CoreMovieStore.moviesByCinemaIdSelector();

  const listMoviesAll = CoreMovieStore.movieListSelector();

  const cinemasByMovieId = CoreCinemaStore.cinemasByMovieIdSelector();

  const cinemaListAll = CoreCinemaStore.cinemaListSelector();

  const displayCinemaList: ICinemaResponse[] | undefined = useMemo(() => {
    // Movie and Cinema is not picked yet
    if (!cinemasByMovieId) {
      return cinemaListAll;
    }
    // Cinemas when movie is picked first
    return cinemasByMovieId;
  }, [cinemaListAll, cinemasByMovieId]);

  const displayMovieList: IMovieResponse[] | undefined = useMemo(() => {
    // Movie and Cinema is not picked yet
    if (!moviesByCinemaId) {
      return listMoviesAll;
    }
    // Movies when cinema is picked first
    return moviesByCinemaId;
  }, [listMoviesAll, moviesByCinemaId]);

  // TODO
  // Call list at another place
  useEffect(() => {
    if (!listMoviesAll && !cinemaListAll) {
      CoreMovieStore.fetchMovieListAction();
      CoreCinemaStore.fetchCinemaListAction();
    }
  });

  return (
    <Container className={prefixClassName}>
      <section className={`${prefixClassName}__welcome-text`}>
        <h1>Welcome.</h1>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
      </section>

      <section className={`${prefixClassName}__booking-form`}>
        <Row>
          <Col>
            <Form.Select
              aria-label="Movie option"
              defaultValue=""
              onChange={(e: any) => {
                CoreCinemaStore.fetchCinemasByMovieIdAction(e.target.value);
              }}
            >
              <option value="" disabled>
                Select movie...
              </option>
              {displayMovieList ? (
                displayMovieList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))
              ) : (
                <option disabled>Loading...</option>
              )}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select
              aria-label="Cinema option"
              defaultValue=""
              onChange={(e: any) => {
                CoreMovieStore.fetchMovieByCinemaIdAction(e.target.value);
              }}
            >
              <option value="" disabled>
                Select cinema
              </option>
              {displayCinemaList ? (
                displayCinemaList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.cinemaName}
                  </option>
                ))
              ) : (
                <option disabled>Loading...</option>
              )}
            </Form.Select>
          </Col>
          <Col>
            <Form.Select aria-label="Datetime option">
              <option>Select showtime</option>
            </Form.Select>
          </Col>
          <input type="submit" value="Book" />
        </Row>
      </section>
    </Container>
  );
});
