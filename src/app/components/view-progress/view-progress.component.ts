import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-view-progress',
  templateUrl: './view-progress.component.html',
  styleUrls: ['./view-progress.component.css']
})
export class ViewProgressComponent implements OnInit {
  users = [];
  totalUsers = 0;
  currentPage = 1;
  pageSize = 5;
  searchText = '';
  workoutFilter = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    const result = this.userService.searchUsers(this.searchText, this.workoutFilter, this.currentPage, this.pageSize);
    this.users = result.users;
    this.totalUsers = result.total;
  }

  nextPage() {
    if (this.currentPage * this.pageSize < this.totalUsers) {
      this.currentPage++;
      this.loadUsers();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  onSearch() {
    this.currentPage = 1; // Reset to first page on new search
    this.loadUsers();
  }

  onFilterChange(filter: string) {
    this.workoutFilter = filter;
    this.onSearch();
  }
}
