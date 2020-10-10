import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  const { id, description, thumb_image_url, logo } = props.item;
  console.log(props)
  return (
    <div className="portfolio-item-wrapper">
      <div
        className="portfolio-img-background"
        style={{
          backgroundImage: "url(" + thumb_image_url + ")"
        }}
      />

      <img src={thumb_image_url} />
      <img src={logo} />
      <div>{description}</div>
      <Link to={`/portfolio/${id}`}>Link</Link>
    </div>
  );
}