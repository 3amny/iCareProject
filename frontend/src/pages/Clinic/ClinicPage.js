import { useDispatch, useSelector } from "react-redux";
import Wrapper from "./Wrapper.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getClinicById } from "features/Admin/Clinic/getAll/allClinicsSlice.js";

import { ClinicProfile } from "shared/Profile/index.js";
import { ReviewSection } from "widgets/ReviewSection/ReviewSection.js";
import { createReview, updateReview } from "features/Reviews/reviewSlice.js";

const initialState = {
  comment: "",
  rating: 0,
};

const ClinicPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useSelector((store) => store.review);
  useEffect(() => {
    dispatch(getClinicById(id));
  }, [id]);

  const { isLoading, currentClinic } = useSelector((store) => store.allClinics);
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
      createReview({ subject: "clinics", subjectId: id, comment, rating })
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
          subject: "clinics",
          subjectId: id,
          reviewId: editReviewId,
          comment,
          rating,
        })
      );
    }
  };

  if (isLoading === true || currentClinic === null) {
    return <h5>Loading...</h5>;
  }
  return (
    <Wrapper>
      <div className="container">
        <ClinicProfile currentClinic={currentClinic} />
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
export default ClinicPage;
