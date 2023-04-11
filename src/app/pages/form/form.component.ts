import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form!: FormGroup;
  constructor(public dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[], private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.CreateForm();
  }

  private CreateForm(): void{
    this.form = this.formBuilder.group({
      name:[null],
      descriere: [null],
      cantitate: [null]
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
