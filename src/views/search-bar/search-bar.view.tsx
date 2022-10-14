import React from 'react';
import { Container } from 'react-bootstrap';
import './search-bar.style.scss';
import { ISearchBarProps } from './search-bar.type';

const prefixClassName = 'search-bar';

export const SearchBar: React.FC<ISearchBarProps> = (props) => {
  return (
    <Container className={prefixClassName}>
      <section className={`${prefixClassName}__welcome-text`}>
        <h1>Welcome.</h1>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
      </section>
      <section className={`${prefixClassName}__search-form`}>
        <form id="inner_search_form" action="/search" method="get" acceptCharset="utf-8">
          <label>
            <input
              id="inner_search_v4"
              type="text"
              autoCorrect="off"
              autoComplete="off"
              spellCheck="false"
              placeholder="Search for a movie, tv show, person......"
              tabIndex={0}
            />
          </label>
          <input type="submit" defaultValue="Search" />
        </form>
      </section>
    </Container>
  );
};
