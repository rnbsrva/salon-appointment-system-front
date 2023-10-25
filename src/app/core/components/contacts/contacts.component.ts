import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit{

  contactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ){
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      message: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    document.getElementById("closeModal")!.addEventListener("click", ()=> {
      document.getElementById("myModal")!.style.display = "none";
    });
  }

  get name() {
    return this.contactForm.get('name')!;
  }

  get email() {
    return this.contactForm.get('email')!;
  }

  get phone() {
    return this.contactForm.get('phone')!;
  }

  get message() {
    return this.contactForm.get('message')!;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      document.getElementById("myModal")!.style.display = "block";
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

}
