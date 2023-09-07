import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { forwardRef } from 'react';

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    return <MuiTextField ref={ref} {...props} />;
  },
);
