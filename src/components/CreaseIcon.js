import React from "react";

const CreaseIcon = ({ id, isIncrease = true }) => {
  return (
    <i
      id={id}
      className={"bi " + (isIncrease ? "bi-arrow-up-circle-fill" : "bi-arrow-down-circle-fill")}
    />
  );
};

export default CreaseIcon;
