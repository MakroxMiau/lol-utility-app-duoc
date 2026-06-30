import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemposPage } from './tempos.page';

describe('TemposPage', () => {
  let component: TemposPage;
  let fixture: ComponentFixture<TemposPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TemposPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
