import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  addressForm = this.fb.group({
    company: null,
    name: [null, Validators.required],
    address: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    alert('登録完了');
  }
}
