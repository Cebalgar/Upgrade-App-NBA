import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersContentComponent } from './players-content.component';

describe('PlayersContentComponent', () => {
  let component: PlayersContentComponent;
  let fixture: ComponentFixture<PlayersContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayersContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
