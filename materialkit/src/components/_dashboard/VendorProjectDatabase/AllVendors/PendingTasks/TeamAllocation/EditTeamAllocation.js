// material
import { Grid, Card, Typography, Stack, Container } from '@mui/material';
// components
import Page from '../../../../../Page';
import EditDatabase from './DataEditFormNew';
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

export default function EditTeamAllocation() {
  return (
    <Page title="Vendor Projects Databases | Mobitel Projects Dashboard">
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={0}>
        <Typography variant="h6" gutterBottom>
          Vendor Projects Database - Edit Project
        </Typography>
      </Stack>
      <br />
      <Card>
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="top" mb={1} />
          <Grid item xs={12} sm={12} md={12}>
            <EditDatabase />
          </Grid>
        </Container>
      </Card>
    </Page>
  );
}
