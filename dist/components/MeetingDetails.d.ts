/// <reference types="react" />
declare type Meeting = {
    buildingDescription?: string;
    roomCode?: string;
    startTime?: string;
    endTime?: string;
    daysToMeet?: string;
    startDate?: string;
    endDate?: string;
};
declare const MeetingDetails: ({ meetings }: {
    meetings: Meeting[];
}) => JSX.Element;
export default MeetingDetails;
