import React from 'react';

const ReviewList = ({ reviews, deleteReview }) => {
  return (
    <ul className="list-group">
      {reviews.map((review, index) => (
        <li key={index} className="list-group-item">
          <div className="d-flex justify-content-between">
            <div>
              <h5>{review.title}</h5>
              <p>{review.description}</p>
            </div>
            <div>
              <span>Rating: {review.rating}</span>
              <button
                type="button"
                className="btn btn-danger ms-2"
                onClick={() => deleteReview(index)}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;