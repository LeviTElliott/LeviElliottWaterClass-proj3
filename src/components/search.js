import React, { useContext, useState } from 'react'
import { AppContext } from './context-provider'
// import styled from 'styled-components'

import logo from '../assets/edt_logo_white_.png'

const Search = () => {
  const { setCharData, setError } = useContext(AppContext)
  const [char, setChar] = useState('')
  const [realm, setRealm] = useState('')
  const disabled = char === '' || realm === ''

  const getChar = async () => {
    try {
    //   const tokenResponse = await fetch('https://us.battle.net/oauth/token', {
    //     body: 'grant_type=client_credentials',
    //     headers: {
    //       Authorization:
    //         'Basic YjlmOTYwZDMxMjU3NDBhYmFlNGIzYWNiOTBlNjM1NGM6eVhsalR2WDU0VUtLMXlWblBUTE1hWXR1VXZQTmpPRk0=',
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     },
    //     method: 'POST'
    //   })
    //   const tokenData = await tokenResponse.json()
      const bearerToken = process.env.access_token
      const lookupResponse = await fetch(
        `https://us.api.blizzard.com/wow/character/${realm}/${char}?fields=stats&fields=items`,
        {
          headers: {
            Authorization: `Bearer ${bearerToken}`,
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'GET'
        }
      )
      const data = await lookupResponse.json()
      if (data.name) {
        setCharData(data)
      }
      if (data.reason) {
        setError(data.reason)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    setCharData(null)
    setChar('')
    setRealm('')
    getChar()
  }

  return (
    <tag>
      <figure>
        <img src={logo} alt="Eagle Dream" />
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
    </tag>
  )
}

 
export default Search