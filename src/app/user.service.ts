import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private storageKey = 'userData';

  constructor() {
    // Initialize with default data if empty
    if (!this.getUsers().length) {
      const initialData = [
        {
          id: 1,
          name: 'John Doe',
          workouts: [
            { type: 'Running', minutes: 30 },
            { type: 'Cycling', minutes: 45 }
          ]
        },
        {
          id: 2,
          name: 'Jane Smith',
          workouts: [
            { type: 'Swimming', minutes: 60 },
            { type: 'Running', minutes: 20 }
          ]
        },
        {
          id: 3,
          name: 'Mike Johnson',
          workouts: [
            { type: 'Yoga', minutes: 50 },
            { type: 'Cycling', minutes: 40 }
          ]
        }
      ];
      this.saveUsers(initialData);
    }
  }

  getUsers() {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveUsers(users: any[]) {
    localStorage.setItem(this.storageKey, JSON.stringify(users));
  }

  addUser(name: string, workoutType: string, workoutMinutes: number) {
    const users = this.getUsers();
    const user = users.find((user: any) => user.name === name);

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

  searchUsers(searchText: string, workoutFilter: string) {
    const users = this.getUsers();
    return users.filter((user: any) => {
      const matchesName = user.name.toLowerCase().includes(searchText.toLowerCase());
      const matchesWorkout = workoutFilter ? user.workouts.some((workout: any) =>
        workout.type.toLowerCase().includes(workoutFilter.toLowerCase())
      ) : true;
      return matchesName && matchesWorkout;
    });
  }
}
