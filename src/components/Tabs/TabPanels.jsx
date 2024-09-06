import React from 'react'

function TabPanels(props) {

const {value,index,children}=props


  return (
    <div>
        {value===index &&  <div>{children}</div> }
    </div>
  )
}

export default TabPanels