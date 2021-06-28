import React from "react";

export default function ShowErrorMessage({ state, inputFieldName, tabName }) {
  return (
    <small
      style={{ marginBottom: "5px", display: "block" }}
      className="text-danger"
    >
      {
        state.error[tabName][
          state.error[tabName].findIndex(
            ({ fieldName }) => fieldName === inputFieldName.name
          )
        ]?.message
      }
    </small>
  );
}
