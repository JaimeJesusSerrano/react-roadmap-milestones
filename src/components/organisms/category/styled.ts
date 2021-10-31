import styled from 'styled-components'

export const GoalsWrapper = styled.div`
  padding: 10px;
`

export const Header = styled.div`
  display: flex;
  cursor: pointer;
  flex-direction: row;
  height: 36px;
  padding: 16px;
  justify-content: space-between;
  user-select: none;
`

export const LeftHeader = styled.div`
  display: flex;
  flex-direction: column;
`

export const LeftHeaderSubtitle = styled.div`
  color: rgb(186, 193, 197);
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 20px;
  letter-spacing: 1px;
`

export const LeftHeaderTitle = styled.div`
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 20px;
  letter-spacing: 1px;
`

export const RightHeader = styled.div`
  color: ${props => props.theme.palette.categoty.chevron};
  display: flex;
  flex-direction: row;
`

export const Wrapper = styled.div`
  background-color: ${props => props.theme.palette.categoty.background};
  border: 1px solid ${props => props.theme.palette.categoty.border};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  position: relative;
  transition: box-shadow 350ms ease-in-out 0s, background-color 350ms ease-in-out 0s;
  width: 100%;
`
