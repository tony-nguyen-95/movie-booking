import React from 'react';
import { Container } from 'react-bootstrap';
import './list-movie.style.scss';
import { IListMovieProps } from './list-movie.type';
import 'react-circular-progressbar/dist/styles.css';
import { CardMovie, Loading, TrailerModal } from '../../components';
import { observer } from 'mobx-react';
import { CoreMovieStore } from '../../stores';

const prefixClassName = 'list-movie';

export const ListMovie: React.FC<IListMovieProps> = observer((props) => {
  const loadingMovie = CoreMovieStore.loadingMovieListSelector();

  const listMovie = CoreMovieStore.movieListSelector();

  return (
    <Container id="popular" className={prefixClassName}>
      {loadingMovie && <Loading />}

      <div className={`${prefixClassName}__header`}>
        <h3>What&#39;s Popular</h3>
      </div>
      <div className={`${prefixClassName}__list-wrapper`}>
        <div className={`${prefixClassName}__list-inner`}>
          {listMovie?.map((item) => (
            <CardMovie key={item.id} movie={item} />
          ))}
        </div>
      </div>
      <TrailerModal />
    </Container>
  );
});
