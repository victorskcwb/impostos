import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front';

  constructor(private fb: FormBuilder) {}

  form:any = this.fb.group({
    valor: new FormControl(0),
    pro_labore: new FormControl(0),
    inss: new FormControl(0),
    primeira_transferencia: new FormControl(0),
  })

  calcular() {
    // format number .2

    this.form.get('pro_labore').setValue(Number(this.form.get('valor').value * 0.28 + 50).toFixed(2))
    this.form.get('inss').setValue(Number(this.form.get('pro_labore').value * 0.11).toFixed(2))
    this.form.get('primeira_transferencia').setValue(Number(this.form.get('pro_labore').value - this.form.get('inss').value).toFixed(2))

  }
}
