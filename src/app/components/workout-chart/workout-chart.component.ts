import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-workout-chart',
  templateUrl: './workout-chart.component.html',
  styleUrls: ['./workout-chart.component.css']
})
export class WorkoutChartComponent implements OnInit {
  @Input() user: any;
  chart: Chart<'bar'> | null = null; // Initialize with null

  ngOnInit() {
    this.createChart();
  }

  createChart() {
    // Define the types for workouts and accumulated data
    interface Workout {
      type: string;
      minutes: number;
    }

    interface WorkoutData {
      labels: string[];
      data: number[];
    }

    // Initialize the accumulator with a typed object
    const initialWorkoutData: WorkoutData = { labels: [], data: [] };

    // Use explicit type for accumulator
    const workoutData: WorkoutData = this.user.workouts.reduce((acc: WorkoutData, workout: Workout) => {
      acc.labels.push(workout.type);
      acc.data.push(workout.minutes);
      return acc;
    }, initialWorkoutData);

    const chartData: ChartData<'bar'> = {
      labels: workoutData.labels,
      datasets: [{
        label: 'Workout Minutes',
        data: workoutData.data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }]
    };

    const chartOptions: ChartOptions<'bar'> = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top' as const,
        },
        tooltip: {
          callbacks: {
            label: function(tooltipItem) {
              return `Minutes: ${tooltipItem.raw}`;
            }
          }
        }
      }
    };

    if (this.chart) {
      this.chart.destroy(); // Destroy existing chart instance to avoid memory leaks
    }

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: chartData,
      options: chartOptions
    });
  }
}
