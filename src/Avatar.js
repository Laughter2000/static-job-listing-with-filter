import React from "react";

const Avatar = ({ url, label, className }) => (
  <img className={className ?? ""} src={url} alt={label ?? ""} />
);

export default Avatar;
