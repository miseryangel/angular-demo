import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonAppsComponent } from './common-apps.component';

describe('CommonAppsComponent', () => {
  let component: CommonAppsComponent;
  let fixture: ComponentFixture<CommonAppsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonAppsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
