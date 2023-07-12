import { DatePicker } from 'antd'
import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Helper from 'views/app-views/Helper'
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const columns = [
  {
    title: 'Sr No',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Virtual Card',
    dataIndex: 'front',
    key: 'front',
    render:(img)=>{
      return<><img style={{width:'80px'}} src={img} alt='...'/></>
    }
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
  },
  {
    title: 'Uploaded On',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render:(date)=>{
      return <>{moment(date).format("DD MMM YYYY, hh:mm:ss A")}</>
    }
  },
  {
    title: 'Action',
    dataIndex: 'address',
    key: 'address',
  },
]
const ViewCardHis = () => {
  const [cardsList, setCardsList] = useState([])
  const getCards = async () => {
    const res1 = await axios.get(`https://api.stntinternational.com/api/virtual-cards`,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
    setCardsList(res1.data.data);
  }
  useEffect(() => {
    getCards()
  }, [])
  
  return (
    <div>
      <div>
        <DatePicker/>
      </div>
      <div className='mt-3'>
      <Helper checkbox={false} clients={cardsList} attribiue={columns} />
      </div>
    </div>
  )
}

export default ViewCardHis