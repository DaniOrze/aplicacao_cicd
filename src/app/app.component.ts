import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'exemplo_cicd';

  public mediaForm!: FormGroup;

  public resultado: number | undefined;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createMediaForm();
  }

  createMediaForm(): void {
    this.mediaForm = this.formBuilder.group({
      n1: [''],
      n2: [''],
      n3: [''],
    });
  }

  public submitForm(): void {
    const getn1Value = parseFloat(this.mediaForm.get('n1')?.value);
    const getn2Value = parseFloat(this.mediaForm.get('n2')?.value);
    const getn3Value = parseFloat(this.mediaForm.get('n3')?.value);

    this.resultado = (getn1Value + getn2Value + getn3Value) / 3;

    this.mediaForm.patchValue({
      n1: '',
      n2: '',
      n3: '',
    });
  }
}
