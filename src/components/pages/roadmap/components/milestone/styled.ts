import styled from 'styled-components'

export const ExpandIconWrapper = styled.div`
  position: absolute;
  right: 0px;

  svg {
    color: rgb(133, 208, 255);
  }
`

export const Header = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  min-height: 96px;
`

export const HeaderTitle = styled.div`
  color: white;
  display: flex;
  font-size: 22px;
  justify-content: center;
  margin: 0px 24px 0px 24px;
  user-select: none;
`

export const HeaderTitleWrapper = styled.div`
  color: white;
  display: flex;
  font-size: 22px;
  justify-content: center;
  margin: 16px;
  position: relative;
  user-select: none;
`

export const MilestonesWrapper = styled.div`
  padding: 0 8px 8px 8px;
`

interface WrapperParamTypes {
  isExpanded: boolean
}

export const Wrapper = styled.div`
  background-color: rgba(28, 51, 63, 0.7);
  border-radius: 16px;
  height: min-content;
  overflow: auto;
  width: ${(props: WrapperParamTypes) => (props.isExpanded ? '320px' : '120px')};
`
