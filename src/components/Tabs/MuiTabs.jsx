import { Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import TabPanels from './TabPanels'

function MuiTabs() {

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {

    setValue(newValue)

  }


  return (
    <div className='container'>

      <Tabs value={value} onChange={handleChange}>

        <Tab label="Products" />

        <Tab label="Users" />

        <Tab label="Categories" />


      </Tabs>

      <TabPanels value={value} index={0}>
        <div>
          <div>
            <h5>My Proucts</h5>
            <h6>Product Name:Lorem</h6>
            <p>Description:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, sapiente!</p>

          </div>
          <div>
            <h5>My Proucts</h5>
            <h6>Product Name:Lorem</h6>
            <p>Description:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, sapiente!</p>

          </div>
          <div>
            <h5>My Proucts</h5>
            <h6>Product Name:Lorem</h6>
            <p>Description:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos, sapiente!</p>

          </div>
        </div>
      </TabPanels>
      <TabPanels value={value} index={1}>
        <div>
          <div>
            <h5>My Users</h5>
            <h6>Name:Lorem</h6>
            <p>Email:test@m.com</p>

          </div>
          <div>
            <h5>My Users</h5>
            <h6>Name:Lorem1</h6>
            <p>Email:test@m.com</p>

          </div>
          <div>
            <h5>My Users</h5>
            <h6>Name:Lorem2</h6>
            <p>Email:test@m.com</p>

          </div>
        </div>
      </TabPanels>
      <TabPanels value={value} index={2}>
        <div>
          <div>
            <h5>My categories</h5>
            <h6>Name:Lorem</h6>


          </div>
          <div>
            <h5>My Users</h5>
            <h6>Name:Lorem 1</h6>


          </div>
          <div>
            <h5>My Users</h5>
            <h6>Name:Lorem 1</h6>


          </div>
        </div>
      </TabPanels>

    </div>
  )
}

export default MuiTabs