import React from "react";
import Developers from "../components/Developers/Developers";
import EventsList from "../components/EventsList/EventsList";
import InterviewsList from "../components/InterviewsList/InterviewsList";
import Media from "../components/Media/Media";

import News from "../components/News/News";
import Podcasts from "../components/Podcasts/Podcasts";
import Publications from "../components/Publications/Publications";


const HomePage = () => {
  return (
    <>
      <News>
        <Media/>
        <Publications/>
      </News>
      <InterviewsList />
      <EventsList />
      <Podcasts />
      <Developers />
    </>
  );
};

export default HomePage;
