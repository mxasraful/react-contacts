import { Button, ButtonGroup, Container, CssBaseline, Snackbar } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const Home = () => {

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState(null)

    function createData(name, email, number, action) {
        return { name, email, number, action };
    }

    const rowData = [
        {
            name: "Asraful I.",
            email: "mxasraful@outlook.com",
            number: "01631820368",
            id: "984E43FD35"
        },
        {
            name: "Asraful ISLAM",
            email: "mxasraful@outlook.com",
            number: "01631820368",
            id: "C464F665D35"
        },
        {
            name: "Mx Asraful",
            email: "mxasraful@outlook.com",
            number: "01631820368",
            id: "984E45C3454"
        },
    ]

    const rows = [
        createData('Asraful', 'mxasraful@outlook.com', "01631820368", (
            <ButtonGroup variant="outlined" size='small'>
                <Button color="success"><CreateIcon /></Button>
                <Button color="error"><DeleteIcon /></Button>
            </ButtonGroup>
        )),
    ];


    // Snackbar Section
    const handleSnackbarClick = () => {
        setOpenSnackbar(true);
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    const snackbarAction = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleSnackbarClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    );

    console.log(snackbarMsg)

    return (
        <Fragment>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={snackbarMsg}
                action={snackbarAction}
            >
            </Snackbar>
            <CssBaseline />
            <Container fixed>
                <Box sx={{ bgcolor: '#cfe8fc', height: '80vh', marginTop: "15vh", padding: "20px 200px" }}>
                    <Box>
                        <Button sx={{ float: "right", marginBottom: "20px" }} onClick={() => {
                            handleSnackbarClick()
                            setSnackbarMsg("Not Allowed.")
                        }} variant="contained"><AddIcon /> Add Contacts</Button>
                    </Box>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ background: "#1976d26b" }}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="center">Email</TableCell>
                                    <TableCell align="center">Phone</TableCell>
                                    <TableCell align="center">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.email}</TableCell>
                                        <TableCell align="right">{row.number}</TableCell>
                                        <TableCell align="right">{row.action}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Container>
        </Fragment>
    );
};

export default Home;