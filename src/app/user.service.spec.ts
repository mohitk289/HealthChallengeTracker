import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new user', () => {
    service.addUser('New User', 'Running', 30);
    const users = service.getUsers();
    expect(users.length).toBe(4);
    expect(users[3].name).toBe('New User');
    expect(users[3].workouts.length).toBe(1);
  });

  it('should add a workout to an existing user', () => {
    service.addUser('John Doe', 'Swimming', 60);
    const users = service.getUsers();
    expect(users[0].workouts.length).toBe(3);
  });
});
