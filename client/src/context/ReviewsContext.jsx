import React, { createContext, useState, useEffect } from 'react';

const ReviewsContext = createContext();

export const ReviewsContextProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/reviews')
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.log(error));
    }, []);

    return (
        <ReviewsContext.Provider value={{ reviews }}>
            {children}
        </ReviewsContext.Provider>
    )
}
export default ReviewsContext