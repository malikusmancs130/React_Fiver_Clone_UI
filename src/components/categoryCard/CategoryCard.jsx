import React from "react";
import { Link } from "react-router-dom";
import "./CategoryCard.scss";

function CategoryCard({ card }){
  return (
    <Link to="/gigs?cat=design">
      <div className="CategoryCard">
        <img src={card.img} alt="" />
        <span className="desc">{card.desc}</span>
        <span className="title">{card.title}</span>
      </div>
    </Link>
  );
}
export default CategoryCard;