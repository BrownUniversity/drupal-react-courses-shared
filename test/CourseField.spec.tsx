import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CourseField from "../src/components/CourseField";

const renderCourseField = ({
  value,
  href
}: {
  value?: string;
  href?: string;
} = {}) => {
  const rtlUtils = render(
    <CourseField
      label="Test label"
      href={href}
      value={value}
      defaultValue="Default value"
    />
  );
  return rtlUtils;
};

describe("CourseField", () => {
  it("renders label", () => {
    const { getByText } = renderCourseField();
    getByText("Test label:");
  });

  it("handles null label", () => {
    const { queryByText } = renderCourseField();
    expect(queryByText(":")).not.toBeInTheDocument();
  });

  it("links to provided href", () => {
    const { getByText } = renderCourseField({
      value: "Test value",
      href: "https://brown.edu"
    });
    expect(getByText("Test value")).toHaveAttribute(
      "href",
      "https://brown.edu"
    );
  });

  it("renders provided value", () => {
    const { getByText } = renderCourseField({ value: "Test value" });
    getByText("Test value");
  });

  it("renders default value if provided value is null", () => {
    const { getByText } = renderCourseField({ value: undefined });
    getByText("Default value");
  });
});
