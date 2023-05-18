export const GraphData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1,
      key: "1",
    },
  ],
};

export const GraphOptions = {
  scales: {
    x: {
      type: "category",
      display: true,
      title: {
        display: true,
        text: "Colors",
      },
    },
    y: {
      type: "linear",
      display: true,
      title: {
        display: true,
        text: "# of Votes",
      },
    },
  },
};
