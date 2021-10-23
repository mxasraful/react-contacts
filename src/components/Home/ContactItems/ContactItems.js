import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import { Button, ButtonGroup } from '@mui/material';

const ContactItems = () => {


    // Create single item for table
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

    // Create array for show contacts in mui table
    const rows = () => {
        let fullRowArray = []
        for (let i = 0; i < rowData.length; i++) {
            const { name, email, number, id } = rowData[i];
            fullRowArray = [...fullRowArray, createData(name, email, number, (
                <ButtonGroup variant="outlined" size='small'>
                    <Button onClick={() => editItemBtn(id)} color="success"><CreateIcon /></Button>
                    <Button onClick={() => deleteItem(id)} color="error"><DeleteIcon /></Button>
                </ButtonGroup>
            )),]
        }
        return fullRowArray
    }

    // Handle edit contact item
    const editItemBtn = (id) => {

    }

    // Handle delete contact item
    const deleteItem = (id) => {

    }

    return (
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
                    {rows()?.map((row) => (
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
    );
};

export default ContactItems;