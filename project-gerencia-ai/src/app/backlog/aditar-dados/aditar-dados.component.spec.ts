import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AditarDadosComponent } from './aditar-dados.component';

describe('AditarDadosComponent', () => {
  let component: AditarDadosComponent;
  let fixture: ComponentFixture<AditarDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AditarDadosComponent]
    });
    fixture = TestBed.createComponent(AditarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
