import React from 'react';
import { Card } from 'react-bootstrap';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import './card-movie.style.scss';
import { ICardMovieProps } from './card-movie.type';

const prefixClassName = 'card-movie';

export const CardMovie: React.FC<ICardMovieProps> = (props) => {
  const { thumbnail, title, dateRelease, scoreInPercent } = props;
  return (
    <Card className={prefixClassName}>
      <Card.Img variant="top" src={thumbnail} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{dateRelease}</Card.Text>
        <div className={`${prefixClassName}__circle-percent-wrapper`}>
          <CircularProgressbarWithChildren
            value={scoreInPercent}
            strokeWidth={5}
            background
            backgroundPadding={5}
            styles={{
              path: {
                stroke: `rgba(76,209,122)`,
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
        </div>
      </Card.Body>
    </Card>
  );
};
