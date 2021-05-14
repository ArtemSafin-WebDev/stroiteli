import React from "react";

import Discussions from "../components/Discussions/Discussions";

import InterviewsList from "../components/InterviewsList/InterviewsList";
import LoadMore from "../components/LoadMore/LoadMore";
import Media from "../components/Media/Media";

import News from "../components/News/News";
import Podcasts from "../components/Podcasts/Podcasts";
import Search from "../components/Search/Search";

const MediaPage = () => {
  return (
    <>
      <Search />
      <News>
        <Media noHeading={true} />
        <Discussions />
      </News>
      <InterviewsList />
      <LoadMore />
      <Podcasts />
    </>
  );
};

export default MediaPage;
