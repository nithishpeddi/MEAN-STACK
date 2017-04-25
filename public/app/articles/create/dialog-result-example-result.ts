import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  templateUrl: './dialog-result-example-result.html'
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}