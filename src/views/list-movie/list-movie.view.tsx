import React from 'react';
import { Container } from 'react-bootstrap';
import './list-movie.style.scss';
import { IListMovieProps } from './list-movie.type';
import 'react-circular-progressbar/dist/styles.css';
import { CardMovie, Loading } from '../../components';
import { observer } from 'mobx-react';
import { CoreMovieStore } from '../../stores';
import { useHistory } from 'react-router-dom';

const prefixClassName = 'list-movie';

export const ListMovie: React.FC<IListMovieProps> = observer((props) => {
  const history = useHistory();

  const loadingMovie = CoreMovieStore.loadingMovieSelector();

  const listMovie = CoreMovieStore.movieListSelector();

  return (
    <Container className={prefixClassName}>
      {loadingMovie && <Loading />}

      <div className={`${prefixClassName}__header`}>
        <h3>What&#39;s Popular</h3>
        {/* <div className={`${prefixClassName}__header-tabs-wrapper`}>
          <div className={`${prefixClassName}__header-tab-item-selected`}>
            <a href="#">On TV</a>
          </div>
          <div className={`${prefixClassName}__header-tab-item`}>
            <a href="#">In Theater</a>
          </div>
        </div> */}
      </div>
      <div className={`${prefixClassName}__list-wrapper`}>
        <div className={`${prefixClassName}__list-inner`}>
          {listMovie?.map((item) => (
            <CardMovie key={item.id} movie={item} />
          ))}
        </div>
      </div>
    </Container>
  );
});
