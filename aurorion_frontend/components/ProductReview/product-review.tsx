
"use client"
import ReactStars from 'react-stars'
import { render } from 'react-dom'
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import { IoPersonCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import axios from "axios";
import "./product-review.css";

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

  

  const [selectedRating, setSelectedRating] = useState(0);


  useEffect(() => {
    // Update the review stars whenever selectedRating changes
    setReview((prevReview) => ({
      ...prevReview,
      stars: selectedRating,
    }));
  }, [selectedRating]);

  const handleReviewerName = ({ target: { value } }) => {
    setReview({ ...review, reviewerName: value });
  };


  const handleReviewText = ({ target: { value } }) => {
    setReview({ ...review, reviewText: value });
  };

  const [activeStarColors, setActiveStarColors] = useState(new Array(5).fill('gray'));

  const handleRatingChange = (newRating) => {
    // Reset the selectedRating to 0 and activeStarColors to all 'gray' when a review is submitted
    if (isReviewSubmitted) {
      setSelectedRating(0);
      setActiveStarColors(new Array(5).fill('gray'));
    } else {
      setSelectedRating(newRating);
      const updatedActiveStarColors = [...activeStarColors];
      for (let i = 0; i < newRating; i++) {
        updatedActiveStarColors[i] = '#ffd700';
      }
      setActiveStarColors(updatedActiveStarColors);
    }
  };


  // console.log("outside useeffect : product id is", productId);

  useEffect(() => {
     const getReviews = async () => {
      try {
        // console.log("inside the getReviews function and product id is", productId  );
        const response = await axios.get(
          `http://localhost:8080/reviews/product/${productId}`
        );

        // console.log("reviews", JSON.stringify(response.data))


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

  
  const [isReviewSubmitted, setIsReviewSubmitted] = useState(false);


  const handleSubmit = async () => {
    
    console.log("submit button is clicked");
    console.log("review before get request is after clicking submit", review);
    if (!review.reviewText || !review.stars) {
      toast.error("Both review stars and text are required*", {
        hideProgressBar: true,
      });
      return;
    }
    if (review.reviewerName && review.reviewText && review.stars && productId) {
        // console.log("inside the if statement");
        console.log(" review just before post", review);
      try {
        

        axios.post(`http://localhost:8080/reviews`, {
          ...review,
          productId
        });

        // Clear the form fields and update the reviews state
        setReview({
          stars: 0,
          reviewText: "",
          reviewerName: "",
          createdAt: new Date(),
        });
        
        setIsReviewSubmitted(true);

        setUpdateReviews(true);

        setIsReviewAdded(true);
        // Reset rating and active star colors
        setSelectedRating(0); // Reset selected rating to 0
        setActiveStarColors(new Array(5).fill('gray')); // Reset active star colors to all 'gray'

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
     <div style={{ margin: '5px' }}>
     <h1 style={{ fontSize: '26px' }}><strong>User reviews</strong></h1>
     <br />
     <Form>
       <FormGroup className="mb-3">
         <Label for="reviewerName" style={{ marginRight: '93px' }}>Your Name</Label>
         <Input
           type="text"
           name="reviewerName"
           id="reviewerName"
           value={review.reviewerName}
           onChange={handleReviewerName}
           style={{
             border: "1px solid black",
             width: '250px',
             padding: '5px',
             fontSize: '16px'
           }}
         />
       </FormGroup>
       <FormGroup className="mb-3" style={{ display: 'flex' }}>
        <Label for="exampleText" style={{ marginRight: '75px' }}>Overall rating</Label>
        <ReactStars
          count={5}
          value={selectedRating}
          onChange={handleRatingChange}
          size={24}
          activeColor={'#ffd700'}
          inactiveColor={'gray'}
          colors={activeStarColors}
          style={{ marginLeft: '10px' }}
        />
      </FormGroup>
       <FormGroup className="mb-3">
         <Label for="reviewText" style={{ marginRight: '10px' }}>Leave your review here</Label>
         <Input
           type="textarea"
           name="reviewText"
           id="reviewText"
           value={review.reviewText}
           onChange={handleReviewText}
           style={{
             border: "1px solid black",
             width: '350px',
             height: '100px',
             padding: '5px',
             fontSize: '16px'
           }}
         />
       </FormGroup>
       <br />
       <br />
       <Button className="submit-button" color="info" style={{ border: '1px solid black' }} onClick={handleSubmit}>
         Submit Review
       </Button>
     </Form>
     <br />
     {isReviewSubmitted && (
        <div className="success-message">Review submitted successfully!</div>
      )}
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



