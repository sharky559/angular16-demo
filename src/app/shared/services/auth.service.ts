import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly key = 'userInfo';

  login(username: string): void {
    const userInfo = {
      username,
      loginTime: new Date().toISOString()
    };
    localStorage.setItem(this.key, JSON.stringify(userInfo));
  }

  getUser(): any {
    const data = localStorage.getItem(this.key);
    return data ? JSON.parse(data) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  logout(): void {
    localStorage.removeItem(this.key);
  }
}
