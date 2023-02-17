import React, { useState } from "react";
import "./style.scss";

export default function Reviews(props) {
  const { reviews, companyName, customColor } = props;
  const [currentReview, setCurrentReview] = useState(0);

  const handleRight = () => {
    if (currentReview < reviews.length - 1) {
      setCurrentReview(currentReview + 1);
    }
  };

  const handleLeft = () => {
    if (currentReview > 0) {
      setCurrentReview(currentReview - 1);
    }
  };

  const handleClick = (direction) => {
    direction === "right" ? handleRight() : handleLeft();
  };

  return (
    <ReviewContainer
      handleClick={handleClick}
      companyName={companyName}
      reviews={reviews}
      currentReview={currentReview}
      customColor={customColor}
    ></ReviewContainer>
  );
}

const ReviewContainer = (props) => {
  const { handleClick, companyName, reviews, currentReview, customColor } =
    props;

  const determineClass = (index) => {
    return currentReview === index ? "center" : "hide";
  };

  return (
    <section className="reviews">
      <p className="reviews-title">{`Reviews for ${companyName}`}</p>
      <div
        className="review-container"
        style={{ backgroundColor: customColor }}
      >
        <div className="border top-left-border"></div>
        <p
          className={`chevron${currentReview === 0 ? " chevron-disabled" : ""}`}
          onClick={() => handleClick("left")}
        >
          &lsaquo;
        </p>
        <div className="animation-container">
          {reviews.map((review, index) => {
            const { content } = review;
            return (
              <Review
                content={content}
                key={index}
                determineClass={() => determineClass(index)}
              ></Review>
            );
          })}
        </div>
        <p
          className={`chevron${
            currentReview < reviews.length - 1 ? "" : " chevron-disabled"
          }`}
          onClick={() => handleClick("right")}
        >
          &rsaquo;
        </p>
        <div className="border bottom-right-border"></div>
      </div>
      {false && <button>Leave a review</button>}
    </section>
  );
};

const Review = (props) => {
  const { content, determineClass } = props;
  return (
    <div className={`review ${determineClass()}`}>
      <img
        alt="quotation mark"
        className="quote-mark top-quote-mark"
        src={require("../../assets/images/top-quote-mark.png")}
      />
      <p>{content}</p>
      <img
        alt="quotation mark"
        className="quote-mark bottom-quote-mark"
        src={require("../../assets/images/bottom-quote-mark.png")}
      />
    </div>
  );
};
