import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-workout-chart',
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.css'],
  standalone: true,
  imports: [BaseChartDirective]
})
export class WorkoutChartComponent implements OnInit {
  chartData: ChartConfiguration['data'] = {
    labels: ['Workout A', 'Workout B', 'Workout C'],  // Update labels as necessary
    datasets: [
      {
        data: [65, 59, 80],  // Update data as necessary
        label: 'User Workouts',
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Customize background color
        borderColor: 'rgba(75, 192, 192, 1)',       // Customize border color
        borderWidth: 1,
        fill: true // Fill the area under the line chart if applicable
      }
    ]
  };
  
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top', // Adjust legend position
      },
      tooltip: {
        enabled: true, // Enable tooltips
      }
    },
    scales: {
      y: {
        beginAtZero: true, // Start Y-axis at 0
      }
    }
  };

  chartType: ChartType = 'bar'; // Change this to 'line' or 'pie' if needed

  constructor() {}

  ngOnInit(): void {}
}
