const makeMeeting = (subset = {}) => {
  return {
    buildingCode: "CIT",
    buildingDescription: "Center for Information Technology",
    daysToMeet: "MWF",
    endDate: "2019-05-07",
    endTime: "10:50",
    roomCode: "368",
    startDate: "2019-01-23",
    startTime: "10:00",
    ...subset
  };
};

export default makeMeeting;
