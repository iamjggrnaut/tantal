import React from 'react'

const ReviewCard = ({ item }) => {

    return (
        <div className='review-card'>
            <h5 className='fw-bold'>{item.name}</h5>
            <hr style={{ width: '80%', height: '2px', border: '1px solid black' }} />
            <p className="text-center">
                {item.text}
            </p>
        </div>
    )
}

export default ReviewCard