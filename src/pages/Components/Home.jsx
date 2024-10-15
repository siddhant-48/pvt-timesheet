import React from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Welcome Siddhant
        </Typography>
        <Paper sx={{ p: 1, my: 1, backgroundColor: "#FFFACD" }}>
          <Typography>
            Welcome to Nitor Timesheet Portal.!!!<br></br>
            If you are not able to view your projects - Please contact Project
            Manager and ask them to add you to the project.
          </Typography>
        </Paper>
        <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
          Projects
        </Typography>
        <hr></hr>

        <Box sx={{ display: "flex", mt: 2, justifyContent: "space-between" }}>
          {/* First sub-component - Paper */}
          <Paper
            sx={{
              p: 1,
              my: 1,
              flex: 1,
              backgroundColor: "#FFFACD",
              width: "auto",
              flexShrink: 0,
              mr: 2,
            }}
          >
            <Typography>No Project Assigned...!!!</Typography>
          </Paper>

          {/* Second sub-component - Box */}
          <Box sx={{ flex: "1", p: 1, my: 1 }}>
            {" "}
            {/* `flex: 1` ensures 50% width */}
            <Typography variant="h5" gutterBottom marginLeft="5px">
              Current month's log stats:
            </Typography>
            <TableContainer
              component={Paper}
              sx={{ border: "1px solid #ddd", borderRadius: "4px" }}
            >
              <Table aria-label="simple table" sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        borderBottom: "1px solid #ccc",
                        borderRight: "1px solid #ddd",
                      }}
                    >
                      Project Name
                    </TableCell>
                    <TableCell
                      sx={{
                        borderBottom: "1px solid #ccc",
                        borderRight: "1px solid #ddd",
                      }}
                    >
                      Activity
                    </TableCell>
                    <TableCell sx={{ borderBottom: "1px solid #ccc" }}>
                      Total Hours
                    </TableCell>{" "}
                    {/* Last cell has no right border */}
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={{ borderRight: "1px solid #ddd" }}
                      align="center"
                      colSpan={3}
                    >
                      No Data to Display!
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
