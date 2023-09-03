import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarDadosComponent } from './adicionar-dados.component';

describe('AdicionarDadosComponent', () => {
  let component: AdicionarDadosComponent;
  let fixture: ComponentFixture<AdicionarDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdicionarDadosComponent]
    });
    fixture = TestBed.createComponent(AdicionarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
