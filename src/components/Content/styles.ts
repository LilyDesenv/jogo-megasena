import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Container = styled.div`
  background-color: ${colors.lightGreen};
`

export const ButtonSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background-color: ${colors.green};
    color: ${colors.white};
    padding: 8px 24px;
    border: none;
    border-radius: 8px;
    font-size: 36px;
    font-weight: bold;
    margin-top: 16px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 152, 77, 0.7);
    }
  }
`
export const NumberSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    padding: 16px;
    margin: 16px 0;
    font-size: 48px;
    color: ${colors.green};
    font-weight: bold;
  }

  .empty {
    display: none;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      font-size: 24px;
    }
  }
`
export const CardSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    padding-bottom: 20px;
    background-color: ${colors.yellow};
  }
`

export const Row = styled.div`
  max-width: 400px;
  background-color: ${colors.yellow};
  display: block;
  padding: 8px;
`
export const Collumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }

  div {
    border: 1px solid ${colors.black};
    border-radius: 5px;
    font-size: 14px;
    padding: 2px 6px;
    background-color: ${colors.yellow};
    color: ${colors.black};
  }

  .selected {
    background-color: ${colors.green};
    color: ${colors.white};
  }
`
export const groupNumbers = styled.div`
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`
