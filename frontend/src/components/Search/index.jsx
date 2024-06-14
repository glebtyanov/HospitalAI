import React, { useState } from "react";
import { SearchWrapper, SearchInput, SearchButton } from "./styled";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  const handleSearchButtonClick = () => {
    onSearch(query);
  };

  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        placeholder="Я ищу человека..."
        onChange={handleInputChange}
      />
      <SearchButton onClick={handleSearchButtonClick}>Поиск</SearchButton>
    </SearchWrapper>
  );
};

export default Search;
