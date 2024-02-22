import React, { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';
import './SearchBar.css';
import AppContext from '../../context/AppContext';

const SearchBar = () => {
  const { setProducts, setLoading } = useContext(AppContext);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);
    setProducts(products);
    setLoading(false);
    setSearchValue('');
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar Produtos"
        className="searchInput"
        onChange={({ target }) => setSearchValue(target.value)}
        required
      />
      <button type="submit" className="searchButton">
        <BsSearch />
      </button>
    </form>
  );
};

export default SearchBar;
