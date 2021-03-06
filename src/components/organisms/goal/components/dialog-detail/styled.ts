import styled from 'styled-components'

export const Body = styled.div`
  display: flex;

  @media ${props => props.theme.devices.laptopMax} {
    flex-direction: column;
  }
`

export const BodyDescription = styled.div`
  color: white;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1.5rem;
  margin-top: 8px;
`

export const BodyDescriptionDate = styled.div`
  color: rgb(186, 193, 197);
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 1rem;
`

export const BodyDescriptionWrapper = styled.div`
  padding: 24px;
`

export const Category = styled.span`
  color: #ffffff;
`

export const CategoryTitle = styled.span`
  color: rgb(186, 193, 197);
`

export const CategoryWrapper = styled.div`
  border-bottom: 1px solid #334752;
  padding: 12px 24px;
`

export const Close = styled.div`
  cursor: pointer;
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
  align-items: center;
  border-bottom: 1px solid #334752;
  display: flex;
  justify-content: center;
  min-height: 294px;
  width: 500px;

  @media ${props => props.theme.devices.laptopMax} {
    min-height: 0;
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
  }
`

export const ImageAndDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500;
  width: 500px;

  @media ${props => props.theme.devices.laptopMax} {
    width: 100%;
  }
`

export const Miscellaneous = styled.div`
  border-left: 1px solid #334752;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 300px;

  @media ${props => props.theme.devices.laptopMax} {
    width: 100%;
  }
`

export const Status = styled.div`
  text-transform: uppercase;
`

export const Title = styled.div`
  border-bottom: 1px solid #334752;
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  padding: 16px 24px;
`

export const Wrapper = styled.div`
  background-color: #103246;
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 800px;

  @media ${props => props.theme.devices.laptopMax} {
    width: 100%;
  }
`
