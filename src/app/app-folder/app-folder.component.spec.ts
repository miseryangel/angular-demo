import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFolderComponent } from './app-folder.component';

describe('AppFolderComponent', () => {
  let component: AppFolderComponent;
  let fixture: ComponentFixture<AppFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
