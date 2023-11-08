
"use client"
import ReactStars from 'react-stars'
import { render } from 'react-dom'
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import { IoPersonCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import axios from "axios";

const ProductReview = ({ productId}) => {
  // console.log("inside the product review component and product id is", productId);
  const [reviews, setReviews] = useState([]);
  const [updateReviews, setUpdateReviews] = useState(false);
  const [isReviewAdded, setIsReviewAdded] = useState(false);
  const [review, setReview] = useState({
    stars: 0,
    reviewText: "",
    reviewerName: "",
    createdAt: new Date(),
  });


  const handleReviewerName = ({ target: { value } }) => {
    setReview({ ...review, reviewerName: value });
  };

  const handleRating = (newRating) => {
    setReview({ ...review, stars: newRating });
  };

  const handleReviewText = ({ target: { value } }) => {
    setReview({ ...review, reviewText: value });
  };

  // console.log("outside useeffect : product id is", productId);

  useEffect(() => {
     const getReviews = async () => {
      try {
        // console.log("inside the getReviews function and product id is", productId  );
        const response = await axios.get(
          `http://localhost:8080/reviews/product/${productId}`
        );

        console.log("reviews", JSON.stringify(response.data))


        // Calculate the average rating
        const totalStars = response.data.reduce((acc, review) => acc + review.stars, 0);
        // const averageRating = totalStars / 5 * response.data.length;
      
        
        // console.log("average rating", averageRating);
        // console.log("total length is", response.data.length);
        // console.log("total stars", totalStars);
        
       
        setReviews(response.data.reverse());
        setIsReviewAdded(false);
        setUpdateReviews(false);
        setReview({});
      } catch (error) {
        console.log({ error });
      }
    };
    getReviews();
  }, [productId, updateReviews]);


  const handleSubmit = async () => {
    console.log("submit button is clicked");
    if (!review.reviewText || !review.stars) {
      toast.error("Both review stars and text are required*", {
        hideProgressBar: true,
      });
      return;
    }
    if (review.reviewerName && review.reviewText && review.stars && productId) {
        console.log("inside the if statement");
        console.log("psote review", review);
      try {
        axios.post(`http://localhost:8080/reviews`, {
          ...review,
          productId
        });
        setUpdateReviews(true);
      } catch (error) {
        toast.error("There is an error occurred!", {
          hideProgressBar: true,
        });
        console.log({ error });
      }
    } else {
      toast.error("There is an error occurred!", {
        hideProgressBar: true,
      });
    }
  };

  
  return (
    <div className="product-reviews">
    {isReviewAdded ? null : (
      <div>
      <h1 style={{ fontSize: '32px' }}><strong>User reviews</strong></h1>
      <Form>
        <FormGroup className="mb-3">
          <Label for="reviewerName">Your Name</Label>
          <Input
            type="text"
            name="reviewerName"
            id="reviewerName"
            onChange={handleReviewerName}
            style={{ border: "1px solid black" }}
          />
        </FormGroup>
        <FormGroup className="mb-3">
        <Label for="exampleText" style={{ display: 'inline-block' }}>Overall rating</Label>
        <ReactStars
          count={5}
          onChange={handleRating}
          size={24}
          color2={'#ffd700'}
          style={{ display: 'inline-block' }}
        />
        </FormGroup>
        <FormGroup className="mb-3">
          <Label for="reviewText">Leave your review here</Label>
          <Input
            type="textarea"
            name="reviewText"
            id="reviewText"
            onChange={handleReviewText}
            style={{ border: "1px solid black" }}
          />
        </FormGroup>
        <Button color="info" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
    )}

    {reviews.length ? (
      <div className="reviews">
        <br />
        <h1 style={{ fontSize: '26px' }}><strong>Customer reviews:</strong></h1>
        <br />
        {reviews.map(({ reviewText, stars, reviewerName, createdAt }) => (
          <div className="review" style={{ border: "1px solid black" }}>
            <div className="customer">
             <IoPersonCircleOutline className="icon" style={{ fontSize: '25px' }} />
              <span><b>Reviewed by:  </b>{reviewerName}</span>
            </div>
            <ReactStars
              size={24}
              readonly
              value={stars}
              className="d-flex"
            />
            <p><b>Review date:</b> {new Date(createdAt).toLocaleDateString()}</p>
            <p><b>Description:</b> {reviewText}</p>
            <br />
          </div>
        ))}
        
      </div>
    ) : null}
    
  </div>
);
};
export default ProductReview;



