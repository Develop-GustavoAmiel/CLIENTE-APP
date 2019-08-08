import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente'
import { CLIENTES } from './clientes.json'

@Component({
	selector: 'app-clientes',
	templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {
	habilitar: boolean = true;

	public setMostrar(): void {
		this.habilitar = (this.habilitar == true) ? false : true
	}

	clientes: Cliente[];

	constructor() { }

	ngOnInit() {
		this.clientes = CLIENTES;
	}

}
