import React, { useEffect } from 'react';
import { IHomePageProps } from './home.type';
import './home.style.scss';
import { BookCinema, Footer, LeaderBoard, ListMovie, NavBar, SearchBar } from '../../views';
import { CoreCinemaStore, CoreCineplexStore, CoreMovieStore } from '../../stores';

const prefixClassName = 'home-page';

export const HomePage: React.FC<IHomePageProps> = (props) => {
  const listMovie = CoreMovieStore.movieListSelector();

  const listCinema = CoreCinemaStore.cinemaListSelector();

  const listCineplex = CoreCineplexStore.cineplexListSelector();

  useEffect(() => {
    if (!listMovie) {
      CoreMovieStore.fetchMovieListAction();
    }
  }, [listMovie]);

  useEffect(() => {
    if (!listCinema) {
      CoreCinemaStore.fetchCinemaListAction();
    }
  }, [listCinema]);

  useEffect(() => {
    if (!listCineplex) {
      CoreCineplexStore.fetchCineplexListAction();
    }
  }, [listCineplex]);

  return (
    <div className={prefixClassName}>
      <NavBar />
      <SearchBar />
      <ListMovie />
      <BookCinema />
      <LeaderBoard />
      <Footer />
    </div>
  );
};
