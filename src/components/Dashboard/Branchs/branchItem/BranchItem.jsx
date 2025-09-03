import React from "react";
import "./BranchItem.css";

const BranchItem = ({ name, image }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="cardBackground">
          <img src={image} alt={name} />
        </div>
        <div className="branchName">
          <h2 className="branch">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default BranchItem;