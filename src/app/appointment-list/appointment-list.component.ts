import { FormsModule } from '@angular/forms';
import { Appointment } from '../models/appointment';
import { Component, Input, numberAttribute, booleanAttribute } from '@angular/core';  
import { NgFor, NgForOf } from '@angular/common';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
  standalone:true,
  imports:[FormsModule, NgForOf]
})
export class AppointmentListComponent implements OnInit{
  ngOnInit(): void {
    console.log("loaded");
    let savedData = localStorage.getItem("appointments")
    this.appointments = savedData ? JSON.parse(savedData) : []  
  }

  @Input() newAppTitle : string = '' ;
  @Input() newAppDate : Date = new Date() ;

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
      localStorage.setItem("appointments", JSON.stringify(this.appointments))

      alert(this.appointments.length)

    }
  }
  deleteAppointment(index:number){
    this.appointments.splice(index,1)
    localStorage.setItem("appointments", JSON.stringify(this.appointments))
  }

}
