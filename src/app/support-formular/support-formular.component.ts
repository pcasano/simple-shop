import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support-formular',
  templateUrl: './support-formular.component.html',
  styleUrl: './support-formular.component.css'
})
export class SupportFormularComponent {

  constructor(
    private messageService: MessageService,
    private router: Router) {}

  userForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl(''),
    country: new FormControl(''),
    telephone: new FormControl('')
}); 

onFormSubmit(): void {
  const obj = this.userForm.value;

  this.messageService.message = {
    firstName: obj.firstName,
    lastName: obj.lastName,
    email: obj.email,
    telephone: obj.telephone,
    text: obj.text,
  }

  this.userForm.reset();
} 

}