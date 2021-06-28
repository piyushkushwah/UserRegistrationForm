import React, { useContext } from "react";
import { HANDLE_REMOVE_VALIDATION_FIELD } from "../../contexts/actionType";
import { UserRegistrationFormContext } from "../../contexts/UserRegistrationContext";
import ShowErrorMessage from "../helpers/showErrorMessage";
import {
  employmentStatus,
  hobbies,
  jobType,
  workDetails,
} from "../shared/workDetailsFormFields";

export default function WorkDetails() {
  const { setHobbies, getFormData, state, dispatch } = useContext(
    UserRegistrationFormContext
  );

  return (
    <div>
      {workDetails.map((info) => {
        return (
          <div key={info.id}>
            <label htmlFor={info.name}>{info.label}</label>
            <input
              className="form-control"
              onChange={(event) => getFormData(event, "employmentHistory")}
              type={info.type}
              name={info.name}
              id={info.name}
              value={
                state["employmentHistory"]
                  ? state["employmentHistory"][info.name]
                  : ""
              }
            />
            {state.error["employmentHistory"]?.some(
              ({ fieldName }) => fieldName === info.name
            ) ? (
              <ShowErrorMessage
                state={state}
                inputFieldName={info}
                tabName={"employmentHistory"}
              />
            ) : null}
          </div>
        );
      })}
      <div className="m-10">
        <h4>Job Type:</h4>
        {jobType.map((data) => {
          return (
            <div key={data.id}>
              <input
                className="m-5"
                type="radio"
                onChange={(event) => getFormData(event, "employmentHistory")}
                name="jobType"
                id={data.name}
                checked={
                  state["employmentHistory"]
                    ? state["employmentHistory"].jobType === data.name
                    : false
                }
                value={data.name}
              />
              <label className="ml-5" htmlFor={data.name}>
                {data.name}
              </label>
            </div>
          );
        })}
        {state.error["employmentHistory"]?.some(
          ({ fieldName }) => fieldName === "jobType"
        ) ? (
          <ShowErrorMessage
            state={state}
            inputFieldName={{ name: "jobType" }}
            tabName={"employmentHistory"}
          />
        ) : null}
      </div>
      <div className="m-10">
        <h4>Employment Status:</h4>
        {employmentStatus.map((data) => {
          return (
            <div className="m-5" key={data.id}>
              <input
                type="radio"
                onChange={(event) => getFormData(event, "employmentHistory")}
                name="employmentStatus"
                id={data.name}
                checked={
                  state["employmentHistory"]
                    ? state["employmentHistory"].employmentStatus === data.name
                    : false
                }
                value={data.name}
              />
              <label className="ml-5" htmlFor={data.name}>
                {data.name}
              </label>
            </div>
          );
        })}
        {state.error["employmentHistory"]?.some(
          ({ fieldName }) => fieldName === "employmentStatus"
        ) ? (
          <ShowErrorMessage
            state={state}
            inputFieldName={{ name: "employmentStatus" }}
            tabName={"employmentHistory"}
          />
        ) : null}
      </div>
      <div className="m-10">
        <h4>Hobbies:</h4>
        {hobbies.map((hobbie) => {
          return (
            <div className="m-5" key={hobbie.id}>
              <input
                type="checkbox"
                name={hobbie.name}
                id={hobbie.name}
                checked={
                  state["employmentHistory"]
                    ? state["employmentHistory"].hobbies?.includes(hobbie.name)
                    : false
                }
                onChange={(event) => {
                  setHobbies(event, "employmentHistory");
                  dispatch({
                    type: HANDLE_REMOVE_VALIDATION_FIELD,
                    payload: {
                      tab: {
                        name: "employmentHistory",
                        fieldName: "hobbies",
                      },
                    },
                  });
                }}
              />
              <label className="" htmlFor={hobbie.name}>
                {hobbie.name}
              </label>
            </div>
          );
        })}
        {state.error["employmentHistory"]?.some(
          ({ fieldName }) => fieldName === "hobbies"
        ) ? (
          <ShowErrorMessage
            state={state}
            inputFieldName={{ name: "hobbies" }}
            tabName={"employmentHistory"}
          />
        ) : null}
      </div>
    </div>
  );
}
