import PropTypes from "prop-types";
import { Heading, Box } from "@chakra-ui/react";
// import timelineColors from "../timeline/timelineConstants";

const ResumeSection = ({ title, data, CardComponent }) => {
  const cardComponents = [];

  for (let index = 0; index < data.length; index++) {
    cardComponents.push(
      <CardComponent key={`${title}-${index}`} data={data[index]} />
    );
  }

  // bg={timelineColors[type]}

  return (
    <Box p={4} mb={8} rounded={"lg"}>
      <Heading as="h2" size="lg" mb={4}>
        {title}
      </Heading>
      <Box>{cardComponents}</Box>
    </Box>
  );
};

ResumeSection.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  CardComponent: PropTypes.elementType.isRequired,
  type: PropTypes.oneOf(["education", "projects", "internships", "employment"])
    .isRequired,
};

export default ResumeSection;
