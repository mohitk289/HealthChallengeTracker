import { Injectable } from '@angular/core';
import { User } from './models/user.model';  // Ensure this path is correct

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'userData';

  constructor() {
    // Initialize with default data if empty
    if (!this.getUsers().length) {
      const initialData: User[] = [
        // Initial data here if needed
      ];
      this.saveUsers(initialData);
    }
  }

  getUsers(): User[] {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    } catch (error) {
      console.error('Failed to parse user data from localStorage', error);
      return [];
    }
  }

  saveUsers(users: User[]): void {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(users));
    } catch (error) {
      console.error('Failed to save user data to localStorage', error);
    }
  }

  addUser(name: string, workoutType: string, workoutMinutes: number): void {
    const users = this.getUsers();
    const user = users.find(user => user.name === name);

    if (user) {
      user.workouts.push({ type: workoutType, minutes: workoutMinutes });
    } else {
      users.push({
        id: users.length + 1,
        name: name,
        workouts: [{ type: workoutType, minutes: workoutMinutes }]
      });
    }

    this.saveUsers(users);
  }

  searchUsers(searchText: string, workoutFilter: string): User[] {
    const users = this.getUsers();

    return users.filter(user => {
      const matchesText = user.name.toLowerCase().includes(searchText.toLowerCase());
      const matchesWorkout = workoutFilter ? user.workouts.some(workout => workout.type.toLowerCase().includes(workoutFilter.toLowerCase())) : true;

      return matchesText && matchesWorkout;
    });
  }
}
