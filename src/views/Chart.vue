<template>
    <div class="Chart">
      <div>1</div>
      <canvas id="myChart"></canvas>
    </div>
  </template>
  <script setup>
  defineOptions({ name: "Chart" });
  import Chart from "chart.js/auto";
  import { ref, onMounted } from "vue";
  
  onMounted(() => {
    const ctx = document.getElementById("myChart");
  
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  });
  </script>
  