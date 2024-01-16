import React from 'react'
import { reviews } from '../../reviews'
import ReviewCard from '../ReviewCard'

const Reviews = () => {

    return (
        <div className='review-block'>
            <div className="review-container container w-100">
                <div className="w-100 d-flex justify-content-center">
                    <h2 className='text-center review-headline'>О НАС ГОВОРЯТ</h2>
                </div>
                <div className="review-scrollable">
                    {
                        reviews && reviews.map(item => <ReviewCard item={item} key={item.id} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Reviews