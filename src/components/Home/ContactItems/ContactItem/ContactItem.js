import { TableCell, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ModalAll from '../../../Reusable/Modal/Modal';
import EditItem from './EditItem/EditItem';

const ContactItem = ({ row, editItemModalOpen, editBtnClickCount, setOpenSnackbar, setSnackbarMsg, setSnackbarVariant }) => {

    const [openModal, setOpenModal] = useState(false)

    // Edit item modal section

    // Set modal open
    useEffect(() => {
        if (editItemModalOpen === row.id) {
            setOpenModal(true)
        } else {
            setOpenModal(false)
        }
    }, [editBtnClickCount])

    // Close modal handler
    const closeEditItemModal = () => {
        setOpenModal(false)
    }


    return (
        <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <ModalAll open={openModal} close={closeEditItemModal}>
                <EditItem setOpenSnackbar={setOpenSnackbar} setSnackbarMsg={setSnackbarMsg} setSnackbarVariant={setSnackbarVariant} id={row.id} setOpenModal={setOpenModal} />
            </ModalAll>

            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell align="right">{row.email}</TableCell>
            <TableCell align="right">{row.number}</TableCell>
            <TableCell align="right">{row.action}</TableCell>
        </TableRow>
    );
};

export default ContactItem;