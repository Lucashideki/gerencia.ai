import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDadosComponent } from './listar-dados.component';

describe('ListarDadosComponent', () => {
  let component: ListarDadosComponent;
  let fixture: ComponentFixture<ListarDadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDadosComponent]
    });
    fixture = TestBed.createComponent(ListarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
