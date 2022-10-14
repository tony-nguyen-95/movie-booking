import React from 'react';
import { Container } from 'react-bootstrap';
import './list-movie.style.scss';
import { IListMovieProps } from './list-movie.type';
import 'react-circular-progressbar/dist/styles.css';
import { CardMovie } from '../../components';

const prefixClassName = 'list-movie';

export const ListMovie: React.FC<IListMovieProps> = (props) => {
  return (
    <Container className={prefixClassName}>
      <div className={`${prefixClassName}__header`}>
        <h3>What&#39;s Popular</h3>
        <div className={`${prefixClassName}__header-tabs-wrapper`}>
          <div className={`${prefixClassName}__header-tab-item-selected`}>
            <a href="#">On TV</a>
          </div>
          <div className={`${prefixClassName}__header-tab-item`}>
            <a href="#">In Theater</a>
          </div>
        </div>
      </div>
      <div className={`${prefixClassName}__list-wrapper`}>
        <div className={`${prefixClassName}__list-inner`}>
          {[...Array(20)].map((item, index) => (
            <CardMovie
              key={index}
              title="The Lord of the Rings: The Rings of Power"
              thumbnail="https://www.themoviedb.org/t/p/w440_and_h660_face/mYLOqiStMxDK3fYZFirgrMt8z5d.jpg"
              dateRelease="Sep 01, 2022"
              scoreInPercent={88}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};
