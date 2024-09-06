import { Skeleton } from '@mui/material'
import React, { useEffect, useState } from 'react'

function MuiSceleton() {

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },[2000])
    },[])

    return (
        <div className='container'>
            {
                loading ? <Skeleton variant='rounded' width={250} height={350} sx={{ marginTop: "70px", }} animation="wave" /> :
                <div id="webcrumbs"> 
                <div className=" bg-neutral-50 rounded-lg shadow-lg p-4 text-center items-center" style={{width:"300px",height:"auto",marginTop:"70px"}}>
                  <img 
                    src="https://tools-api.webcrumbs.org/image-placeholder/100/100/user/1" 
                    alt="User Profile" 
                    className=" object-cover rounded-full mb-4"
                    style={{width:"250px"}}
                  />
                  <h2 className="font-title text-2xl mb-2">John Doe</h2>
                  <p className="text-gray-600 text-center mb-4">Software Engineer at XYZ Corp.</p>
                  <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark">
                    Follow
                  </button>
                  <div className="mt-4 d-flex justify-content-center gap-4">
                    <div className="d-block text-center items-center ">
                      <div className="font-semibold text-lg">150</div>
                      <div className="text-gray-600">Posts</div>
                    </div>
                    <div className="d-block text-center items-center">
                      <div className="font-semibold text-lg">300</div>
                      <div className="text-gray-600">Followers</div>
                    </div>
                    <div className="d-block text-center items-center">
                      <div className="font-semibold text-lg">180</div>
                      <div className="text-gray-600">Following</div>
                    </div>
                  </div>
                </div> 
            </div>

            }
        </div>
    )
}

export default MuiSceleton