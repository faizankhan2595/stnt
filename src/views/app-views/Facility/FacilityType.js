import { Menu, Modal } from 'antd'
import { Export, History } from 'assets/svg/icon'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import CustomIcon from 'components/util-components/CustomIcon'
import React from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './FacilityType.css'
import { DeleteOutlined, EyeOutlined } from '@ant-design/icons'
import { facilityList } from '../data'
import Helper from '../Helper'



export default function FacilityType() {


    const param = useParams()
    const [facilityTypeData, setFacilityTypeData] = useState(facilityList)


    const onDeleteData = (record, dataSet, Id) => {
        // console.log(Id)
        // console.log(record)
        Modal.confirm({
            title: "Are you sure, you want to delete this members record ?",
            okText: "Yes",
            okType: "danger",
            onOk: () => {
                dataSet((pre) => {
                    return pre.filter((member) => member[Id] !== record[Id])
                })
            }
        })
    }

    const membershipBookingColumns = [
        {
            title: 'Facility Id',
            dataIndex: 'facility_id',
        },
        {
            title: "Facility Type",
            dataIndex: 'facility_type',
            render: text => {
                return <p className='font-weight-bold text-dark' >{text}</p>
            }
        },
        {
            title: "Business Hrs",
            dataIndex: 'business_hrs',
        },
        {
            title: "No of Bookings",
            dataIndex: 'no_of_bookings',
        },
        {
            title: "Total Revenue",
            dataIndex: 'total_revenue',
        },
        {
            title: "Status",
            dataIndex: 'status',
            render: text => {
                return <p className={`${text !== "Available" ? 'text-danger membershipPaymentPending' : "text-success membershipPaymentPaid"} font-weight-semibold`}>{text}</p>
            }
        },
        {
            title: "Action",
            // dataIndex: 'action',
            render: (record) => {
                return (
                    <>
                        <EllipsisDropdown menu={
                            <Menu>
                                <Menu.Item>
                                    <Link to={`${param.facility_types}/add_new`} > <EyeOutlined className='mr-2 ' />View/Edit Details</Link >
                                </Menu.Item>
                                <Menu.Item>
                                    <span onClick={() => onDeleteData(record, setFacilityTypeData, 'facility_id')}> <DeleteOutlined className='mr-2 ' />Delete</span>
                                </Menu.Item>
                            </Menu>
                        } />

                    </>
                );
            },
        },
    ]

    return (
        <div>
            <div className='d-flex justify-content-between mb-3'>
                <div className='membershipPlanTableSearchFilter'>

                    <form className='memberDetailSearch'>
                        <CustomIcon svg={History} /> <input className='memberDetailSerachInput' placeholder='Search' type="text" name="search" id="" />
                    </form>
                    <div className='memberDetailFilter'>
                        <CustomIcon svg={History} /> <span className='memberDetailFilterText'> Filters</span>
                    </div>
                    <div className='memberDetailFilter'>
                        <CustomIcon svg={Export} /> <span className='memberDetailFilterText'> Export</span>
                    </div>
                </div>
                <Link to={`${param.facility_types}/add_new`} className='bg-info d-flex align-items-center rounded text-white font-weight-semibold px-4'>Add New</Link>
            </div>
            <div>
                <Helper clients={facilityTypeData} attribiue={membershipBookingColumns} />
            </div>

        </div>
    )
}
