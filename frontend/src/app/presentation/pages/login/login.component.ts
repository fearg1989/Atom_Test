import { Component } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service'; 
import { Router } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';   

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class LoginComponent {
  email: string = '';

  constructor(private userService: UserService, private router: Router) {}

  login(): void  {
    if (!this.email.trim()) return;  

    this.userService.login(this.email).subscribe(
      (response: User) => {  
        console.log('Login exitoso:', response);
        localStorage.setItem('userEmail', this.email);  
        this.router.navigate(['/tasks']);
      },
      (error: any) => {  
        console.error('Error en login:', error);

        if (error.status === 404) {
          const confirmRegister = confirm('El usuario no existe. ¿Deseas registrarlo?');

          if (confirmRegister) { 
            this.userService.registerUser(this.email).subscribe( 
              (registerResponse: User) => {
                console.log('Usuario registrado:', registerResponse);
                localStorage.setItem('userEmail', this.email);  
                this.router.navigate(['/tasks']);  
              },
              (registerError: any) => {
                console.error('Error al registrar usuario:', registerError);
                alert('Hubo un problema al registrar el usuario. Inténtalo de nuevo.');
              }
            );
          } else {
            alert('Registro cancelado.');  
          }
        }
      }
    );
  }
}
