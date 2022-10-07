import React from 'react';
import { IHomePageProps } from './home.type';
import './home.style.scss';
import { NavBar } from '../../views';

const prefixClassName = 'home-page';

export const HomePage: React.FC<IHomePageProps> = (props) => {
  return (
    <div className={`${prefixClassName}`}>
      <NavBar />
    </div>
  );
};
