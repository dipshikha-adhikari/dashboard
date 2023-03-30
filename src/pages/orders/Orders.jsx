import React from 'react'
import { orderColumns, orderData } from '../../components/utils/data'
import Table from '../../components/table/Table'
const Orders = () => {
  return (
    <div className='orders' style={{padding:'10px'}}>
<h2 className="heading">Orders</h2>
<div className="table">
<Table data={orderData} columns={orderColumns}/>

</div>
    </div>
  )
}

export default Orders