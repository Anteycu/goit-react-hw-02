import React, { Component, Children } from "react";
import PropTypes from "prop-types";

export function Notification({ message }) {
  return <p>{message}</p>;
}
