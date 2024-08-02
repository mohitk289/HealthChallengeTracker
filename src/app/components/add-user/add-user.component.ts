import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../user.service'; 

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userName = '';
  workoutType = '';
  workoutMinutes = 0;

  constructor(private userService: UserService) {}

  addUser() {
    if (this.userName && this.workoutType && this.workoutMinutes > 0) {
      this.userService.addUser(this.userName, this.workoutType, this.workoutMinutes);
      this.userName = '';
      this.workoutType = '';
      this.workoutMinutes = 0;
    }
  }
}
