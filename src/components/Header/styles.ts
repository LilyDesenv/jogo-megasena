import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.green};
  padding: 16px;
  align-items: center;
  justify-content: center;
  display: flex;

  div {
    display: block;
    width: 100%;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 45px;
        height: 45px;
      }
    }
    h1 {
      color: ${colors.white};
      font-size: 36px;
      font-weight: bold;
      margin-top: 16px;
      text-align: center;
    }
  }
`
