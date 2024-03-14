import React, { useState } from 'react';
import './App.css';
import AddReviewForm from './components/AddReviewForm';
import ReviewList from './components/ReviewList';

function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  const deleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <AddReviewForm addReview={addReview} />
        </div>
        <div className="col-md-6">
          <h2>Reviews</h2>
          <ReviewList reviews={reviews} deleteReview={deleteReview} />
        </div>
      </div>
    </div>
  );
}

export default App;