import { Component, ElementRef, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: { 
    defaultOptions: Array<any>, accessLink: Array<any> 
  } = { defaultOptions: [], accessLink:[] }

  customOptions: Array<any> = []

  constructor(private cookieService: CookieService, private router: Router) {}

  isAdmin(): any {
    const userRole = this.cookieService.get('role'); 
    return userRole
  }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history']
      },
      {
        name: 'Tu biblioteca',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        // query: { hola: 'mundo' }
      }
    ]
    console.log(this.isAdmin())
    if (this.isAdmin() === "admin") {
      this.mainMenu.defaultOptions.push({
        name: 'Configuración',
        icon: 'uil uil-cog',
        router: ['/', 'admin'],
        role: 'admin'
      });
    }

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]
  }

  logout(): void {
    // Elimina todas las cookies al seleccionar logout
    this.cookieService.deleteAll();
    
    // Redirige al usuario a la página de inicio o a donde desees después del logout
    this.router.navigate(['auth/login']); // Reemplaza '/login' con la ruta adecuada

    // Si deseas limpiar el array de opciones después del logout, puedes hacerlo así:
    this.mainMenu.defaultOptions = [];
    this.mainMenu.accessLink = [];
    this.customOptions = [];
  }
}


