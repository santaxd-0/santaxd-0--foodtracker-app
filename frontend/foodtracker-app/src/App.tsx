import { Grid } from '@mui/material';
import { SignInForm, ImageContainer } from './modules/auth/SignInPage';

import './App.css'

const App = () => {

  return (
    <>
      {/* NOTE: Grid - The responsive layout grid adapts to screen size
       and orientation, ensuring consistency across layouts. */}
      <Grid container>
        <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
          <SignInForm />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
          <ImageContainer />
        </Grid>
      </Grid>
    </>
  )
}

export default App
