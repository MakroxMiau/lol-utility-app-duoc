import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WaveManagerPage } from './wave-manager.page';

describe('WaveManagerPage', () => {
  let component: WaveManagerPage;
  let fixture: ComponentFixture<WaveManagerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WaveManagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
