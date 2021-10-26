import React from 'react';
import { Button, InputAdornment, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';

// Modal Style
const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
    background: "#fff"
};

const AddItem = ({ open, close }) => {

    return (
        <Modal
            open={open}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Add a contact
                </Typography>
                <br />
                <form className="addItemForm">
                    <TextField
                        label="Name"
                        name="name"
                        type="text"
                        className="addItemName"
                        id="outlined-size-small"
                        size="small"
                        fullWidth
                    />
                    <br />
                    <br />
                    <div>
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            className="addItemEmail"
                            id="outlined-size-small"
                            size="small"
                            sx={{ width: "49%", marginRight: "2%" }}

                        />
                        <TextField
                            label="Phone"
                            name="phone"
                            type="phone"
                            className="addItemPhone"
                            id="outlined-size-small"
                            size="small"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+880</InputAdornment>,
                            }}
                            sx={{ width: "49%" }}

                        />
                    </div>
                    <Box sx={{ marginTop: "30px" }}>
                        <Button variant="contained">Save</Button>
                    </Box>
                </form>
            </Box>
        </Modal>
    );
};

export default AddItem;