import styled from 'styled-components'

export const Body = styled.div`
  display: flex;
`

export const Header = styled.div`
  background-color: rgb(55, 133, 174);
  color: rgb(232, 235, 237);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
`

export const ImageWrapper = styled.div`
  border-bottom: 1px solid #334752;
`

export const ImageAndDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500;
  width: 500px;
`

export const Miscellaneous = styled.div`
  border-left: 1px solid #334752;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 300px;
`

export const Title = styled.div`
  border-bottom: 1px solid #334752;
  color: white;
  padding: 16px 24px;
`

export const Wrapper = styled.div`
  background-color: #103246;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 800px;
`
