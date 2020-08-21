import * as React from "react";
import {
  Loader,
  Filter,
  Wrapper,
  CourseField,
  MeetingDetails,
} from "../../../dist";

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const stopLoading = () => setIsLoading(false);
  setTimeout(stopLoading, 2500);
  const filterData = {
    FIRST: "First Value",
    SECOND: "Second Value",
    LAST: "Third Value",
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Filter data={filterData} />
      <Wrapper>
        <CourseField label="Test label" value="Test value" />

        <h2>Empty Meeting List</h2>
        <MeetingDetails meetings={[]} />

        <h2>One Meeting</h2>
        <MeetingDetails
          meetings={[
            {
              buildingDescription: "Center for Information Technology",
              daysToMeet: "MWF",
              endDate: "2019-05-07",
              endTime: "10:50",
              roomCode: "368",
              startDate: "2019-01-23",
              startTime: "10:00",
            },
          ]}
        />

        <h2>Two Meetings</h2>
        <MeetingDetails
          meetings={[
            {
              buildingDescription: "Center for Information Technology",
              daysToMeet: "MWF",
              endDate: "2019-03-15",
              endTime: "10:50",
              roomCode: "368",
              startDate: "2019-01-23",
              startTime: "10:00",
            },
            {
              buildingDescription: "MacMillan",
              daysToMeet: "MWF",
              endDate: "2019-05-07",
              endTime: "10:50",
              roomCode: "117",
              startDate: "2019-03-16",
              startTime: "10:00",
            },
          ]}
        />

        <h2>Meeting Without Building</h2>
        <MeetingDetails
          meetings={[
            {
              daysToMeet: "MWF",
              endDate: "2019-05-07",
              endTime: "10:50",
              roomCode: "368",
              startDate: "2019-01-23",
              startTime: "10:00",
            },
          ]}
        />

        <h2>Meeting Without Room</h2>
        <MeetingDetails
          meetings={[
            {
              buildingDescription: "Center for Information Technology",
              daysToMeet: "MWF",
              endDate: "2019-05-07",
              endTime: "10:50",
              startDate: "2019-01-23",
              startTime: "10:00",
            },
          ]}
        />
        <h2>Meeting Without Building or Room</h2>
        <MeetingDetails
          meetings={[
            {
              daysToMeet: "MWF",
              endDate: "2019-05-07",
              endTime: "10:50",
              startDate: "2019-01-23",
              startTime: "10:00",
            },
          ]}
        />

        <h2>Meeting Without Start Time</h2>
        <MeetingDetails
          meetings={[
            {
              buildingDescription: "Center for Information Technology",
              daysToMeet: "MWF",
              endDate: "2019-05-07",
              endTime: "10:50",
              roomCode: "368",
              startDate: "2019-01-23",
            },
          ]}
        />

        <h2>Meeting Without End Time</h2>
        <MeetingDetails
          meetings={[
            {
              buildingDescription: "Center for Information Technology",
              daysToMeet: "MWF",
              endDate: "2019-05-07",
              roomCode: "368",
              startDate: "2019-01-23",
              startTime: "10:00",
            },
          ]}
        />

        <h2>Meeting Without Days to Meet</h2>
        <MeetingDetails
          meetings={[
            {
              buildingDescription: "Center for Information Technology",
              endDate: "2019-05-07",
              endTime: "10:50",
              roomCode: "368",
              startDate: "2019-01-23",
              startTime: "10:00",
            },
          ]}
        />

        <h2>Meeting Without Start Date</h2>
        <MeetingDetails
          meetings={[
            {
              buildingDescription: "Center for Information Technology",
              daysToMeet: "MWF",
              endDate: "2019-05-07",
              endTime: "10:50",
              roomCode: "368",
              startTime: "10:00",
            },
          ]}
        />

        <h2>Meeting Without End Date</h2>
        <MeetingDetails
          meetings={[
            {
              buildingDescription: "Center for Information Technology",
              daysToMeet: "MWF",
              endTime: "10:50",
              roomCode: "368",
              startDate: "2019-01-23",
              startTime: "10:00",
            },
          ]}
        />
      </Wrapper>
    </>
  );
};

export default App;
