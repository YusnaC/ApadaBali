// Fungsi untuk mendapatkan data baru berdasarkan rentang waktu
function getChartData(chartType, timeRange) {
  if (chartType === "project") {
    if (timeRange === "7") {
      return {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        data: [10, 15, 20, 25, 30, 35, 40],
      };
    } else if (timeRange === "30") {
      return {
        labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 50)),
      };
    } else if (timeRange === "12") {
      return {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        data: [100, 120, 150, 170, 200, 180, 220, 240, 210, 230, 250, 270],
      };
    }
  } else if (chartType === "revenue") {
    if (timeRange === "7") {
      return {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        data: [1000, 1500, 2000, 2500, 3000, 3500, 4000],
      };
    } else if (timeRange === "30") {
      return {
        labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
        data: Array.from({ length: 30 }, () =>
          Math.floor(Math.random() * 5000)
        ),
      };
    } else if (timeRange === "12") {
      return {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        data: [
          15000, 20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000,
          65000, 70000,
        ],
      };
    }
  }
}

// Fungsi untuk memperbarui chart berdasarkan data baru
function updateChart(chart, newLabels, newData) {
  chart.data.labels = newLabels;
  chart.data.datasets[0].data = newData;
  chart.update();
}

// Inisialisasi Project Chart
const defaultProjectData = getChartData("project", "7");
var ctx1 = document.getElementById("projectChart").getContext("2d");
var projectChart = new Chart(ctx1, {
  type: "bar",
  data: {
    labels: defaultProjectData.labels,
    datasets: [
      {
        label: "Jumlah Pekerjaan Proyek",
        data: defaultProjectData.data,
        backgroundColor: "#FF6842",
        borderColor: "#FF6842",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Inisialisasi Revenue Chart
const defaultRevenueData = getChartData("revenue", "7");
var ctx2 = document.getElementById("revenueChart").getContext("2d");
var revenueChart = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: defaultRevenueData.labels,
    datasets: [
      {
        label: "Pendapatan (dalam juta)",
        data: defaultRevenueData.data,
        backgroundColor: "#FF6842",
        borderColor: "#FF6842",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// Event Listener untuk Project Chart
document
  .getElementById("timeFilterProject")
  .addEventListener("change", function () {
    const timeRange = this.value;
    const { labels, data } = getChartData("project", timeRange);
    updateChart(projectChart, labels, data);
  });

// Event Listener untuk Revenue Chart
document
  .getElementById("timeFilterRevenue")
  .addEventListener("change", function () {
    const timeRange = this.value;
    const { labels, data } = getChartData("revenue", timeRange);
    updateChart(revenueChart, labels, data);
  });
