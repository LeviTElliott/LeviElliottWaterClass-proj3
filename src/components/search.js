import React, { useContext, useState } from 'react'
import { AppContext } from './context-provider'
import styled from 'styled-components'

import logo from '../assets/edt_logo_white_.png'

const Search = () => {
  const { setCharData, setData } = useContext(AppContext)
  const [char, setChar] = useState('')
  const [realm, setRealm] = useState('')
  const disabled = char === '' || realm === ''

  const getChar = async () => {
    try {
        const getToken = await fetch('https://us.battle.net/oauth/token', {
            body: 'grant_type=client_credentials',
            headers: {
                Authorization: 'Basic N2ZiYWFlN2ExYWNjNGM0OWE1NmM2YmJhYmQwNTA3ZWI6UGhzNERkTnZmanY3dno1ZUxsYjFDcFFsa1Bvampqalo=', 'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST'
        });
        const tokenData = await getToken.json();
        const tokenBearer = tokenData.access_token;
        console.log(tokenBearer);
      const lookupResponse = await fetch(
        `https://us.api.blizzard.com/wow/character/${realm}/${char}?fields=stats&fields=items`,
        {
            headers: {
                Authorization: `Bearer ${tokenBearer}`,
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: 'GET'
        }
        );
        const apiData = await lookupResponse.json();
        console.log(apiData);
        if(apiData) {
            setData(apiData);
        };
    } catch(error) {
        console.log(error);
    };
  };

  const handleSubmit = e => {
    e.preventDefault()
    setCharData(null)
    setChar('')
    setRealm('')
    getChar()
  }

  return (
    <SearchStyle>
      <figure>
        <img src={logo} alt="BattleNet" />
      </figure>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={char}
          onChange={e => setChar(e.target.value)}
          placeholder="Character Name"
        />
        <input
          type="text"
          value={realm}
          onChange={e => setRealm(e.target.value)}
          placeholder="Realm Name"
        />
        <input
          className="search"
          type="submit"
          disabled={disabled}
          value="Search"
        />
      </form>
    </SearchStyle>
  )
}

const SearchStyle = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5rem 0;
  figure {
    width: 25rem;
  }
  img {
    width: 100%;
  }
  form {
    padding: 0 auto;
    width: 25rem;
  }
  input {
    display: block;
    margin: 1.5rem;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    width: 100%;
    background: #0b122f;
    color: #fafafa;
    border: none;
  }
  input::placeholder {
    color: rgba(200, 200, 200, 0.5);
  }
  input:focus {
    outline: 1px solid #ecba6d;
  }
  .search {
    background: rgb(21, 137, 128);
    background: linear-gradient(
      180deg,
      rgba(21, 137, 128, 1) 3%,
      rgba(21, 137, 128, 1) 35%,
      rgba(63, 122, 139, 1) 78%
    );
  }
`

export default Search