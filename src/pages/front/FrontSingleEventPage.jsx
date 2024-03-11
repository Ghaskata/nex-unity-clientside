import React from "react";
import './css/SingleEvent.css'

const FrontSingleEventPage = () => {
  return (
    <div className="card-wrapper w-full container">
      <div className="card">
        {" "}
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img
                src="./close-up-people-working-as-team.jpg"
                alt="shoe image"
              />
            </div>
          </div>
          <div className="img-select">
            <div className="img-item">
              <a href="#" data-id="1">
                <img src="./pexels-fauxels-3228689.jpg" alt="shoe image" />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="2">
                <img src="./businessman-pointing.jpg" alt="shoe image" />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="3">
                <img
                  src="./friendly-caucasian-afro-american-business-people-shaking-hands.jpg"
                  alt="shoe image"
                />
              </a>
            </div>
            <div className="img-item">
              <a href="#" data-id="4">
                <img src="./businessman-pointing.jpg" alt="shoe image" />
              </a>
            </div>
          </div>
        </div>
        <div className="product-content">
          <h2 className="product-title">Event Name</h2>
          <a href="#" className="product-link">
            visit event
          </a>

          <div className="product-price">
            <p className="last-price">
              Event Date: <span>01-01-2024</span>
            </p>
            <p className="new-price">
              Event Time: <span> 11:00 PM </span>
            </p>
          </div>

          <div className="product-detail">
            <h2>about this event: </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              eveniet veniam tempora fuga tenetur placeat sapiente architecto
              illum soluta consequuntur, aspernatur quidem at sequi ipsa!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.
            </p>
          </div>

          <div className="purchase-info">
            <i className="bi bi-geo-alt-fill"></i> Location
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontSingleEventPage;
