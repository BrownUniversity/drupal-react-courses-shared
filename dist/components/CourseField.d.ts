/// <reference types="react" />
declare type CourseFieldProps = {
    label?: string;
    href?: string;
    value?: string;
    defaultValue?: string;
};
declare const CourseField: ({ label, href, value, defaultValue }: CourseFieldProps) => JSX.Element;
export default CourseField;
