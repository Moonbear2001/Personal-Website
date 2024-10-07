import { useState, useEffect } from "react";
import { ResponsiveLine } from "@nivo/line";
import { getFrequencyData } from "../../services/bookReviewService";

const data = [
  {
    id: "japan",
    color: "hsl(191, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 150,
      },
      {
        x: "helicopter",
        y: 232,
      },
      {
        x: "boat",
        y: 32,
      },
      {
        x: "train",
        y: 249,
      },
      {
        x: "subway",
        y: 296,
      },
      {
        x: "bus",
        y: 286,
      },
      {
        x: "car",
        y: 179,
      },
      {
        x: "moto",
        y: 287,
      },
      {
        x: "bicycle",
        y: 113,
      },
      {
        x: "horse",
        y: 196,
      },
      {
        x: "skateboard",
        y: 87,
      },
      {
        x: "others",
        y: 194,
      },
    ],
  },
];

const FrequencyLineChart = () => {
  const [lineData, setLineData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const frequencyData = await getFrequencyData();

        setLineData(transformData(frequencyData));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const transformData = (reviews) => {
    const data = reviews.map((item) => ({
      x: item._id,
      y: item.count,
    }));
    return [
      {
        id: "Books Read",
        data: data,
      },
    ];
  };

  // Show a loading message until the data is fully loaded
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <ResponsiveLine
      data={lineData}
      margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
      xScale={{ type: "point", min: "auto", max: "auto" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
      }}
      yFormat=" >-.2f"
      axisBottom={{
        legend: "Time",
        legendOffset: 40,
        legendPosition: "middle",
      }}
      axisLeft={{
        legend: "Books Read",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={8}
      pointLabel="data.yFormatted"
      pointLabelYOffset={-12}
      useMesh={true}
    />
  );
};
export default FrequencyLineChart;
