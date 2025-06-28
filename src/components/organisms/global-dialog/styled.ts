import styled from '@emotion/styled'

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1300;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
`

export const DialogContainer = styled.div<{
  maxWidth?: string
  fullWidth?: boolean
}>`
  border-radius: 8px;
  box-shadow: 0 3px 16px rgba(0, 0, 0, 0.2);
  padding: 24px;
  min-width: 320px;
  max-width: ${({ maxWidth, fullWidth }) => {
    if (fullWidth === true) return 'calc(100vw - 32px)'
    if (maxWidth === 'sm') return '600px'
    if (maxWidth === 'md') return '960px'
    if (typeof maxWidth === 'string' && maxWidth.trim() !== '') return maxWidth
    return '600px'
  }};
  width: ${({ fullWidth }) => (fullWidth === true ? '100%' : 'auto')};
  margin: 16px;
  animation: dialog-fade-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  @keyframes dialog-fade-in {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`
