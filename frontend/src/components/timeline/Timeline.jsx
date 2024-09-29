import { Divider, Box, Flex, Text } from "@chakra-ui/react";
import { getTimelineData } from "../resume/parseResume";
import TimelineBar from "./TimelineBar";

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Timeline = () => {
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2025];
  const totalYears = years.length;
  const firstYear = years[0];
  const lastYear = years[totalYears - 1];
  const totalDurationYears = lastYear - firstYear;

  const getPercentageWidth = (startDate, endDate) => {
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth(); // 0-11, where 0 is January and 11 is December
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();
    const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth);
    return (totalMonths / (totalDurationYears * 12)) * 100;
  };

  const getLeftOffset = (startDate) => {
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const offsetMonths = (startYear - firstYear) * 12 + startMonth;
    return (offsetMonths / (totalDurationYears * 12)) * 100;
  };

  const timelineData = getTimelineData();

  return (
    <Box w="100%" p={0}>
      <Flex justify="space-between" align="center" w="100%" mb={10}>
        {years.map((year, index) => (
          <Flex key={index} direction="column" align="center">
            <Text mb={2}>{year}</Text>
            <Divider
              orientation="vertical"
              height="25px"
              borderWidth="1px"
              borderColor="black"
              mb={0}
              pb={0}
            />
          </Flex>
        ))}
      </Flex>
      <Box position="relative" mt={4} w="100%">
        {timelineData.map((period, index) => (
          <TimelineBar
            key={index}
            left={`${getLeftOffset(period.startDate)}%`}
            width={`${getPercentageWidth(period.startDate, period.endDate)}%`}
            opacity={0.7}
            color={period.color}
            onClick={() => scrollToSection(period.section)}
            top={`${index * 60}px`}
          />
        ))}
      </Box>
      {/* <Box position="relative" mt={4} h="40px" w="100%">
        {timelineData.map((period, index) => (
          <Box
            key={index}
            position="absolute"
            left={`${getLeftOffset(period.startDate)}%`}
            width={`${getPercentageWidth(period.startDate, period.endDate)}%`}
            height="100%"
            bg={period.color}
            opacity={0.7}
            top={`${index * 60}px`}
          ></Box>
        ))}
      </Box> */}
    </Box>
  );
};

export default Timeline;
