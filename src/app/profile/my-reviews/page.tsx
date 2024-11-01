import React from 'react'
import { TfiEraser } from 'react-icons/tfi'
import ReviewCard from "../../_components/cards/ReviewCard"
import ReviewedCard from "../../_components/cards/ReviewedCard"
import ReviewPopUpCard from "../../_components/cards/ReviewPopUpCard"

function MyReviews() {
  return (
    <div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold ">
           My Reviews
          </h1>
          <button className="text-gray-500 hover:text-gray-700 flex justify-center items-center gap-2 text-[14px]">
          <TfiEraser />
          Clear All
          </button>
        </div>
        <ReviewCard />
        <ReviewedCard/>
        <ReviewPopUpCard/>
    </div>
  )
}

export default MyReviews