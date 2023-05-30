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
    // this.dialogRef.updateSize('100%', '100%'); // changing form box size
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

  // private updateItem(newItem: Item): void {
  //   this.itemService.edit(newItem).subscribe(() => {
  //     this.dialogRef.close();
  //   }, (err) => {
  //     this.errorText = err.error;
  //   });
  // }

  // saveNewItem(): void {
  //   const newItem: Item = {
  //     ...this.itemToEdit,
  //     ...this.form.getRawValue(),
  //   };
  //   if (this.data.idToBeEdit == 0)
  //   this.addItem(newItem);
  //   else
  //   this.updateItem(newItem),
  // }
}
