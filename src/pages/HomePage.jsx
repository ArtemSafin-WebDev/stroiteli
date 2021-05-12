import React from "react";
import Developers from "../components/Developers/Developers";
import EventsList from "../components/EventsList/EventsList";
import InterviewsList from "../components/InterviewsList/InterviewsList";

import News from "../components/News/News";
import Podcasts from "../components/Podcasts/Podcasts";

const HomePage = () => {
  return (
    <>
      <News />
      <InterviewsList />
      <EventsList />
      <Podcasts />
      <Developers />
    </>
  );
};

export default HomePage;
