import styled from 'styled-components'

export const Description = styled.div`
  color: rgb(232, 235, 237);
  font-size: 0.9rem;
  font-weight: 400;
  padding: 16px;
`

export const ImageNotFoundWrapper = styled.div`
  background-color: #78848c;
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
  background: rgb(55, 133, 174);
  border-radius: 8px 8px 0 0;
  color: rgb(232, 235, 237);
  display: flex;
  font-size: 0.9rem;
  font-weight: 700;
  height: 24px;
  padding-left: 32px;
  text-transform: uppercase;
`

export const Title = styled.div`
  align-items: center;
  color: rgb(232, 235, 237);
  display: flex;
  font-weight: 400;
  min-height: 40px;
  padding: 8px 16px 8px 16px;
`

export const Wrapper = styled.div`
  background: rgb(16, 50, 70);
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
