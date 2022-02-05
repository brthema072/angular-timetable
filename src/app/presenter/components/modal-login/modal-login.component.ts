import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from 'src/app/model/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent implements OnInit {
  
  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  private buildUser(user: any): UserModel{
    return new UserModel(user.email, user.password)
  }

  login(){
    if(this.loginForm.valid){
      this.userService.login(this.buildUser(this.loginForm.value)).then((res: any) => {
        localStorage.setItem("user", JSON.stringify({
          name: res.name,
          email: res.email,
          phone: res.phone
        }))

        setTimeout(() => {
          location.reload()
        }, 500);
      })
    }
  }

}
