import { useTranslation } from 'react-i18next';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';

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
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email адрес"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Войти
          </Button>
        </form>
      </Paper>
    </Container>
  );
};
