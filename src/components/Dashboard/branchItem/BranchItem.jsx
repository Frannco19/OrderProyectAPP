import React from "react";
import "./BranchItem.css";

const BranchItem = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="cardBackground">
            <img src="../src/assets/RockAndFeller.webp" alt="" />
        </div>
        <div className="branchName">
          <h2 className="branch">Rock And Fellers - Oroño</h2>
        </div>
      </div>
    </div>
  );
};

export default BranchItem;
