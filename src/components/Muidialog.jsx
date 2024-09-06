import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React, { useState } from 'react'

function Muidialog() {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    const action = (e) => {
        alert(`Cavab ${e}`)
        setOpen(false)
    }

    return (
        <div className='container'>

            <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: "50vh", marginTop: "200px" }}>
                <Button color='success' variant='contained' onClick={handleClick}>View Modal</Button>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Bagla</DialogTitle>
                <DialogContent>
                    <DialogContentText>Bu pencereni baglamaq istediyinden eminsen mi?</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => action("Xeyir")}>Xeyir</Button>
                    <Button onClick={() => action("Beli")}>Beli</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Muidialog