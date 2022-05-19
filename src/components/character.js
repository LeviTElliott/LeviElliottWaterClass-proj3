import React from 'react'
// import styled from 'styled-components'

import Stats from './stats'
import Equipment from './equipment'

const Character = ({ char, error }) => {
  return char ? (
      <tag>
      <Stats className="characstyle" char={char} />
      <Equipment className="characstyle" char={char} />
      </tag>
  ) : error ? (
    <tag>
      <h2> className="characstyle" id="h2" Ut oh! {error}</h2>
    </tag>
  ) : null
}

// const CharacterStyle = styled.section
export default Character