import React from "react";
import AllSkills from "../Components/AllSkills";

const SkillsType = () => {
  return (
    <div className="m-8">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab font-bold"
          aria-label="All Skills"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <AllSkills></AllSkills>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab font-bold"
          aria-label="Top Rated Providers"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab font-bold"
          aria-label="How It Works"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 3
        </div>
      </div>
    </div>
  );
};

export default SkillsType;
