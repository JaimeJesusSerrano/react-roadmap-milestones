import React, { type ReactNode, useEffect } from 'react';

import { Backdrop, DialogContainer } from './styled';

interface DialogProps {
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  children,
  maxWidth = 'sm',
  fullWidth = false,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape' && onClose) {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <Backdrop onClick={handleBackdropClick}>
      <DialogContainer maxWidth={maxWidth} fullWidth={fullWidth}>
        {children}
      </DialogContainer>
    </Backdrop>
  );
};
