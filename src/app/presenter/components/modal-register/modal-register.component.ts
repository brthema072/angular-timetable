import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.css']
})
export class ModalRegisterComponent implements OnInit {

  successShowAlert: boolean = false;
  errorShowAlert: boolean = false;

  public registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    })
  }

  save(){
    if(this.registerForm.valid){
      this.userService.registerUser(this.registerForm.value).then((res: any) => {
        if(res.toString().includes("FirebaseError")){
          this.errorShowAlert = true

          setTimeout(() => {
            this.errorShowAlert = false
          }, 5000);
        }else{
          this.successShowAlert = true

          setTimeout(() => {
            this.successShowAlert = false
          }, 5000);
        }
        this.registerForm.reset()

      })
    }
  }

}
