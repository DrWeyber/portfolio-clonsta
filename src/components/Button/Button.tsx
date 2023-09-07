import { Button as MuiButton, ButtonProps } from '@mui/material';
import { forwardRef } from 'react';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return <MuiButton ref={ref} {...props} />;
  },
);
