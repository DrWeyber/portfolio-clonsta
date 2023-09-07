import { useTranslation } from 'react-i18next';
import { Container, Typography, Paper, Link } from '@mui/material';
import { TextField, Button } from '../components';

export const LoginContainer = () => {
  const { t } = useTranslation();

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: '10px 20px',
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          align="center"
          fontFamily="Bebas Neue"
          fontSize="50px"
        >
          Clonsta
        </Typography>
        <form noValidate>
          <TextField
            autoComplete="email"
            autoFocus
            fullWidth
            id="email"
            label={t('email_address')}
            margin="normal"
            name="email"
            required
            variant="outlined"
          />
          <TextField
            autoComplete="current-password"
            fullWidth
            id="password"
            label={t('password')}
            margin="normal"
            name="password"
            required
            type="password"
            variant="outlined"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            {t('sign_in')}
          </Button>
          <Link
            href="/register"
            sx={{
              display: 'block',
              textAlign: 'center',
              fontSize: '10px',
              marginTop: '10px',
            }}
          >
            {t('dont_have_an_account')}
          </Link>
        </form>
      </Paper>
    </Container>
  );
};
