import React, { useEffect, useMemo, useState } from "react";
import "./css/EventPage.css";
import TodayEventSlider from "../../components/front/TodayEventSlider";
import PastEventSlider from "../../components/front/PastEventSlider";
import UpcommingEventSlider from "../../components/front/UpcommingEventSlider";
import useAxiosPrivate from "../../security/useAxiosPrivate";
import { useQuery } from "react-query";
import { EVENT_API_URL } from "../../security/axios";
import DataLoadingCompo from "../../components/common/DataLoadingCompo";

const EventsPage = () => {


  const [loading, setloading] = useState(false)
  const axiosPrivate = useAxiosPrivate();
  const queryKey = useMemo(() => ["events"], []);

  const {
    data: events,
    isLoading,
    isError,
    error,
  } = useQuery(
    queryKey,
    async () => {
      const response = await axiosPrivate.get(EVENT_API_URL.get);
      return response.data.data;
    },
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );



  const currentDate = new Date();

  const todayEvents = events?.filter((event) => {
    const eventDate = new Date(event.time);
    return (
      eventDate.getDate() === currentDate.getDate() &&
      eventDate.getMonth() === currentDate.getMonth() &&
      eventDate.getFullYear() === currentDate.getFullYear()
    );
  });

  const upcomingEvents = events?.filter((event) => {
    const eventDate = new Date(event.time);
    return eventDate > currentDate;
  });

  const pastEvents = events?.filter((event) => {
    const eventDate = new Date(event.time);
    return eventDate < currentDate;
  });


  if(isError){
    return <DataLoadingCompo/>
  }

  console.log("events >>> ",events)
  console.log("today events >>> ",todayEvents)
  console.log("upcoming events >>> ",upcomingEvents)
  console.log("past events >>> ",pastEvents)
  return (
    <>
     {(isLoading) && <DataLoadingCompo/>}
      <TodayEventSlider todayEvents={todayEvents}/>
      <UpcommingEventSlider upcomingEvents={upcomingEvents}/>
      <PastEventSlider  pastEvents={pastEvents}/>
    </>
  );
};

export default EventsPage;
