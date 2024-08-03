import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { CommonModule } from '@angular/common'; // Import CommonModule
import { UserService } from '../../user.service'; // Adjust the path as necessary
import { User } from '../../models/user.model'; // Ensure this path is correct

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule], // Add the imported modules here
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  searchText: string = '';
  workoutFilter: string = '';
  paginatedUsers: User[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10; // Number of items per page

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.updateUserList();
  }

  updateUserList(): void {
    this.users = this.userService.searchUsers(this.searchText, this.workoutFilter);
    this.paginate(this.currentPage); // Paginate the updated user list
  }

  search(): void {
    this.updateUserList(); // Update user list based on search and filter criteria
  }

  onSearchChange(searchText: string): void {
    this.searchText = searchText;
    this.search(); // Call search method
  }

  onFilterChange(workoutFilter: string): void {
    this.workoutFilter = workoutFilter;
    this.search(); // Call search method
  }

  paginate(page: number): void {
    this.currentPage = page;
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedUsers = this.users.slice(startIndex, endIndex);
  }
}
