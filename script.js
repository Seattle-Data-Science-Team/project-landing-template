// Corridor Chart
const corridorCtx = document.getElementById('corridorChart');
new Chart(corridorCtx, {
  type: 'bar',
  data: {
    labels: Array.from({ length: 8 }, (_, i) => `P${i+1}`),
    datasets: [{
      data: Array.from({ length: 8 }, () => Math.floor(Math.random() * 8 + 1)),
      backgroundColor: '#f8b500',
      borderRadius: 4
    }]
  },
  options: {
    plugins: { legend: { display: false }},
    scales: { x: { display: false }, y: { display: false }},
    responsive: true
  }
});

// Segment Chart
const segmentCtx = document.getElementById('segmentChart');
new Chart(segmentCtx, {
  type: 'bar',
  data: {
    labels: Array.from({ length: 15 }, (_, i) => i + 1),
    datasets: [{
      data: Array.from({ length: 15 }, () => Math.floor(Math.random() * 20 + 1)),
      backgroundColor: '#f8b500',
      borderRadius: 4
    }]
  },
  options: {
    plugins: { legend: { display: false }},
    scales: { x: { display: false }, y: { display: false }},
    responsive: true
  }
});
