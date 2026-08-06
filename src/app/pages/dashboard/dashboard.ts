import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { VehicleService, Vehicle } from '../../services/vehicles';


@Component({
  selector: 'app-dashboard',
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {

  vehicles: Vehicle[] = [];

  search: string = '';

  selectedVehicle?: Vehicle;


  constructor(
    private vehicleService: VehicleService,
    private router: Router
  ) {}


  ngOnInit(): void {

    this.vehicleService.getVehicles()
      .subscribe((data: any) => {

        this.vehicles = Object.values(data);

        console.log("Veículos carregados:", this.vehicles);

      });

  }


  searchVehicle(): void {

    const searchedName = this.search
      .toLowerCase()
      .trim();


    this.selectedVehicle = this.vehicles.find(vehicle =>
      vehicle.vehicle
        .toLowerCase()
        .trim()
        .includes(searchedName)
    );


    console.log("Pesquisa:", searchedName);
    console.log("Resultado:", this.selectedVehicle);

  }


  logout(){

    this.router.navigate(['/login']);

  }

}