import React from 'react';
import { Container, TextField, Button, Box, Typography, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export const LogTime = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box sx={{ bgcolor: '#fff', p: 3, borderRadius: 2, boxShadow: 1 }}>
        <Typography variant="h6" gutterBottom component="div">
          Add Logs
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="project-label">Project</InputLabel>
            <Select
              labelId="project-label"
              id="project"
              label="Project"
              defaultValue=""
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {/* Add project options here */}
            </Select>
          </FormControl>
          <TextField
            id="datetime"
            label="Datetime"
            type="datetime-local"
            defaultValue="2024-09-10T00:00"
            sx={{ mb: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          <TextField
            id="hours"
            label="Hours"
            type="number"
            defaultValue={8}
            sx={{ mb: 2 }}
            fullWidth
          />
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="activity-label">Activity</InputLabel>
            <Select
              labelId="activity-label"
              id="activity"
              label="Activity"
              defaultValue=""
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {/* Add activity options here */}
            </Select>
          </FormControl>
          <TextField
            id="comment"
            label="Comment"
            multiline
            rows={4}
            sx={{ mb: 2 }}
            fullWidth
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
            <Button variant="contained" sx={{
                backgroundColor : '#006090',
                color: 'white'
            }}>
              Create
            </Button>
            <Button variant="contained" sx={{
                backgroundColor : '#32AED3',
                color: 'white'
            }}>
              Create & Add another
            </Button>
            <Button variant="outlined"   sx={{
                backgroundColor : '#E89315',
                color: 'white'
            }}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};