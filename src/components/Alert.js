import React from "react";

const Captalize = (word) => {
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
};
export default function Alert(props) {
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <span>
          <strong>{Captalize(props.alert?.type)}</strong> {props.alert?.message}
        </span>
      </div>
    )
  );
}
