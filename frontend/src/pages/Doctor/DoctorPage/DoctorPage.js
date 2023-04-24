import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./Wrapper.js";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDoctorById } from "features/Admin/Doctor/getAll/allDoctorsSlice.js";
import { ReviewSection } from "widgets/ReviewSection/ReviewSection.js";
import { createReview, updateReview } from "features/Reviews/reviewSlice.js";
import { DoctorProfile } from "shared/Profile/index.js";

const initialState = {
  comment: "",
  rating: 0,
};

const DoctorPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useSelector((store) => store.review);
  useEffect(() => {
    dispatch(getDoctorById(id));
  }, [id]);

  const { isLoading, currentDoctor } = useSelector((store) => store.allDoctors);
  const { comment, rating, editReviewId, reviews, isEditing, Loading } =
    useSelector((store) => store.review);
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };
  const handleRatingChange = (value) => {
    const name = "rating";
    setValues({ ...values, [name]: value });
  };
  const onCreateSubmit = (e) => {
    e.preventDefault();
    const { comment, rating } = values;
    if (!comment || !rating) {
      toast.error("Please fill out all fields");
      return;
    }

    dispatch(
      createReview({ subject: "doctors", subjectId: id, comment, rating })
    );
    setValues(initialState);
  };
  const onUpdateSubmit = (e) => {
    e.preventDefault();
    if (!comment || !rating) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isEditing) {
      dispatch(
        updateReview({
          subject: "doctors",
          subjectId: id,
          reviewId: editReviewId,
          comment,
          rating,
        })
      );
    }
  };

  if (isLoading === true || currentDoctor === null) {
    return <h5>Loading...</h5>;
  }

  return (
    <Wrapper>
      <div className="container">
        <DoctorProfile currentDoctor={currentDoctor} />
        <div className="review">
          <h4 className="comments-title">Comments</h4>
          <ReviewSection
            pageId={id}
            initialState={initialState}
            Loading={Loading}
            reviews={reviews}
            values={values}
            handleInput={(e) => handleChange(e)}
            onRatingChange={(value) => handleRatingChange(value)}
            handleSubmit={(e) => onCreateSubmit(e)}
            handleUpdateSubmit={(e) => onUpdateSubmit(e)}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default DoctorPage;
