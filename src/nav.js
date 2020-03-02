import React from "react";
import styled from "styled-components";

const NavStyles = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #222222;
  box-shadow: 0px 3px 4px 0px #000;
`;

const NavContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 1.5rem;
`;

const NavTitle = styled.div`
  color: white;
  font-size: 1.5rem;
`;

const SearchCityForm = styled.form`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

const SearchCityInput = styled.input`
  background: none;
  background-color: white;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 5px;
  border-bottom: 1px solid black;
  outline: none;
`;
const SearchCitySubmit = styled.button`
  background-color: #3399ff;
  border: none;
  outline: none;
  border-radius: 20px;
`;


const Nav = ({ searchClick, handleSearch }) => {
  return (
    <NavStyles>
      <NavContainer>
        <NavTitle>Weather App</NavTitle>
        <SearchCityForm onChange={handleSearch}>
          <SearchCityInput
            type="search"
            placeholder="場所を入力"
            label="searchQuery"
          />
          <SearchCitySubmit type="submit" onClick={searchClick} >Submit</SearchCitySubmit>
        </SearchCityForm>
      </NavContainer>
    </NavStyles>
  );
};

export default Nav;
