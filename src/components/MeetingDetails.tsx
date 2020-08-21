import React from "react";
import moment from "moment";
import CourseField from "./CourseField";

const formatDate = (date: string) =>
  moment(date, "YYYY-MM-DD").format("MMM D, YYYY");

type Meeting = {
  buildingDescription?: string;
  roomCode?: string;
  startTime?: string;
  endTime?: string;
  daysToMeet?: string;
  startDate?: string;
  endDate?: string;
};

const formatMeeting = (meeting: Meeting) => {
  const {
    buildingDescription,
    roomCode,
    startTime,
    endTime,
    daysToMeet,
    startDate,
    endDate
  } = meeting;

  const weekdays: Record<string, string> = {
    U: "Sun",
    M: "Mon",
    T: "Tue",
    W: "Wed",
    R: "Thu",
    F: "Fri",
    S: "Sat"
  };

  const location = `${buildingDescription || ""} ${roomCode || ""}`;
  const times = startTime && endTime ? `${startTime} - ${endTime}` : "";

  const days = daysToMeet
    ? daysToMeet
        .split("")
        .map(day => weekdays[day])
        .join(", ")
    : "";

  const dates =
    startDate && endDate
      ? `from ${formatDate(startDate)} to ${formatDate(endDate)}`
      : "";

  return `${location} ${times} ${days} - ${dates}`;
};

const MeetingDetails = ({ meetings }: { meetings: Meeting[] }) =>
  meetings.length > 0 ? (
    <>
      {meetings.map((m, i) => (
        <CourseField
          label={i === 0 ? "Meetings" : undefined}
          key={`${m.startDate}-${m.daysToMeet}-${m.startTime}`}
          value={formatMeeting(m)}
        />
      ))}
    </>
  ) : (
    <CourseField label="Meetings" value="Meeting Details Not Available." />
  );

export default MeetingDetails;
