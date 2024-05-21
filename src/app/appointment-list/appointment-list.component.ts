import { FormsModule } from '@angular/forms';
import { Appointment } from '../models/appointment';
import { Component, Input, numberAttribute, booleanAttribute } from '@angular/core';  
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
  standalone:true,
  imports:[FormsModule, NgForOf]
})
export class AppointmentListComponent {

  @Input() newAppTitle:string='';
  @Input() newAppDate:Date= new Date();
  appointments:Appointment[]=[];

  createAppointment(){
    if(this.newAppTitle.trim().length&&this.newAppDate){
      let newApp:Appointment={
        id:Date.now(),
        title:this.newAppTitle,
        date:this.newAppDate
      }
      this.appointments.push(newApp)
      this.newAppDate=new Date()
      this.newAppTitle=""
      alert(this.appointments.length)
    }
  }
  deleteAppointment(index:number){
    this.appointments.splice(index,1)
  }
}
