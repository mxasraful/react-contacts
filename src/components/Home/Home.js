import { Button, Container, CssBaseline, Snackbar } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddItem from './AddItem/AddItem';
import ContactItems from './ContactItems/ContactItems';

const Home = () => {

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState(null)
    const [addItemModalOpen, setAddItemModalOpen] = useState(false)


    // Handle add contact item
    const addContactItem = () => {
        openAddItemModal()
    }

    // Snackbar Section
    // Snackbar Open Handler
    const handleSnackbarClick = () => {
        setOpenSnackbar(true);
    };

    // Snackbar Close Handler
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    // Modal Section
    // Open modal handler
    const openAddItemModal = () => {
        setAddItemModalOpen(true)
    }

    // Close modal handler
    const closeAddItemModal = () => {
        setAddItemModalOpen(false)
    }

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
            <AddItem open={addItemModalOpen} close={closeAddItemModal} />

            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                message={snackbarMsg}
                action={snackbarAction}
            />
            <CssBaseline />
            <Container fixed>
                <Box sx={{ bgcolor: '#cfe8fc', height: '80vh', marginTop: "15vh", padding: "20px 200px" }}>
                    <Box>
                        <Button sx={{ float: "right", marginBottom: "20px" }} onClick={() => addContactItem()} variant="contained"><AddIcon /> Add Contacts</Button>
                    </Box>
                    <ContactItems />
                </Box>
            </Container>
        </Fragment>
    );
};

export default Home;