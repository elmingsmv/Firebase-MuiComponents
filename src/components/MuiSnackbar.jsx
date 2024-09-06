import { Button, IconButton, Snackbar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'

function MuiSnackbar() {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const action = (
        <>
            <IconButton onClick={handleClose}>
            <CloseIcon  color='info'/>
            </IconButton>
        </>

    )

    return (
        <div className='container'>

            <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: "50vh",marginTop:"200px" }}>
                <Button onClick={handleClick} color='success' variant='contained'>Open Snackbar</Button>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Message"
                action={action}
                anchorOrigin={{vertical:'top',horizontal:'right'}}
            />
        </div>
    )
}

export default MuiSnackbar