import React, { useContext } from "react";
import { HANDLE_REMOVE_VALIDATION_FIELD } from "../../contexts/actionType";
import { UserRegistrationFormContext } from "../../contexts/UserRegistrationContext";
import ShowErrorMessage from "../helpers/showErrorMessage";
import {
  degree,
  educationDetails,
  skills,
} from "../shared/educationalDetailsFormField";

export default function EducationalDetails() {
  const { setSkills, getFormData, state, dispatch } = useContext(
    UserRegistrationFormContext
  );

  return (
    <div>
      {educationDetails.map((info) => {
        return (
          <div key={info.id + info.name}>
            <label htmlFor={info.name}>{info.label}</label>
            <input
              className="form-control"
              onChange={(event) => getFormData(event, "eductationalDetails")}
              type={info.type}
              name={info.name}
              id={info.name}
              value={
                state["eductationalDetails"]
                  ? state["eductationalDetails"][info.name]
                  : ""
              }
            />
            {state.error["eductationalDetails"]?.some(
              ({ fieldName }) => fieldName === info.name
            ) ? (
              <ShowErrorMessage
                state={state}
                inputFieldName={info}
                tabName={"eductationalDetails"}
              />
            ) : null}
          </div>
        );
      })}
      <div className="m-10">
        <h4>Degree:</h4>
        {degree.map((data) => {
          return (
            <div className="m-5" key={data.id + data.name}>
              <input
                type="radio"
                onChange={(event) => getFormData(event, "eductationalDetails")}
                name="degree"
                id={data.name}
                checked={
                  state["eductationalDetails"]
                    ? state["eductationalDetails"].degree === data.name
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
        {state.error["eductationalDetails"]?.some(
          ({ fieldName }) => fieldName === "degree"
        ) ? (
          <ShowErrorMessage
            state={state}
            inputFieldName={{ name: "degree" }}
            tabName={"eductationalDetails"}
          />
        ) : null}
      </div>
      <div className="m-10">
        <h4>Skills:</h4>
        {skills.map((skill) => {
          return (
            <div className="m-5" key={skill.id + skill.name}>
              <input
                type="checkbox"
                name={skill.name}
                id={skill.name}
                checked={
                  state["eductationalDetails"]
                    ? state["eductationalDetails"].skills?.includes(skill.name)
                    : false
                }
                onChange={(event) => {
                  setSkills(event, "eductationalDetails");
                  dispatch({
                    type: HANDLE_REMOVE_VALIDATION_FIELD,
                    payload: {
                      tab: {
                        name: "eductationalDetails",
                        fieldName: "skills",
                      },
                    },
                  });
                }}
              />
              <label className="ml-5" htmlFor={skill.name}>
                {skill.name}
              </label>
            </div>
          );
        })}
        {state.error["eductationalDetails"]?.some(
          ({ fieldName }) => fieldName === "skills"
        ) ? (
          <ShowErrorMessage
            state={state}
            inputFieldName={{ name: "skills" }}
            tabName={"eductationalDetails"}
          />
        ) : null}
      </div>
    </div>
  );
}
