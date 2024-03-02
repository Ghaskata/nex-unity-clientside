import React from "react";
import "../../pages/front/css/EventPage.css";

const EventCard = () => {
  return (
    <div class="event-card-wrap ">
      <a href="#" class="event-card !m-0 !bg-backgroundv1 border border-backgroundv3">
        <img
          src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=280&dpr=2"
          title=""
          class="event-card-img"
        />
        <div class="event-header flex gap-2">
          <div class="event-date flex-shrink-0 p-2 border border-backgroundv3">
            <span class="event-month">FEB</span>
            <div class="bg-gray">
              <h4 class="event-day text-20">22</h4>
            </div>
          </div>
          <div className="h-full flex justify-center">
            <h3 class="text-textPrimary font-semibold text-24">
              Artificial Intelligence
            </h3>
          </div>
        </div>
        <div class="card-speakers">
          <div class="speaker-circle">
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
              alt=""
              data-name="Calvin Graves"
              data-role="CEO"
            />
          </div>

          <div class="speaker-circle">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
              alt="Jane Smith - Product Designer"
              data-name="Jane Smith"
              data-role="Product Designer"
            />
          </div>
          <div class="speaker-circle">
            <p class="speaker-last"> +2 </p>
          </div>

          <div class="speaker-details">
            {/* <!-- <h3 class="speaker-name">Jane Smith</h3>
                <p class="speaker-role">Product Designer</p> --> */}
            <button className="!bg-blueMain"> Apply </button>
          </div>
        </div>
      </a>
    </div>
  );
};

export default EventCard;
