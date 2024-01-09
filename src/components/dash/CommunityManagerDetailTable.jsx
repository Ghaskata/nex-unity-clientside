import React from 'react'
import { cn } from '../../lib/utils'
import { PencilIcon, Trash2Icon } from 'lucide-react'


const CommunityManagerDetailTable = ({ className, data, filter, searchData = "" }) => {

    return (

        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className={cn("w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400", className)}>
                <thead className='w-full text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400'>
                    <th scope="col" className="p-5 text-center">User Photo</th>
                    <th scope="col" className="p-5 text-center">First name</th>
                    <th scope="col" className="p-5 text-center">Last name</th>
                    <th scope="col" className="p-5 text-center">email</th>
                    <th scope="col" className="p-5 text-center">mobile no</th>
                    <th scope="col" className="p-5 text-center">Community</th>
                    <th scope="col" className="p-5 text-center">Actions</th>
                </thead>
                <tbody>
                    {

                        data?.filter((user) => {
                            if (searchData === "") {
                                return data
                            } else {
                                if (user[filter].toLowerCase().includes(searchData)) {
                                    return user[filter].toLowerCase().includes(searchData)
                                } else {
                                    
                                    return null
                                }
                            }
                        })
                            ?.map((user, index) =>
                            (
                                <tr key={index} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                                    <td className='font-medium align-middle ps-4 text-center py-3 flex justify-center items-center'>
                                        <div className='overflow-hidden h-[64px] w-[64px] rounded-full'>
                                            <img src={require(`../../assets/images/frontHero/${user.image}`)} alt="user" className='w-full h-full object-center object-cover' />
                                        </div>
                                    </td>
                                    <td className='font-medium align-middle ps-4 text-center'>{user.firstname}</td>
                                    <td className='font-medium align-middle ps-4 text-center'>{user.lastname}</td>
                                    <td className='font-medium align-middle ps-4 text-center'>{user.email}</td>
                                    <td className='font-medium align-middle ps-4 text-center'>{user.mobileno}</td>
                                    <td className='font-medium align-middle ps-4 text-center'>{user.community}</td>
                                    <td className="px-6 text-right">
                                        <span className='flex justify-center items-center gap-3'>
                                            <a href='/edit' className="font-medium flex justify-center items-center text-blue-600 dark:text-blue-500 hover:underline">
                                                <PencilIcon className='text-blue-800' />
                                            </a>
                                            <a href='/edit' className="font-medium flex justify-center items-center text-blue-600 dark:text-blue-500 hover:underline">
                                                <Trash2Icon className='text-red-800' />
                                            </a>
                                        </span>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
        </div>


    )
}

export default CommunityManagerDetailTable