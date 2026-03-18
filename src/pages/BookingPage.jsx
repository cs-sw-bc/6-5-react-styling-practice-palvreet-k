// BookingPage.jsx
// Page 3 — Book an Appointment
// Styling approach: Material UI
//
// No CSS files for this page — all styling comes from MUI components and the sx prop.
// The imports and data are provided. Your job is to build the JSX using MUI components (TODOs 25–30).
//
// Make sure you have run: npm install @mui/material @emotion/react @emotion/styled

import { useState } from 'react';

// MUI components are already imported for you
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';

const stylists = ['Aria Chen', 'Marcus Webb', 'Priya Nair', 'No preference'];

export default function BookingPage() {
  const [budget, setBudget] = useState(100);
  const [submitted, setSubmitted] = useState(false);
  const [stylist, setStylist] = useState('');

  return (
    // TODO 25: Wrap everything in a Container with maxWidth="sm" and sx={{ py: 4 }}
    <Container maxWidth="sm" sx={{ py: 4 }}>

      {/* TODO 26: Replace this div with a Box — dark background, white text, centred, with padding and border-radius */}
      {/* Inside it, add two Typography components: h4 for "Gloss & Co", body1 for "Book an Appointment" */}
      <Box sx={{ backgroundColor: '#1a1a2e', color: 'white', p: 3, borderRadius: 2, textAlign: 'center', mb: 3 }}>
        <Typography variant='h4'>Gloss & Co</Typography>
        <Typography variant='body1'>Book an Appointment</Typography>
      </Box>

      {/* TODO 30: Show an Alert with severity="success" here when submitted is true */}
      {submitted && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Booking confirmed.
        </Alert>
      )}

      {/* TODO 27: Replace this div with a Stack spacing={3} */}
      <Stack spacing={3}>

        <h2>Your Details</h2>

        {/* TODO 27: Replace these with TextField components — variant="outlined", fullWidth */}
        <TextField label="Full Name" variant='outlined' fullWidth/>
        <TextField label="Email Address" variant='outlined' fullWidth/>
        <TextField label="Phone Number" variant='outlined' fullWidth/>

        <h2>Appointment</h2>

        {/* TODO 28: Replace with a TextField type="date" */}
        <TextField
          type="date"
          variant='outlined'
          fullWidth
        />

        {/* TODO 28: Replace with a TextField select, with MenuItem children for each stylist */}
        <TextField
          select
          label="Preferred Stylist"
          variant='outlined'
          fullWidth
          value={stylist}
          onChange={(e) => setStylist(e.target.value)}
        >
          {stylists.map((s) => (
            <MenuItem key={s} value={s}>{s}</MenuItem>
          ))}
        </TextField>

        {/* TODO 29: Add a Typography label showing "Budget: $X" using the budget state */}
        <Typography>
        Budget: ${budget}
        </Typography>
        {/* TODO 29: Replace this with a Slider — min=20, max=300, step=10, valueLabelDisplay="auto" */}
        <Slider
          min={20}
          max={300}
          step={10}
          value={budget}
          valueLabelDisplay="auto"
          onChange={(_, newValue) => setBudget(newValue)}
        />

        {/* TODO 30: Replace this div with a Stack direction="row" spacing={2} */}
        {/* TODO 30: Replace these with Button components — contained and outlined variants */}
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => setSubmitted(true)}>Confirm Booking</Button>
          <Button variant='outlined' onClick={() => setSubmitted(false)}>Cancel</Button>
        </Stack>

      </Stack>

    </Container>
  );
}
