import React from "react";

export const Card = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="card">
      <img src={image.webformatURL} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5>Image by: {image.user}</h5>
        <ul className="list-group">
          <li>
            <p>Views: {image.views}</p>
          </li>
          <li>
            <p>Downloads: {image.downloads}</p>
          </li>
          <li>
            <p>Likes: {image.likes}</p>
          </li>
        </ul>
      </div>
      <div className="card-footer">
        <span className="badge badge-info">{tags[0]}</span>
        <span className="badge badge-light">{tags[1]}</span>
        <span className="badge badge-dark">{tags[2]}</span>
      </div>
    </div>
  );
};
