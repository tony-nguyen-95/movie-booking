import React, { useMemo } from 'react';
import { Card } from 'react-bootstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { useHistory } from 'react-router-dom';
import { DOMAIN } from '../../config';
import { CoreMovieStore } from '../../stores';
import { convertFormatDate } from '../../stores/store-showtime/orchestrator/fetch-showtime-by-movie-and-cinema.orchestrator';
import { PlayButton } from '../play-button';
import './card-movie.style.scss';
import { ICardMovieProps } from './card-movie.type';

const prefixClassName = 'card-movie';

export const CardMovie: React.FC<ICardMovieProps> = (props) => {
  const { movie } = props;

  const { id, verticalBanner, title, releaseDate, scorePercent } = movie;

  const history = useHistory();

  const colorScore: { path: string; trail: string } = useMemo(() => {
    if (scorePercent && scorePercent < 40) {
      return { path: 'rgba(217, 59, 99, 1)', trail: 'rgba(217, 59, 99, 0.2)' };
    }
    if (scorePercent && scorePercent < 70) {
      return { path: 'rgba(253, 193, 112, 1)', trail: 'rgba(253, 193, 112, 0.2)' };
    }
    return { path: 'rgba(76,209,122, 1)', trail: 'rgba(76,209,122, 0.2)' };
  }, [scorePercent]);

  return (
    <Card className={prefixClassName}>
      <div onClick={() => CoreMovieStore.updateTrailerMovieAction(movie)} style={{ zIndex: 500 }}>
        <PlayButton />
      </div>

      <Card.Img variant="top" src={`${DOMAIN}${verticalBanner}`} onClick={() => history.push(`/detail/${id}`)} />
      <Card.Body onClick={() => history.push(`/detail/${id}`)} style={{ cursor: 'pointer' }}>
        <Card.Title style={{ marginBottom: '0.5rem' }}>{title}</Card.Title>

        <Card.Text style={{ fontStyle: 'italic' }}>Release:</Card.Text>
        <Card.Text>{convertFormatDate(releaseDate || '').formattedDate}</Card.Text>

        <div className={`${prefixClassName}__circle-percent-wrapper`}>
          <CircularProgressbarWithChildren
            value={scorePercent || 0}
            strokeWidth={5}
            background
            backgroundPadding={5}
            styles={{
              path: {
                stroke: colorScore.path,
              },
              trail: {
                stroke: colorScore.trail,
              },
            }}
          >
            <p>
              {scorePercent}
              <span>%</span>
            </p>
          </CircularProgressbarWithChildren>
        </div>
      </Card.Body>
    </Card>
  );
};
