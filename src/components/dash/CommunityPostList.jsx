import React from 'react'
import CommunityPost from './CommunityPost'


const CommunityPostList = ({CommunityPostList}) => {
    return (
        <div className='bg-backgroundv1 text-textPrimary rounded-lg border p-5 font-popins border-backgroundv3'>
            <h2 className='text-20 font-semibold text-textPrimary'>Posts By Community</h2>
            <div className='py-5 grid grid-cols-1 xsm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 gap-5'>
                    {
                        CommunityPostList
                        ?.slice()
                        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                        .map((item,index)=>(
                            <CommunityPost  key={index}  post={item}/>
                        ))
                    }
            </div>  
        </div>
    )
}

export default CommunityPostList