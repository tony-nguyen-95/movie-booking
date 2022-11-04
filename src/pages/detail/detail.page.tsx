import { observer } from 'mobx-react';
import React, { useEffect, useMemo } from 'react';
import { Container, Image, Row, Col } from 'react-bootstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useHistory } from 'react-router-dom';
import { PlayButton, TrailerModal } from '../../components';
import { DOMAIN } from '../../config';
import { CoreMovieStore } from '../../stores';
import { convertFormatDate } from '../../stores/store-showtime/orchestrator/fetch-showtime-by-movie-and-cinema.orchestrator';
import { Footer, NavBar } from '../../views';
import './detail.style.scss';
import { IDetailProps } from './detail.type';

const prefixClassName = 'detail';

export const Detail: React.FC<IDetailProps> = observer((props) => {
  const { match } = props;

  const history = useHistory();

  const detailMovie = CoreMovieStore.selectedMovieSelector(parseInt(match.params.id, 10));

  const colorScore: { path: string; trail: string } = useMemo(() => {
    if (detailMovie?.scorePercent && detailMovie?.scorePercent < 40) {
      return { path: 'rgba(217, 59, 99, 1)', trail: 'rgba(217, 59, 99, 0.2)' };
    }
    if (detailMovie?.scorePercent && detailMovie?.scorePercent < 70) {
      return { path: 'rgba(253, 193, 112, 1)', trail: 'rgba(253, 193, 112, 0.2)' };
    }
    return { path: 'rgba(76,209,122, 1)', trail: 'rgba(76,209,122, 0.2)' };
  }, [detailMovie?.scorePercent]);

  const moviePrimaryColor = { '--movie-primary-color': '31.5, 10.5, 10.5' } as React.CSSProperties;

  useEffect(() => {
    if (!detailMovie || !match.params) {
      history.push('/home');
    }
  }, [detailMovie, history, match.params]);

  return (
    <div className={prefixClassName}>
      <NavBar />
      <TrailerModal />

      <Container className={`${prefixClassName}__content-wrapper`} style={moviePrimaryColor}>
        <Row>
          <Col md={3} xs={12} className={`${prefixClassName}__content-image`}>
            <div onClick={() => CoreMovieStore.updateTrailerMovieAction(detailMovie)} style={{ zIndex: 500 }}>
              <PlayButton />
            </div>

            <Image src={`${DOMAIN}${detailMovie?.verticalBanner}`} width={300} height={450} />
          </Col>
          <Col md={8} xs={12} className={`${prefixClassName}__content-info`}>
            <div className={`${prefixClassName}__content-info-title`}>
              <h2>{detailMovie?.title}</h2>
              <h2>({convertFormatDate(detailMovie?.releaseDate || '').yyyy})</h2>
            </div>
            <div className={`${prefixClassName}__content-info-more`}>
              <div className={`${prefixClassName}__content-age-rate`}>P</div>
              <div className={`${prefixClassName}__content-date-region`}>
                {convertFormatDate(detailMovie?.releaseDate || '').formattedDate}
              </div>
              <div className={`${prefixClassName}__content-category`}>{detailMovie?.category}</div>
              <div className={`${prefixClassName}__content-time`}>1h 35m</div>
            </div>
            <div className={`${prefixClassName}__content-from-user`}>
              <div className={`${prefixClassName}__circle-percent-wrapper`}>
                <CircularProgressbarWithChildren
                  value={detailMovie?.scorePercent || 0}
                  strokeWidth={5}
                  background
                  backgroundPadding={5}
                  styles={{
                    path: {
                      stroke: colorScore.path,
                      transformOrigin: 'center center',
                    },
                    trail: {
                      stroke: colorScore.trail,
                    },
                  }}
                >
                  <p>
                    {detailMovie?.scorePercent || 0}
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
              <p>{detailMovie?.description}</p>
            </div>

            <div className={`${prefixClassName}__movie-people`}>
              <div className={`${prefixClassName}__movie-people-item`}>
                <h6>{detailMovie?.director}</h6>
                <p>Director, Screenplay</p>
              </div>
              <div className={`${prefixClassName}__movie-people-item`}>
                <h6>{detailMovie?.storyAuthor}</h6>
                <p>Novel, Screenplay</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
});
