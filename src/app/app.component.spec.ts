import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'exemplo_cicd'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('exemplo_cicd');
  });

  it('deve chamar createMediaForm durante o ngOnInit', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    spyOn(app, 'createMediaForm');

    app.ngOnInit();

    expect(app.createMediaForm).toHaveBeenCalled();
  });

  it('deve criar o formulário de mídia durante o createMediaForm', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.createMediaForm();

    const mediaForm: FormGroup = app.mediaForm;

    expect(mediaForm).toBeDefined();

    expect(mediaForm.get('n1')).toBeTruthy();
    expect(mediaForm.get('n2')).toBeTruthy();
    expect(mediaForm.get('n3')).toBeTruthy();
  });

  it('deve calcular o resultado corretamente durante o submitForm', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.createMediaForm();
    app.mediaForm.setValue({ n1: '2', n2: '4', n3: '6' });

    app.submitForm();

    expect(app.resultado).toEqual((2 + 4 + 6) / 3);
  });
});
