import React from 'react';
import {
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Typography,
  Box
} from '@mui/material';
import { Link } from 'react-router-dom';

const IpoLists = ({ipoData}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="IPO Table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontWeight: 'bold', color: '#777' }}>Company / Issue date</TableCell>
            <TableCell style={{ fontWeight: 'bold', color: '#777' }}>Issue size</TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold', color: '#777' }}>Price range</TableCell>
            <TableCell align="right" style={{ fontWeight: 'bold', color: '#777' }}>Min invest/qty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ipoData.map((ipo) => (
            <TableRow key={ipo.id}>
              <TableCell component="th" scope="row">
              <Link to={`/ipo/${ipo.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Box display="flex" alignItems="center" key={ipo.id} hover>
                  <Avatar src={ipo.logo} alt={`${ipo.name} logo`} sx={{ marginRight: 2 }} />
                  <Box>
                    <Typography variant="h6" color="textPrimary">{ipo.name}</Typography>
                    <Typography variant="body2" color="textSecondary">{ipo.date}</Typography>
                  </Box>
                </Box>
              </Link>
              </TableCell>
              <TableCell>{ipo.issueSize}</TableCell>
              <TableCell align="right">{ipo.priceRange}</TableCell>
              <TableCell align="right">
                <Typography variant="body2">{ipo.minInvest}</Typography>
                <Typography variant="body2" color="textSecondary">{ipo.minQty}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default IpoLists;
