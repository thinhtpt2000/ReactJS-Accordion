import React, { useState } from "react";

const Accordion = (props) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const { heading } = props;
  const content = props.children;

  const handleHeadingClick = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div className="Accordion">
      <h2 className="Heading" onClick={handleHeadingClick}>
        {heading}
      </h2>
      {!isCollapsed && <div className="Content">{content}</div>}
    </div>
  );
};

export default Accordion;
