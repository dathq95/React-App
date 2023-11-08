import React, { useState } from 'react';
import { Divider, SearchButton, SearchContainer, SearchInput } from './Search';
import { Form } from 'react-bootstrap';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Search Term:', searchTerm);
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <SearchContainer>
        <SearchInput
          required
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <Divider />

        <SearchButton variant="outline-light" type="submit">
          Search
        </SearchButton>
      </SearchContainer>
    </Form>
  );
};

export default SearchComponent;
