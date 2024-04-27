import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.green};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0 40px;

  h2 {
    color: ${colors.white};
    font-size: 16px;
  }
`
