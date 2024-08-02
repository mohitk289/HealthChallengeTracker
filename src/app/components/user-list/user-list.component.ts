import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  users = [];
  searchText = '';
  workoutFilter = '';
  page = 1;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  search() {
    this.users = this.userService.searchUsers(this.searchText, this.workoutFilter);
  }

  clearFilters() {
    this.searchText = '';
    this.workoutFilter = '';
    this.users = this.userService.getUsers();
  }

  paginate(event: any) {
    this.page = event.page + 1;
  }
}
