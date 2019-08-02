import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() detalleProducto: any = null;
  @Output() cerrar = new EventEmitter();

  constructor() { }

  ngOnInit() {
    $('.container').css({
      minHeight: $(window).height()
    })
    $('.fas.fa-th').css({
      color: 'orange'
    })
  }

  onCerrar(){
    this.cerrar.emit();
  }

}

