import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User, UserService} from "../../services/user";
import {HttpErrorResponse} from "@angular/common/http";


@Component({
  selector: 'page-reactive',
  templateUrl: 'reactive.html'
})
export class ReactivePage implements OnInit{
  private user: User;
  private form: FormGroup;
  private loading: boolean;
  private errorLoading: boolean;

  constructor(public navCtrl: NavController, private userService: UserService) {

  }

  ngOnInit(){
    this.loading = true;
    this.errorLoading = false;
    //El fomulario no modifica this.user, se añade para INICIALIZAR
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      birthDate: new FormControl(null),
      sex: new FormControl(null),
      phone: new FormControl(null),
      email: new FormControl(null)
    });

    this.getUser();

  }

  reload(){
    this.getUser();
  }

  getUser(){
    this.userService.getUser()
      .subscribe((item: User)=>{
        this.loading = false;
        this.user = item;
        this.form.patchValue(
          {
            name: item.name,
            birthDate: item.birthDate,
            sex: item.sex,
            phone: item.phone,
            email: item.email
          }
        );
        this.errorLoading = false;
      }, (error: HttpErrorResponse) => {
        this.loading = false;
        this.errorLoading = true;
      });
  }

  onSubmit(){
    // this.valid --> Devuelve si el formulario es o no válido
    console.log(this.form.value);
    this.user = this.form.value;
  }

}
