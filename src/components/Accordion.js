import React, { useState } from "react";

const Accordion = (props) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const { heading, content } = props;
  return (
    <div className="Accordion">
        <h2 className="Heading">{heading}</h2>
        <div className="Content">{content}</div>
    </div>
  )
};

export default Accordion;
