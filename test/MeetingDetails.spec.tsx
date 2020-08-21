import React from "react";
import { render } from "@testing-library/react";
import makeMeeting from "../src/test_utils/makeMeeting";
import makeMeetings from "../src/test_utils/makeMeetings";
import MeetingDetails from "../src/components/MeetingDetails";

const oneMeeting = makeMeetings();

const twoMeetings = [
  makeMeeting({
    endDate: "2019-03-17"
  }),
  makeMeeting({
    buildingDescription: "MacMillan Hall",
    roomCode: "117",
    startDate: "2019-03-18"
  })
];

const renderMeetingDetails = (meetings = oneMeeting) => {
  const rtlUtils = render(<MeetingDetails meetings={meetings} />);
  return rtlUtils;
};

describe("MeetingDetails", () => {
  it("renders error message if no meetings specified", async () => {
    const { getByText } = renderMeetingDetails([]);
    getByText("Meetings:");
    getByText("Meeting Details Not Available.");
  });

  it("renders data for single course meeting", async () => {
    const { getByText } = renderMeetingDetails();
    getByText("Meetings:");
    getByText(
      "Center for Information Technology 368 10:00 - 10:50 Mon, Wed, Fri - from Jan 23, 2019 to May 7, 2019"
    );
  });

  it("renders data for multiple course meetings", async () => {
    const { getByText } = renderMeetingDetails(twoMeetings);
    getByText("Meetings:");
    getByText(
      "Center for Information Technology 368 10:00 - 10:50 Mon, Wed, Fri - from Jan 23, 2019 to Mar 17, 2019"
    );
    getByText(
      "MacMillan Hall 117 10:00 - 10:50 Mon, Wed, Fri - from Mar 18, 2019 to May 7, 2019"
    );
  });

  it("handles empty building", () => {
    const { getByText } = renderMeetingDetails(
      makeMeetings({ buildingDescription: null })
    );
    getByText("Meetings:");
    getByText(
      "368 10:00 - 10:50 Mon, Wed, Fri - from Jan 23, 2019 to May 7, 2019"
    );
  });

  it("handles empty room", () => {
    const { getByText } = renderMeetingDetails(
      makeMeetings({ roomCode: null })
    );
    getByText("Meetings:");
    getByText(
      "Center for Information Technology 10:00 - 10:50 Mon, Wed, Fri - from Jan 23, 2019 to May 7, 2019"
    );
  });

  it("handles empty start time", () => {
    const { getByText } = renderMeetingDetails(
      makeMeetings({ startTime: null })
    );
    getByText("Meetings:");
    getByText(
      "Center for Information Technology 368 Mon, Wed, Fri - from Jan 23, 2019 to May 7, 2019"
    );
  });

  it("handles empty end time", () => {
    const { getByText } = renderMeetingDetails(
      makeMeetings({ startTime: null })
    );
    getByText("Meetings:");
    getByText(
      "Center for Information Technology 368 Mon, Wed, Fri - from Jan 23, 2019 to May 7, 2019"
    );
  });

  it("handles empty days to meet", () => {
    const { getByText } = renderMeetingDetails(
      makeMeetings({ daysToMeet: null })
    );
    getByText("Meetings:");
    getByText(
      "Center for Information Technology 368 10:00 - 10:50 - from Jan 23, 2019 to May 7, 2019"
    );
  });
});
