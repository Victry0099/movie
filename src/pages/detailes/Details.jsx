import React from "react";
import "./style.scss";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import DetailsBanner from "./detaileBanner/DetailsBanner";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const {data: credits, loading: creditsLoading} = useFetch(`/${mediaType}/${id}/credits`)

  console.log("this is check credits",credits)
  return (
    <div>
      <DetailsBanner vedio={data?.results[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={credits?.creditsLoading}/>

      <VideosSection data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  );
};

export default Details;
