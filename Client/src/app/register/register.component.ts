import { AccountService } from './../services/account.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: any = {}

  @Output() cancelRegister = new EventEmitter()

  constructor(private accountService:  AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  Register() {
    this.accountService.Register(this.model).subscribe(response => {
      this.cancel();
    }, error => {
      console.log(error);
      this.toastr.error(error.error)
    })
  }

  cancel() {
    this.cancelRegister.emit()
  }

}
