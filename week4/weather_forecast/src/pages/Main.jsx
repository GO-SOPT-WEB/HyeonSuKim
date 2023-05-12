import React from 'react'
import styled from 'styled-components'
import theme from '../styles/theme'

export default function Main() {
  return (
    <St.Main>
      
    </St.Main>
  )
}

const St = {
    Main: styled.div`
        background-color: ${theme.colors.orange};
        height: 100vh;
    `
}