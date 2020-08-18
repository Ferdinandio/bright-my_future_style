import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FederalPage } from './federal.page';

describe('FederalPage', () => {
  let component: FederalPage;
  let fixture: ComponentFixture<FederalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FederalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FederalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
