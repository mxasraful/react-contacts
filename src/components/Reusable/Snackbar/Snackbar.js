import React from 'react';

const Snackbar = ({ open, msg }) => {

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState(null)

    // Snackbar Open Handler
    if (open) {
        setOpenSnackbar(true);
    } else {
        setOpenSnackbar(false)
    }

    // Set message data in state
    if (msg) {
        setSnackbarMsg(msg)
    } else {
        setSnackbarMsg(null)
    }

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
        <Snackbar
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
            message={snackbarMsg}
            action={snackbarAction}
        />
    );
};

export default Snackbar;