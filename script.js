var GKChartBar = document.getElementById('bar-chart').getContext('2d');
var GKChartBar = document.getElementById('line-chart').getContext('2d');
var GKChartPie = document.getElementById('pie-chart').getContext('2d');
var GKChartPie = document.getElementById('doughnut-chart').getContext('2d');
var GKChartPie = document.getElementById('radar-chart').getContext('2d');
var GKChartPie = document.getElementById('polar-chart').getContext('2d');

new Chart (document.getElementById("bar-chart"),{
  type: 'bar',
  data: {
    labels: ['Jakarta', 'Surabaya', 'Medan', 'Yogyakarta', 'NTT', 'Semarang'],
    datasets: [{
      label: 'Populasi',
      data: [4647383, 2917688, 2499838, 2440717, 1671001, 1667131],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
    }]
  }
});

new Chart (document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050], 
    datasets: [{
    data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478], 
    label: "Afrika",
    borderColor: "#3e95cd",
    fill: false
    },{
      data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267], 
      label: "Asia",
      borderColor: "#8e5ea2",
      fill: false
    },{
      data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734], 
      label: "Eropa",
      borderColor: "#3cba9f",
      fill: false
    },{
      data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784], 
      label: "Amerika",
      borderColor: "#e8c3b9",
      fill: false
    },{
      data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433], 
      label: "Australia",
      borderColor: "#c45850",
      fill: false
    }
  ]
  },
  options:{
    title:{
      display: true,
      text: 'Populasi dunia (juta)'
    }
  }
});

new Chart (document.getElementById("pie-chart"), {
  type: 'pie',
  data: {
    labels: ["Afrika", "Asia", "Eropa", "Amerika", "Australia", "Malayasia"], 
    datasets: [{
      label: "Populasi (juta)",
      backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
      data: [2478, 5267, 734, 784, 433, 5673]
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Perkiraan populasi dunia tahun 2050'
    }
  }
});

new Chart(document.getElementById("doughnut-chart"), {
  type: 'doughnut',
  data: {
    labels: ["Afrika", "Asia", "Eropa", "Amerika", "Australia"], 
    datasets: [
      {
        label: "Populasi (juta)",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
        data: [2478, 5267, 734, 784, 433]
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Perkiraan Populasi Dunia 2050'
    }
  }
});

new Chart(document.getElementById("radar-chart"), {
  type: 'radar',
  data: {
    labels: ["Afrika", "Asia", "Eropa", "America", "Australia"],
    datasets: [
      {
        label: "1950",
        fill: true,
        backgroundColor: "rgba(179, 181, 198,0.2)",
        borderColor: "rgba(179, 181,198,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba (179, 181, 198,1)", 
        data: [8.77, 55.61, 21.69, 6.62, 6.82]
      }, {
        label: "2050",
        fill: true,
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        pointBorderColor: "#fff",
        pointBackgroundColor: "rgba(255,99,132,1)", 
        pointBorderColor: "#fff",
        data: [25.48, 54.16, 7.61, 8.06, 4.45]
      }
    ]
  },
  options: {
    title: {
      display: true, text: 'Persentase distribusi populasi dunia'
    }
  }
});

new Chart(document.getElementById("polar-chart"), {
  type: 'polarArea',
  data: {
    labels: ['Srandakan', 'Sanden', 'Kretek', 'Pundong', 'Bambangpur', 'Pandak', 'Bantul', 'Jetis', 'Imogiri', 'Dlingo', 'Pleret', 'Piyungan', 'Banguntapan', 'Sewon', 'Kasihan', 'Pajangan', 'Sedayu'],
    datasets: [{
      label: 'Jumlah Penderita DBD',
      data: [25, 43, 66, 50, 77, 63, 74, 36, 23, 10, 40, 109, 50, 92, 107, 46, 38],
      backgroundColor: 'rgba(54, 162, 235, 0.6)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Penderita DBD perpuskesmas di bantul 2019'
    }
  }
});

var data1 = [500, 50, 2424, 4040, 14141, 4111,, 4544, 47, 5555, 6811];
var data1 = [1288, 8942, 4545, 7588, 99, 242,, 1417, 5504, 75, 457];
var data1 = ["P01", "P02", "P03", "P04", "P05", "P06",, "P07", "P08", "P09", "P10"];

//Scatter
var GKChart = document.getElementById("scatter").getContext('2d');

var data =[{
  x: 5,
  y: 4
},
{
  x: 2,
  y: 14
},
{
  x: 4,
  y: 12
},
{
  x: 2,
  y: 10
},
{
  x: 3,
  y: 4
},
{
  x: 3,
  y: 5
},
{
  x: 3,
  y: 8
},
{
  x: 6,
  y: 12
}];
var myChart = new Chart (GKChart, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Population',
      data: data,
      borderColor: '#2196f3',
      backgroundColor: '#2196f3',
    }]
  },
});

