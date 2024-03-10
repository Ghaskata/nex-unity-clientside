import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/Select'
import React, { FC, SetStateAction, useRef, useState } from 'react'
import { LayoutGrid } from 'lucide-react'



const statusList = ["All", "public", "private"]

const StatusFilter = ({ selectedStatus, setselectedStatus }) => {
    return (
        <Select onValueChange={(e) => setselectedStatus(e)} value={selectedStatus}>
            <SelectTrigger className="w-full !border border-backgroundv3 focus:border focus:border-backgroundv3   text-textPrimary font-popins text-12 lg:text-14 bg-backgroundv2 rounded-lg py-3 px-3 h-12 ">
                <div className='flex gap-2 items-center text-textPrimary'>
                    <h2>Status : </h2>
                    <SelectValue className='capitalize text-textPrimary ' />
                </div>
            </SelectTrigger>
            <SelectContent className='text-12 !bg-backgroundv2'>
                {
                    statusList?.map((item,index) => (
                        <SelectItem value={item} key={index} className='capitalize text-textPrimary hover:border-0 hover:outline-none focus:outline-none focus:border-none hover:bg-lightGray'>{item}</SelectItem>
                    ))
                }
            </SelectContent>
        </Select>

    )
}

export default StatusFilter