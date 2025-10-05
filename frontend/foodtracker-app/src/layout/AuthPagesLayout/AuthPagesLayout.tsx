import { Grid } from "@mui/material"
import { ImageContainer } from "../../modules/auth/SignIn"
import { Outlet } from "react-router-dom"

export const AuthPagesLayout = () => {
    return (
      /* NOTE: Grid - The responsive layout grid adapts to screen size
       and orientation, ensuring consistency across layouts. */
      <Grid container>
        <Grid size={{ xs: 12, md: 7 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* Nedded form type */}
          <Outlet />
        </Grid>
        <Grid size={{ xs: 12, md: 5 }} sx={{ display: { xs: 'none', md: 'block' } }}>
          <ImageContainer />
        </Grid>
      </Grid>
    )
}