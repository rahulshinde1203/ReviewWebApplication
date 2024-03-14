import React, { useState } from 'react';

const AddReviewForm = ({ addReview }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !rating) return;
    addReview({ title, rating, description });
    setTitle('');
    setRating('');
    setDescription('');
  };

  const handleReset = () => {
    setTitle('');
    setRating('');
    setDescription('');
  };

  return (
    <div>
      <h2>Add Your Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title<span>*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating<span>*</span>
          </label>
          <input
            type="number"
            className="form-control"
            id="rating"
            value={rating}
            min="1"
            max="5"
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary me-2">
          Submit
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleReset}>
          Reset
        </button>
      </form>
    </div>
  );
};

export default AddReviewForm;
