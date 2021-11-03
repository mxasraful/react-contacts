import React, { useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from './ContactItem/ContactItem';

const ContactItems = ({ setOpenSnackbar, setSnackbarMsg, setSnackbarVariant }) => {

    const [editItemModalOpen, setEditItemModalOpen] = useState(null)
    const [editBtnClickCount, setEditBtnClickCount] = useState(null)

    // Create single item for table
    function createData(name, email, number, action, id) {
        return { name, email, number, action, id };
    }

    const contacts = useSelector(state => state)
    const dispatch = useDispatch()
    // const sortedDt = contacts.sort((a, b) => {
    //     return parseInt(a.numOffList) - parseInt(b.numOffList)
    // })

    // console.log(sortedDt)

    // Create array for show contacts in mui table
    const rows = () => {
        let fullRowArray = []
        for (let i = 0; i < contacts.length; i++) {
            const { name, email, phone, id } = contacts[i];
            fullRowArray = [...fullRowArray, createData(name, email, phone, (
                <ButtonGroup variant="outlined" size='small'>
                    <Button onClick={() => {
                        setEditItemModalOpen(id)
                        setEditBtnClickCount(editBtnClickCount + 1)
                    }} color="success"><CreateIcon /></Button>
                    <Button onClick={() => deleteItem(id)} color="error"><DeleteIcon /></Button>
                </ButtonGroup>
            ), id),]
        }
        return fullRowArray
    }

    // Handle delete contact item
    const deleteItem = (id) => {
        dispatch({ type: "DELETE_ITEM", id })
    }


    return (
        <>
            {
                contacts.length > 0 ?
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
                                    <ContactItem setOpenSnackbar={setOpenSnackbar} setSnackbarMsg={setSnackbarMsg} setSnackbarVariant={setSnackbarVariant} row={row} editItemModalOpen={editItemModalOpen} setEditItemModalOpen={setEditItemModalOpen} editBtnClickCount={editBtnClickCount} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <div className="text-center" style={{ marginTop: "200px" }}>
                        <h5>Don't have any contact.</h5>
                    </div>
            }
        </>
    );
};

export default ContactItems;