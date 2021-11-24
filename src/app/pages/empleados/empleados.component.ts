import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  empleados: any = [];
  dispositivo:any = {};
  valid_device:any = {};

  constructor(public _api: ApiService) { }

  ngOnInit(): void {
    this._api.get('employee/list', {}).subscribe(employees => {
        let Employees:any = {}; Employees = employees; 
        this.empleados = Employees.data;
    });
  }

  selectEmployee(ide:any) : void {
    this.valid_device.employee = ide;
  }

  buscarD() : void {
    this._api.get('devices/'+this.dispositivo.serial , {id: this.dispositivo.serial }).subscribe(device => {
        let Device:any = {}; Device = device; 
        this.dispositivo = Device.data;
        this.valid_device.device = this.dispositivo.serial;
    });
  }

  asignar() : void {
    this._api.post('employee/asign_device', this.valid_device).subscribe(asigned => {
      let res:any = {};
          res = asigned;

      if(res.success){
        alert(res.msg);
      }else{
        alert(res.msg);
      }
          
      console.log(asigned); 
    });
  }

}
