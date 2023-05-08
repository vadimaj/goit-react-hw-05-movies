import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { ReactComponent as SearchIcon } from '../icons/search-icon.svg';

const Searchbar = props => {
  const { onSubmit } = props;

  const [query, setQuery] = useState('');

  const handleInputChange = e => {
    setQuery(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Please enter search query');
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
          className={css['searchForm-input']}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit" className={css['searchForm-button']}>
          <SearchIcon width="25" height="25" />
        </button>
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
