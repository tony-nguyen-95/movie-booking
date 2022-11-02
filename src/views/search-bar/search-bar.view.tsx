import { observer } from 'mobx-react';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { Col, Container, Row, Form } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { ICinemaResponse, IMovieResponse } from '../../models';
import { CoreAuthenticationStore, CoreCinemaStore, CoreShowtimeStore } from '../../stores';
import { CoreTicketStore } from '../../stores/store-\u001Dticket';
import { CoreMovieStore } from '../../stores/store-movie';
import './search-bar.style.scss';
import { ISearchBarProps } from './search-bar.type';

const prefixClassName = 'search-bar';

export const SearchBar: React.FC<ISearchBarProps> = observer((props) => {
  const history = useHistory();

  const listMoviesAll = CoreMovieStore.movieListSelector();

  const moviesByCinemaId = CoreMovieStore.moviesByCinemaIdSelector();

  const cinemaListAll = CoreCinemaStore.cinemaListSelector();

  const cinemasByMovieId = CoreCinemaStore.cinemasByMovieIdSelector();

  const showtimeByMovieAndCinema = CoreShowtimeStore.showtimeListByMovieAndCinemaSelector();

  const isLogin = CoreAuthenticationStore.isLoginSelector();

  const movieSelect = useRef<HTMLSelectElement>(null);

  const cinemaSelect = useRef<HTMLSelectElement>(null);

  const showtimeSelect = useRef<HTMLSelectElement>(null);

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

  const onGetTickets = useCallback(
    (e: any) => {
      e.preventDefault();
      if (!showtimeSelect.current?.value) return;

      if (!isLogin) {
        return history.push('/login');
      }

      CoreTicketStore.fetchTicketsByShowtimeIdAction(parseInt(showtimeSelect.current?.value, 10));

      const movieName = movieSelect.current?.selectedOptions[0].innerHTML || '';
      const cinemaName = cinemaSelect.current?.selectedOptions[0].innerHTML || '';
      const showtime = showtimeSelect.current?.selectedOptions[0].innerHTML;

      CoreTicketStore.updateInfoShowtimeAction({ movieName, cinemaName, showtime });
      history.push('/booking');
    },
    [history, isLogin],
  );

  useEffect(() => {
    if (!!movieSelect.current?.value && !!cinemaSelect.current?.value) {
      const movieId = parseInt(movieSelect.current?.value, 10);

      const cinemaId = cinemaSelect.current?.value;

      CoreShowtimeStore.fetchShowtimeByMovieAndCinemaAction(movieId, cinemaId);
    }
  }, [movieSelect.current?.value, cinemaSelect.current?.value]);

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
              ref={movieSelect}
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
              ref={cinemaSelect}
              onChange={(e: any) => {
                CoreMovieStore.fetchMovieByCinemaIdAction(e.target.value);
              }}
            >
              <option value="" disabled>
                Select cinema...
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
            <Form.Select aria-label="Datetime option" defaultValue="" ref={showtimeSelect}>
              <option value="" disabled>
                Select showtime...
              </option>
              {showtimeByMovieAndCinema &&
                showtimeByMovieAndCinema.map((item) => (
                  <option key={item.id} value={item.id}>
                    Time: {item.showInHour}, Date: {item.showInDate}
                  </option>
                ))}
              {((!movieSelect.current?.value || !cinemaSelect.current?.value) && (
                <option disabled>Please select movie and cinema first...</option>
              )) ||
                (!showtimeByMovieAndCinema && <option disabled>Loading...</option>)}
            </Form.Select>
          </Col>
          <input type="submit" value="Book" onClick={(e) => onGetTickets(e)} />
        </Row>
      </section>
    </Container>
  );
});
