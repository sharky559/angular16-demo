import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
  ],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  private _authService = inject(AuthService);
  private _fb = inject(FormBuilder);
  private _router = inject(Router);

  constructor() {
    this.loginForm = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    // 检查是否已经登录
    if (this._authService.isLoggedIn()) {
      this._router.navigate(['/list']);
    }
  }

  login(): void {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value.username);
      // 跳转到列表页面
      this._router.navigate(['/list']);
    }
  }
}
