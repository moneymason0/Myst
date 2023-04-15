import { useContext } from "react";
import ReviewsContext from "../context/ReviewsContext";

export const UseReviewData = () => {
    const { reviews } = useContext(ReviewsContext);
    const reviewsArray = Object.values(reviews); 
    return reviewsArray;
}