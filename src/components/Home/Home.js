import { Alert, Button, Container, CssBaseline, Snackbar } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddItem from './AddItem/AddItem';
import ContactItems from './ContactItems/ContactItems';
import { useSelector } from 'react-redux';
import ModalAll from '../Reusable/Modal/Modal';

const Home = () => {

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState(null)
    const [snackbarVariant, setSnackbarVariant] = useState(null)
    const [addItemModalOpen, setAddItemModalOpen] = useState(false)

    // All contacts items 
    const contacts = useSelector(state => state)

    // Handle add contact item
    const addContactItem = () => {
        openAddItemModal()
    }


    // Modal Section
    // Open modal handler
    const openAddItemModal = () => {
        setAddItemModalOpen(true)
    }

    // Close modal handler
    const closeAddItemModal = () => {
        setAddItemModalOpen(false)
    }


    // Snackbar Section
    // Snackbar Close Handler
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

    return (
        <Fragment>
            {/* Add contact item modal */}
            <ModalAll open={addItemModalOpen} close={closeAddItemModal}>
                <AddItem setOpenSnackbar={setOpenSnackbar} setSnackbarMsg={setSnackbarMsg} setSnackbarVariant={setSnackbarVariant} setAddItemModalOpen={setAddItemModalOpen} />
            </ ModalAll>

            <Snackbar
                open={openSnackbar}
                autoHideDuration={5000}
                onClose={handleSnackbarClose}
                action={snackbarAction}
            >
                <Alert onClose={handleSnackbarClose} severity={snackbarVariant ? snackbarVariant : "success"} variant="filled" sx={{ width: '100%' }}>
                    {snackbarMsg}
                </Alert>
            </Snackbar>

            <CssBaseline />
            <Container fixed>
                <Box sx={{ bgcolor: '#cfe8fc', height: '80vh', marginTop: "15vh", padding: "20px 200px" }}>
                    <Box>
                        <Button sx={{ float: "right", marginBottom: "20px" }} onClick={() => addContactItem()} variant="contained"><AddIcon /> Add Contacts</Button>
                    </Box>
                    <ContactItems setOpenSnackbar={setOpenSnackbar} setSnackbarMsg={setSnackbarMsg} setSnackbarVariant={setSnackbarVariant} />
                </Box>
            </Container>
        </Fragment>
    );
};

export default Home;