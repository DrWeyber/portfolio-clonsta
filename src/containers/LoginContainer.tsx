import { useTranslation } from 'react-i18next';
import { Container, Typography, Button, Paper } from '@mui/material';
import { TextField } from '../components';

export const LoginContainer = () => {
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} style={{ padding: '20px', marginTop: '80px' }}>
        <Typography component="h1" variant="h5">
          {t('login')}
        </Typography>
        <form noValidate>
          <TextField
            autoComplete="email"
            autoFocus
            fullWidth
            id="email"
            label="Email адрес"
            margin="normal"
            name="email"
            required
            variant="outlined"
          />
          <TextField
            autoComplete="current-password"
            fullWidth
            id="password"
            label="Пароль"
            margin="normal"
            name="password"
            required
            type="password"
            variant="outlined"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            {t('enter')}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
