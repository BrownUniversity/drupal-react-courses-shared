import React from "react";

type CourseFieldProps = {
  label?: string;
  href?: string;
  value?: string;
  defaultValue?: string;
};

const CourseField = ({
  label,
  href,
  value,
  defaultValue = ""
}: CourseFieldProps) => (
  <div className="course_item_row">
    {label && <span className="course_item_row_label">{label}: </span>}
    <span className="course_item_row_content">
      {href && value ? (
        <a
          href={href}
          className="course_item_row_content"
          target="_blank"
          rel="noopener noreferrer"
        >
          {value}
        </a>
      ) : (
        value || defaultValue
      )}
    </span>
  </div>
);

export default CourseField;
