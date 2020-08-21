declare const makeMeetings: (subset?: {}, numMeetings?: number) => {
    buildingCode: string;
    buildingDescription: string;
    daysToMeet: string;
    endDate: string;
    endTime: string;
    roomCode: string;
    startDate: string;
    startTime: string;
}[];
export default makeMeetings;
