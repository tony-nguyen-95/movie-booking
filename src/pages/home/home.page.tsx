import React from 'react';
import { IHomePageProps } from './home.type';
import './home.style.scss';
import { BookCinema, Footer, LeaderBoard, ListMovie, NavBar, SearchBar } from '../../views';

const prefixClassName = 'home-page';

export const HomePage: React.FC<IHomePageProps> = (props) => {
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
