import React from 'react'


const CommunityPost = ({ post }) => {
    return (
        <div className='w-full rounded-lg border h-[250px] border-backgroundv3 bg-backgroundv2 xxl:h-[300px] flex flex-col overflow-hidden'>
            <div className='h-[150px] xxl:h-[200px] w-full bg-backgroundv2 flex justify-center items-center'>
                <div className='h-[100px] w-[100px] overflow-hidden'>
                    <img
                        src={"/images/cat1.png"}
                        width={247}
                        height={247}
                        alt='logo'
                        className="h-full w-full object-cover object-center"
                    />
                </div>
            </div>
            <div className='flex-shrink-0 w-full h-[100px] p-3 bg-backgroundv1'>
                <h1 className='text-20  font-semibold mb-1 text-textPrimary truncate'>title</h1>
                <h4 className='text-12  mb-1 text-textGray truncate'>description</h4>
                <h1 className='text-14 text-textPrimary'>likes</h1>
            </div>
        </div>
    )
}

export default CommunityPost