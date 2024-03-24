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
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.pattern("^[0-9]*$"), Validators.minLength(6)]),
    text: new FormControl('', [Validators.required, Validators.minLength(20)])
}); 

    showAlert: boolean = false;

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
  this.showAlert = true;
} 

onGoHome() {
  this.router.navigateByUrl("home");
}

onCloseAlertButton() {
  this.showAlert = false;
}


}