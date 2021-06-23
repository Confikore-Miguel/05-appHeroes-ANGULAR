import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Heroes } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styles: [
  ]
})
export class DialogComponent implements OnInit {


  constructor( 
      private dialogRef:MatDialogRef<DialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data:Heroes) { }

  ngOnInit(): void {
    
  }

  borrar(){
    this.dialogRef.close(true);
  }
  volver(){
    this.dialogRef.close();
  }

}
