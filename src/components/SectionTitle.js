import React, { Component, Children } from "react";
import PropTypes from "prop-types";

export function SectionTitle({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
