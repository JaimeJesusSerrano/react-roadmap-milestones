import styled from 'styled-components'

export const Description = styled.div`
  color: #e8ebed;
  font-size: 0.9rem;
  font-weight: 400;
  padding: 16px;
`

export const ImageNotFoundWrapper = styled.div`
  background-color: #78848c;
  box-sizing: border-box;
  height: 100%;
  padding: 8px;
  width: 100%;

  svg {
    max-height: 130px;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;

  img {
    max-height: 130px;
  }
`

export const Status = styled.div`
  align-items: center;
  background-color: #6fbeec;
  border-radius: 8px 8px 0 0;
  color: #000000;
  display: flex;
  font-size: 0.8rem;
  font-weight: 600;
  height: 24px;
  padding-left: 32px;
  text-transform: uppercase;
`

export const TagsWrapper = styled.div`
  border-top: 2px solid #164664;
  padding: 8px 16px 16px 16px;
`

export const Title = styled.div`
  align-items: center;
  color: #e8ebed;
  display: flex;
  font-weight: 400;
  min-height: 40px;
  padding: 8px 16px 8px 16px;
`

export const Wrapper = styled.div`
  background: #103246;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 8px;
  margin-top: 8px;

  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`
