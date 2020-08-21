import makeMeeting from "./makeMeeting";

const makeMeetings = (subset = {}, numMeetings = 1) => {
  const meetings = [];
  for (let i = 0; i < numMeetings; i += 1) {
    meetings.push(makeMeeting(subset));
  }

  return meetings;
};

export default makeMeetings;
