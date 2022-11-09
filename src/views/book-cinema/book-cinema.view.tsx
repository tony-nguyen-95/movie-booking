import React, { useCallback, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './book-cinema.style.scss';
import { IBookCinemaProps } from './book-cinema.type';
import { observer } from 'mobx-react';
import { CoreCineplexStore } from '../../stores/store-cineplex';
import { Loading } from '../../components';
import { CoreAuthenticationStore, CoreMovieStore } from '../../stores';
import { convertFormatDate } from '../../stores/store-showtime/orchestrator/fetch-showtime-by-movie-and-cinema.orchestrator';
import { useHistory } from 'react-router-dom';
import { CoreTicketStore } from '../../stores/store-\u001Dticket';
import { DOMAIN } from '../../config';
import { ICinemaResponse, ICineplexResponse } from '../../models';

const prefixClassName = 'book-cinema';

export const BookCinema: React.FC<IBookCinemaProps> = observer((props) => {
  const history = useHistory();

  const isLogin = CoreAuthenticationStore.isLoginSelector();

  const listCineplexs = CoreCineplexStore.cineplexListSelector();

  const loadingCineplex = CoreCineplexStore.loadingCineplexSelector();

  const cineplexSelect = CoreCineplexStore.cineplexSelectedSelector();

  const cinemaSelect = CoreCineplexStore.cinemaSelectedFromCineplexSelector();

  const loadingMovieShowtimes = CoreMovieStore.loadingMovieSelector();

  const moviesWithShowtimes = CoreMovieStore.moviesWithShowtimesSelector();

  const handleChangeCineplex = useCallback(
    (cineplex: ICineplexResponse | undefined) => {
      CoreCineplexStore.updateCineplexSelectedAction(cineplex);
      CoreCineplexStore.updateCinemaSelectedFromCineplexAction(cineplex?.cinemas[0]);

      if (cinemaSelect?.id !== cineplex?.cinemas[0].id) {
        CoreMovieStore.fetchMovieByCinemaIdWithShowtimesAction(cineplex?.cinemas[0].id || '');
      }
    },
    [cinemaSelect?.id],
  );

  const handleChangeCinema = useCallback(
    (cinema: ICinemaResponse | undefined) => {
      CoreCineplexStore.updateCinemaSelectedFromCineplexAction(cinema);

      if (cinemaSelect?.id !== cinema?.id) {
        CoreMovieStore.fetchMovieByCinemaIdWithShowtimesAction(cinema?.id || '');
      }
    },
    [cinemaSelect?.id],
  );

  useEffect(() => {
    if (cinemaSelect?.id && !moviesWithShowtimes) {
      CoreMovieStore.fetchMovieByCinemaIdWithShowtimesAction(cinemaSelect.id || '');
    }
  }, [cinemaSelect?.id, moviesWithShowtimes]);

  return (
    <Container id="cinema" className={prefixClassName}>
      {loadingCineplex && <Loading />}

      <div className={`${prefixClassName}__header`}>
        <h3>Get your tickets</h3>
      </div>
      <div className={`${prefixClassName}__main`}>
        <Row>
          <Col lg={1} md={2} xs={3} className={`${prefixClassName}__col-cinema`}>
            <ul className={`${prefixClassName}__list-cinema-wrapper`}>
              {listCineplexs &&
                listCineplexs.map((item) => (
                  <li
                    key={item.id}
                    className={
                      cineplexSelect?.id === item.id
                        ? `${prefixClassName}__cinema-item-selected`
                        : `${prefixClassName}__cinema-item`
                    }
                    onClick={() => handleChangeCineplex(item)}
                  >
                    <img src={`${DOMAIN}${item.logo}`} alt="logo" />
                    <span />
                  </li>
                ))}
            </ul>
          </Col>
          <Col lg={5} md={4} xs={9} className={`${prefixClassName}__col-location`}>
            <ul className={`${prefixClassName}__list-location-wrapper`}>
              {cineplexSelect?.cinemas?.map((cinema) => (
                <li
                  key={cinema.id}
                  className={
                    cinemaSelect?.id === cinema.id
                      ? `${prefixClassName}__location-item-selected`
                      : `${prefixClassName}__location-item`
                  }
                  onClick={() => handleChangeCinema(cinema)}
                >
                  <div>
                    <h4>{cinema.cinemaName}</h4>
                    <p>{cinema.address}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
          <Col lg={6} md={6} xs={12} className={`${prefixClassName}__col-calender`}>
            <ul className={`${prefixClassName}__list-calender-wrapper`}>
              {loadingMovieShowtimes && <Loading />}
              {moviesWithShowtimes?.map((movie) => (
                <li key={movie.id} className={`${prefixClassName}__calender-item`}>
                  <div className={`${prefixClassName}__calender-item-header`}>
                    <img src={`${DOMAIN}${movie.verticalBanner}`} alt={movie.title} />
                    <div>
                      <h6>{movie.title}</h6>
                      <p>2D Digital</p>
                    </div>
                  </div>
                  <div className={`${prefixClassName}__calender-item-main`}>
                    <div className={`${prefixClassName}__calender-showtime`}>
                      <h6>Showtimes:</h6>
                      <div className={`${prefixClassName}__calender-showtime-group`}>
                        {movie.showtimes?.map((item, index) => (
                          <button
                            key={item.id}
                            onClick={async () => {
                              if (!isLogin) {
                                return history.push('/login');
                              }

                              CoreTicketStore.fetchTicketsByShowtimeIdAction(item.id || 0);

                              CoreTicketStore.updateInfoShowtimeAction({
                                movieName: movie.title || '',
                                cinemaName: cinemaSelect?.cinemaName || '',
                                showtime: `${convertFormatDate(item.showDate || '').hourMinute},${
                                  convertFormatDate(item.showDate || '').formattedDate
                                }`,
                              });

                              history.push('/booking');
                            }}
                          >
                            {convertFormatDate(item.showDate || '').hourMinute} -{' '}
                            {convertFormatDate(item.showDate || '').formattedDate}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </Container>
  );
});
