import React, { useContext, useState } from "react";
import { UserRegistrationFormContext } from "../../contexts/UserRegistrationContext";
import BasicInfo from "./basic-info";
import EducationalDetails from "./educational-details";
import WorkDetails from "./work-details";
import "./user-registration.css";

export default function UserRegistration({ getGlobalStateData }) {
  const [tabs, setTabs] = useState([
    { id: 0, label: "basicInfo", name: "Basic Info", selected: true },
    {
      id: 1,
      label: "eductationalDetails",
      name: "Educational Details",
      selected: false,
    },
    {
      id: 2,
      label: "employmentHistory",
      name: "Employment History",
      selected: false,
    },
  ]);
  const { submitForm, state } = useContext(UserRegistrationFormContext);

  const getSelectedTab = (index) => {
    if (tabs[index].selected) return;
    const tabs_array = tabs.map((tab, tabIndex) => {
      if (tabIndex === index) {
        tab.selected = !tab.selected;
      } else tab.selected = false;
      return tab;
    });
    setTabs(tabs_array);
  };

  return (
    <div className="user-registration">
      <div className="user-registration-tab-head tab-head">
        {tabs.map((tab, index) => {
          return (
            <div
              style={{
                backgroundColor:
                  state.error &&
                  state?.error[tab.label] !== undefined &&
                  state?.error[tab.label]?.length !== 0
                    ? "red"
                    : tab.selected
                    ? "#0A1931"
                    : "",
                color: state.error &&
                state?.error[tab.label] !== undefined &&
                state?.error[tab.label]?.length !== 0 && tab.selected ? 'blue' :'' 
              }}
              onClick={() => getSelectedTab(index)}
              key={tab.id + tab.name}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div
        className="tab-body"
        style={{
          display: tabs[0].selected ? "block" : "none",
          zIndex: tabs[0].selected ? "1" : "-1",
        }}
      >
        <BasicInfo />
      </div>
      <div
        style={{
          display: tabs[1].selected ? "block" : "none",
          zIndex: tabs[0].selected ? "1" : "-1",
        }}
        className="tab-body"
      >
        <EducationalDetails />
      </div>
      <div
        style={{
          display: tabs[2].selected ? "block  " : "none",
          zIndex: tabs[0].selected ? "1" : "-1",
        }}
        className="tab-body"
      >
        <WorkDetails />
      </div>
      <div className="user-registration-btn-wrapper">
        <button
          style={{
            opacity:
              state.error.basicInfo.length > 0 ||
              state.error.eductationalDetails.length > 0 ||
              state.error.employmentHistory.length > 0
                ? "0.5"
                : "",
          }}
          disabled={
            state.error.basicInfo.length > 0 ||
            state.error.eductationalDetails.length > 0 ||
            state.error.employmentHistory.length > 0
          }
          className="user-registration-btn btn-primary"
          onClick={submitForm}
        >
          submit
        </button>
      </div>
    </div>
  );
}
