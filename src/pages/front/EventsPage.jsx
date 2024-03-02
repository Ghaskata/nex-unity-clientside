import React from "react";
import "./css/EventPage.css";
import TodayEventSlider from "../../components/front/TodayEventSlider";
import PastEventSlider from "../../components/front/PastEventSlider";
import UpcommingEventSlider from "../../components/front/UpcommingEventSlider";

const EventsPage = () => {
  return (
    <>
      <TodayEventSlider/>
      <UpcommingEventSlider/>
      <PastEventSlider/>
    </>
  );
};

export default EventsPage;
