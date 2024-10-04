import { useState, useEffect } from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, Text } from "@chakra-ui/react";
import { getGenreData } from "../../services/bookReviewService.js";

const GenrePieChart = () => {
  const [pieData, setPieData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreData = await getGenreData();
        console.log("genreData: ", genreData);

        // Convert the genre data to the format required by Nivo
        const tempPieData = genreData.map((genre) => ({
          id: genre._id,
          label: genre._id,
          value: genre.count,
        }));
        setPieData(tempPieData);
        console.log("Pie data: ", pieData); // Log the transformed data

        setLoading(false);
      } catch (error) {
        console.error("Error fetching genre data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("Updated Pie Data: ", pieData); // Log when pieData changes
  // }, [pieData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (pieData.length === 0) {
    console.log("NO PIE DATA");
    return (
      <Box>
        <Text>Error getting reading data.</Text>
      </Box>
    );
  }

  return (
    <Box style={{ height: "500px" }}>
      <ResponsivePie
        data={pieData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: "nivo" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        //
      />
    </Box>
  );
};

export default GenrePieChart;
