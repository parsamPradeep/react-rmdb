import React, { useState, useEffect, useRef } from 'react';
import searchIcon from '../../images/search-icon.svg';

import { Wrapper, Content } from './SearchBar.styles';

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState('');
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="seacrh-icon" />
        <input
          type="text"
          placeholder="Seacrh Movie"
          onChange={e => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};
export default SearchBar;
