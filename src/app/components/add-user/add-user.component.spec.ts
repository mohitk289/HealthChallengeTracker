import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user.component';
import { UserService } from '../../user.service';

describe('AddUserComponent', () => {
  let component: AddUserComponent;
  let fixture: ComponentFixture<AddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserComponent ],
      imports: [ FormsModule ],
      providers: [ UserService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a user', () => {
    const userService = TestBed.inject(UserService);
    spyOn(userService, 'addUser').and.callThrough();

    component.userName = 'Test User';
    component.workoutType = 'Running';
    component.workoutMinutes = 45;
    component.addUser();

    expect(userService.addUser).toHaveBeenCalledWith('Test User', 'Running', 45);
  });
});