//Bubble
var GKChart = document.getElementById("bubble").getContext('2d');

var data =[{
  x: 5,
  y: 4,
  r: 10
},
{
  x: 2,
  y: 14,
  r: 5
},
{
  x: 4,
  y: 12,
  r: 15
},
{
  x: 2,
  y: 10,
  r: 7
},
{
  x: 3,
  y: 4,
  r: 50
},
{
  x: 3,
  y: 5,
  r: 12
},
{
  x: 3,
  y: 8,
  r: 8
},
{
  x: 6,
  y: 12,
  r: 5
}];
var myChart = new Chart (GKChart, {
  type: 'bubble',
  data: {
    datasets: [{
      label: 'Population',
      data: data,
      borderColor: '#2196f3',
      backgroundColor: [
        'rgba(255, 99,, 132, 1)',
        'rgba(54, 162,, 235, 1)',
        'rgba(255, 206,, 86, 1)',
        'rgba(75, 192,, 192, 1)',
        'rgba(153, 102,, 255, 1)',
        'rgba(255, 159,, 64, 1)'
      ],
    }]
  },
});

//Mixed
var GKChart = document.getElementById("mixed").getContext('2d');

var barTotalPopulationData = [22006299, 15834918, 14919501, 14797756, 14433147, 27880000]; //Add data values to array
var line1 = [120000, 15000000, 1454210, 240124, 3358452, 27852315];
var line2 = [5024554, 2001424, 4454201, 4565420, 5659888, 2783321];

var labels = ["Tokyo", "Mumbai", "Mexico City", "Shanghai", "Sao Paulo", "Indonesia"]; // Add labels to array

var myChart = new Chart(GKChart, {
  type: 'bar',
  data: {
    labels: labels,
    datasets:[{
      label: 'Population',
      data: barTotalPopulationData,
      backgroundColor: [
        'rgba(255, 99,, 132, 0.2)',
        'rgba(54, 162,, 235, 0.2)',
        'rgba(255, 206,, 86, 0.2)',
        'rgba(75, 192,, 192, 0.2)',
        'rgba(153, 102,, 255, 0.2)'
      ],

      borderWidth: 1
    },{
      label: 'Line1',
      data: line1,
      backgroundColor: '#f443368c',
      borderColor:'#f443368c',

      borderWidth: 1,
      type: 'line',
      fill: false
    },{
      label: 'Line2',
      data: line2,
      backgroundColor: '#2196f38c',
      borderColor:'#2196f38c',

      borderWidth: 1,
      type: 'line',
      fill: false
    }]
  },
});

document.getElementById('myChart').onclick = function(evt) {
  var activePoint = myChart.getElementAtEvent(evt)[0];
  if (activePoint) {
      var data = activePoint._chart.data;
      var datasetIndex = activePoint._datasetIndex;
      var index = activePoint._index;
      var value = data.datasets[datasetIndex].data[index];
      alert(value);
  }
};