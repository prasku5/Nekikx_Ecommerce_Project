// "use client";
// import React, { useEffect, useState } from "react";
// import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// import { Rating } from "react-simple-star-rating";
// import { IoPersonCircleOutline } from "react-icons/io5";
// import { toast } from "react-toastify";
// import axios from "axios";


// const ProductReview = ({
//     token,
//     setRating,
//     productId,
//     setgetLatestProductUpdate,
// }) => {

//   const [reviews, setReviews] = useState([]);
//   const [updateReviews, setUpdateReviews] = useState(false);
//   const [isReviewAdded, setIsReviewAdded] = useState(false);
//   const [review, setReview] = useState({
//     stars: 0, // Initialize to your desired default value
//     reviewText: "",
//     reviewerName: "", // Add reviewer name field
//   });

//   const handleReviewerName = ({ target: { value } }) => {
//     setReview({ ...review, reviewerName: value });
//   };

//   const handleRating = (newRating) => {
//     setReview({ ...review, stars: newRating });
//   };

//   const handleReviewText = ({ target: { value } }) => {
//     setReview({ ...review, reviewText: value });
//   };

//   useEffect(() => {
//     const getReviews = async () => {
//       try {
//         const headerConfig = token
//           ? {
//               headers: {
//                 Authorization: `bearer ${token}`,
//               },
//             }
//           : {};
//         const { data: { data, hasReviewAdded } = [] } = await axios.get(
//           `http://localhost:8080/reviews/product/${productId}`,
//           headerConfig
//         );

//         let averageRating =
//           data.reduce((acc, value) => {
//             return acc + Number(value.stars);
//           }, 0) / data.length;
//         averageRating = Number(
//           averageRating > 0 ? averageRating.toFixed(1) : averageRating
//         );
//         setRating({ stars: averageRating, count: data.length });
//         setReviews(data.reverse());
//         setIsReviewAdded(hasReviewAdded);
//         setUpdateReviews(false);
//         setgetLatestProductUpdate(true);
//         setReview({});
//       } catch (error) {
//         console.log({ error });
//       }
//     };
//     getReviews();
//   }, [productId, setRating, setgetLatestProductUpdate, token, updateReviews]);

//   const handleSubmit = async () => {
//     if (!review.reviewText || !review.stars) {
//       toast.error("Both review stars and text are required*", {
//         hideProgressBar: true,
//       });
//       return;
//     }
//     if (review.reviewerName && review.reviewText && review.stars && productId) {
//       try {
//         axios.post(
//           `http://localhost:8080/reviews`,
//           {
//             ...review,
//             productId,
//           },
//           {
//             headers: {
//               Authorization: `bearer ${token}`,
//             },
//           }
//         );
//         setUpdateReviews(true);
//       } catch (error) {
//         toast.error("There is an error occured!", {
//           hideProgressBar: true,
//         });
//         console.log({ error });
//       }
//     } else {
//       toast.error("There is an error occured!", {
//         hideProgressBar: true,
//       });
//     }
//   };

//   return (
//     <div className="product-reviews">
//       {isReviewAdded || !token ? null : (
//         <div>
//           <h2>Create review:</h2>
//           <Form>
//             <FormGroup>
//                 <Label for="reviewerName">Your Name</Label>
//                 <Input
//                     type="reviewText"
//                     name="reviewerName"
//                     id="reviewerName"
//                     onChange={handleReviewerName}
//                 />
//             </FormGroup>
//             <FormGroup>
//               <Label for="exampleText">Overall rating</Label>
//               <div>
//                 <Rating
//                   onClick={handleRating}
//                   initialValue={review.stars}
//                   size={24}
//                 />
//               </div>
//             </FormGroup>
//             <FormGroup>
//               <Label for="reviewText">Leave your review here</Label>
//               <Input
//                 type="textarea"
//                 name="reviewText"
//                 id="reviewText"
//                 onChange={handleReviewText}
//               />
//             </FormGroup>
//             <Button color="info" onClick={handleSubmit}>
//               Submit
//             </Button>
//           </Form>
//         </div>
//       )}

//       {reviews.length ? (
//         <div className="reviews">
//           <h2>Customer reviews:</h2>
//           {reviews.map(({ reviewText, stars, username, createdAt }) => (
//             <div className="review">
//               <div className="customer">
//                 <IoPersonCircleOutline className="icon" />
//                 <span>{username}</span>
//               </div>
//               <Rating size={24} readonly initialValue={stars} />
//               <p>Reviewed at: {new Date(createdAt).toLocaleDateString()}</p>
//               <p>{reviewText}</p>
//             </div>
//           ))}
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default ProductReview;


//verion 2
"use client"
import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import { IoPersonCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import axios from "axios";

const ProductReview = ({ productId}) => {
  const [reviews, setReviews] = useState([]);
  const [updateReviews, setUpdateReviews] = useState(false);
  const [isReviewAdded, setIsReviewAdded] = useState(false);
  const [review, setReview] = useState({
    stars: 0,
    reviewText: "",
    reviewerName: "",
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

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data: { data, hasReviewAdded } = [] } = await axios.get(
          `http://localhost:8080/reviews/product/${productId}`
        );

        let averageRating =
          data.reduce((acc, value) => {
            return acc + Number(value.stars);
          }, 0) / data.length;
        averageRating = Number(
          averageRating > 0 ? averageRating.toFixed(1) : averageRating
        );
        setReviews(data.reverse());
        setIsReviewAdded(hasReviewAdded);
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
        console.log(review);
      try {
        axios.post(`http://localhost:8080/reviews`, {
          ...review,
          productId,
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
        <h2>Create review:</h2>
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
            <Label for="exampleText">Overall rating</Label>
            <Rating
              onClick={handleRating}
              initialValue={review.stars}
              size={24}
              className="d-flex"
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
        <h2>Customer reviews:</h2>
        {reviews.map(({ reviewText, stars, reviewerName, createdAt }) => (
          <div className="review" style={{ border: "1px solid black" }}>
            <div className="customer">
              <IoPersonCircleOutline className="icon" />
              <span>{reviewerName}</span>
            </div>
            <Rating
              size={24}
              readonly
              initialValue={stars}
              className="d-flex"
            />
            <p>Reviewed at: {new Date(createdAt).toLocaleDateString()}</p>
            <p>{reviewText}</p>
          </div>
        ))}
      </div>
    ) : null}
  </div>
);
};
export default ProductReview;
