import { CircularProgress, LinearProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'

function MuiProgres() {

    const [progress, setProgress] = useState(0)


    useEffect(() => {

        const interval = setInterval(() => {
            setProgress((prevalue) => {
                if (prevalue >= 100) {
                    return 0
                }
                const rnd = Math.floor(Math.random() * 10)
                return Math.min(prevalue + rnd,100)
            })

        }, 500)
        return () => {
            clearInterval(interval)
        }

    }, [])


    return (
        <div className='container d-flex flex-column justify-content-center align-items-center ' style={{ marginTop: "150px", gap: "90px" }}>
            <CircularProgress />
            <CircularProgress color='success' />
            <div style={{ width: "260px" }}>
                <LinearProgress />

            </div>
            <div style={{ width: "260px" }}>
                <LinearProgress variant='determinate' value={progress} />

            </div>

        </div>
    )
}

export default MuiProgres