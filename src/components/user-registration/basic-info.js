import React from "react";
import { useContext } from "react";
import {
  HANDLE_REMOVE_VALIDATION_FIELD
} from "../../contexts/actionType";
import { UserRegistrationFormContext } from "../../contexts/UserRegistrationContext";
import ShowErrorMessage from "../helpers/showErrorMessage";
import {
  basicInfo,
  genders,
  maritalStatus,
  languages,
} from "../shared/basicInfoFormFields";

export default function BasicInfo() {
  const { setLanguages, getFormData, state, dispatch } = useContext(
    UserRegistrationFormContext
  );

  return (
    <div>
      {basicInfo.map((info) => {
        return (
          <div key={info.id+info.name}>
            <label htmlFor={info.name}>{info.label}</label>
            <input
              style={{
                borderColor:state.error && state.error["basicInfo"]?.some(({ fieldName }) => fieldName === info.name)? "red": ""}}
                className="form-control"
                onChange={(event) => getFormData(event, "basicInfo")}
                type={info.type}
                name={info.name}
                id={info.name}
                value={state["basicInfo"] ? state["basicInfo"][info.name] : ""}
            />

            {state.error["basicInfo"]?.some(
              ({ fieldName }) => fieldName === info.name
            ) ? (
              <ShowErrorMessage
                state={state}
                inputFieldName={info}
                tabName={"basicInfo"}
              />
            ) : null}
          </div>
        );
      })}
      <div className="m-10">
        <h4>Gender:</h4>
        {genders.map((gender) => {
          return (
            <div key={gender.id+gender.name}>
              <input
                className="m-5"
                type="radio"
                onChange={(event) => getFormData(event, "basicInfo")}
                name="gender"
                id={gender.name}
                checked={
                  state["basicInfo"]
                    ? state["basicInfo"].gender === gender.name
                    : false
                }
                value={gender.name}
              />
              <label className="ml-5" htmlFor={gender.name}>
                {gender.name}
              </label>
            </div>
          );
        })}
        {state.error["basicInfo"]?.some(
          ({ fieldName }) => fieldName === "gender"
        ) ? (
          <ShowErrorMessage
            state={state}
            inputFieldName={{ name: "gender" }}
            tabName={"basicInfo"}
          />
        ) : null}
      </div>

      <div className="m-10">
        <h4>Marital Status:</h4>

        {maritalStatus.map((status) => {
          return (
            <div key={status.id + status.name}>
              <input
                className="m-5"
                type="radio"
                onChange={(event) => getFormData(event, "basicInfo")}
                name="maritalStatus"
                id={status.name}
                checked={
                  state["basicInfo"]
                    ? state["basicInfo"].maritalStatus === status.name
                    : false || false
                }
                value={status.name}
              />
              <label className="ml-5" htmlFor={status.name}>
                {status.name}
              </label>
            </div>
          );
        })}

        {state.error["basicInfo"]?.some(
          ({ fieldName }) => fieldName === "maritalStatus"
        ) ? (
          <ShowErrorMessage
            state={state}
            inputFieldName={{ name: "maritalStatus" }}
            tabName={"basicInfo"}
          />
        ) : null}
      </div>

      <div className="m-10">
        <h4>Languages:</h4>

        {languages.map((language) => {
          return (
            <div key={language.id+language.name}>
              <input
                type="checkbox"
                name={language.name}
                id={language.name}
                checked={
                  state["basicInfo"]
                    ? state["basicInfo"].languages?.includes(language.name)
                    : false || false
                }
                onChange={(event) => {
                  setLanguages(event, "basicInfo");
                  dispatch({
                    type: HANDLE_REMOVE_VALIDATION_FIELD,
                    payload: {
                      tab: {
                        name: "basicInfo",
                        fieldName: "languages",
                      },
                    },
                  });
                }}
              />
              <label className="ml-5" htmlFor={language.name}>
                {language.name}
              </label>
            </div>
          );
        })}

        {state.error["basicInfo"]?.some(
          ({ fieldName }) => fieldName === "languages"
        ) ? (
          <ShowErrorMessage
            state={state}
            inputFieldName={{ name: "languages" }}
            tabName={"basicInfo"}
          />
        ) : null}
      </div>
    </div>
  );
}
