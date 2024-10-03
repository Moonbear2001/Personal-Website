import { useState, useEffect } from "react";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";
import { Heading, Box } from "@chakra-ui/react";
import { getResumeData } from "../../services/dataService.js";
import { getTimelineData } from "../../utils/parseResume";

const EPOCH_START = 1451610061000;
const EPOCH_END = 1767229261000;

const CalendarTimeline = () => {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [groups, setGroups] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getResumeData();
        setResumeData(data);
        console.log("resume data: ", data);

        const timelineData = getTimelineData(data);
        console.log("timeline data: ", timelineData);

        // Prepare groups and items from timelineData
        const newGroups = timelineData.map((item, index) => ({
          id: index + 1, // Use index + 1 for group IDs
          title:
            item.company ||
            item.title ||
            item.institution ||
            `Group ${index + 1}`, // Conditional title
        }));

        const newItems = timelineData.map((item, index) => ({
          id: index + 1, // Use index + 1 for item IDs
          group: index + 1, // Match group ID
          title: "", // Default title if not present
          start_time: moment(item.startDate), // Ensure the correct field is used
          end_time: moment(item.endDate), // Ensure the correct field is used
        }));

        setGroups(newGroups);
        setItems(newItems);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching resume data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!resumeData) {
    return <div>Error loading resume data.</div>;
  }

  return (
    <Box maxWidth={"1200px"}>
      <Heading fontSize="4xl" mb={4}>
        My Timeline
      </Heading>
      <Timeline
        sidebarWidth={200}
        groups={groups}
        items={items}
        visibleTimeStart={EPOCH_START}
        visibleTimeEnd={EPOCH_END}
        canMove={false}
        canResize={false}
      />
    </Box>
  );
};

export default CalendarTimeline;
