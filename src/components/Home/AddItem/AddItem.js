import React, { useEffect, useState } from 'react';
import { Button, InputAdornment, Snackbar, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const AddItem = ({ setOpenSnackbar, setSnackbarMsg, setSnackbarVariant, setAddItemModalOpen }) => {

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    // const [uniqueId, setUniqueId] = useState("")

    const contacts = useSelector(state => state)
    const dispatch = useDispatch()

    // Generate a unique id and set in state
    const uniqueId = () => {
        return (((1 + Math.random()) * 0x100320989482093400) | 0).toString(16).substring(1)
    }

    // Create contact item
    const newContactItem = () => {
        if (name && email || phone) {
            if (uniqueId().length > 1 && contacts.find(dt => uniqueId() === dt.id)) {
                return null
            } else {
                const numForList = contacts.length + 1
                return ({
                    id: uniqueId(),
                    name,
                    email,
                    phone,
                    phoneCountry: "bangladesh",
                    numOffList: numForList,
                })
            }
        } else {
            return null
        }
    }


    const handleAddContactItem = (e) => {
        if (name && email || phone) {
            if (email && phone) {
                if (contacts.find(dt => phone === dt.phone)) {
                    setOpenSnackbar(true)
                    setSnackbarMsg("This phone is exist. Please add another phone.")
                    setSnackbarVariant("error")
                } else {
                    confirmSubmit()
                }
            } else if (phone) {
                if (contacts.find(dt => phone === dt.phone)) {
                    setOpenSnackbar(true)
                    setSnackbarMsg("This phone is exist. Please add another phone.")
                    setSnackbarVariant("error")
                } else {
                    confirmSubmit()
                }
            } else if (email) {
                if (contacts.find(dt => email === dt.email)) {
                    setOpenSnackbar(true)
                    setSnackbarMsg("This phone is exist. Please add another phone.")
                    setSnackbarVariant("error")
                } else {
                    confirmSubmit()
                }
            } else {

            }
        }
        e.preventDefault()
    }

    // This function use for send item data in state
    const confirmSubmit = () => {
        if (newContactItem()) {
            dispatch({ type: "ADD_ITEM", payload: newContactItem() })
            setOpenSnackbar(true)
            setSnackbarMsg("Contact item added.")
            setSnackbarVariant("success")
            setAddItemModalOpen(false)
        }
    }

    return (
        <>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Add a contact
            </Typography>
            <br />
            <form className="addItemForm" onSubmit={handleAddContactItem}>
                <TextField
                    label="Name"
                    name="name"
                    type="text"
                    className="addItemName"
                    id="outlined-size-small"
                    size="small"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={true}
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
                        value={email}
                        sx={{ width: "49%", marginRight: "2%" }}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Phone"
                        name="phone"
                        type="number"
                        className="addItemPhone"
                        id="outlined-size-small"
                        size="small"
                        value={phone}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">+880</InputAdornment>,
                        }}
                        sx={{ width: "49%" }}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <Box sx={{ marginTop: "30px" }}>
                    <Button variant="contained" type="submit" >Save</Button>
                </Box>
            </form>
        </>
    );
};

export default AddItem;