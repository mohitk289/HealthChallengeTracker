// src/app/models/user.model.ts

// Define the interface for a single workout
export interface Workout {
    type: string;  // Type of workout (e.g., Running, Cycling)
    minutes: number;  // Duration of workout in minutes
  }
  
  // Define the interface for a user
  export interface User {
    id: number;  // Unique identifier for the user
    name: string;  // Name of the user
    workouts: Workout[];  // List of workouts associated with the user
  }
  