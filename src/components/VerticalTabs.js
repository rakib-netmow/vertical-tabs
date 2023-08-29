import React, { useState } from "react";
import "./VerticalTabs.css";

const VerticalTabs = ({
  containerClass,
  tabContainerClass,
  mainContentClass,
}) => {
  const [tab, setTab] = useState(1);
  return (
    <div className={`container ${containerClass ? containerClass : ""}`}>
      <div
        className={`tab-container ${
          tabContainerClass ? tabContainerClass : ""
        }`}
      >
        <ul>
          <li
            className={`${tab === 1 ? "active" : ""}`}
            onClick={() => setTab(1)}
          >
            Tab1
          </li>
          <li
            className={`${tab === 2 ? "active" : ""}`}
            onClick={() => setTab(2)}
          >
            Tab2
          </li>
          <li
            className={`${tab === 3 ? "active" : ""}`}
            onClick={() => setTab(3)}
          >
            Tab3
          </li>
          <li
            className={`${tab === 4 ? "active" : ""}`}
            onClick={() => setTab(4)}
          >
            Tab4
          </li>
          <li
            className={`${tab === 5 ? "active" : ""}`}
            onClick={() => setTab(5)}
          >
            Tab5
          </li>
        </ul>
      </div>
      <div
        className={`main-contant ${mainContentClass ? mainContentClass : ""}`}
      >
        {tab === 1 && <div>This is tab 1</div>}
        {tab === 2 && <div>This is tab 2</div>}
        {tab === 3 && <div>This is tab 3</div>}
        {tab === 4 && <div>This is tab 4</div>}
        {tab === 5 && <div>This is tab 5</div>}
      </div>
    </div>
  );
};

export default VerticalTabs;
