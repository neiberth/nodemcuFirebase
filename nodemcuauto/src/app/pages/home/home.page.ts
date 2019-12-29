import { Sensor } from './../../inferfaces/sensor';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public sensor: Sensor = {};

  constructor(
    public db: AngularFireDatabase,
    private menu: MenuController,
    private menuCTL: MenuController) { }


 
  ngOnInit() {
    this.getSensor();
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  getSensor() {
    let listSensores = this.db.database.ref('/Sensores');
    listSensores.on('value', (snapshot) => {
      const items = snapshot.val();
      console.log(items);
    })

  }

  listaMenu(){
    this.menuCTL.toggle();
  }
}
