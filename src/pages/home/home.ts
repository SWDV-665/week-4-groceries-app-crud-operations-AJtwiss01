import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { ToastController } from "ionic-angular";
import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServicesProvider } from '../../providers/input-dialog-services/input-dialog-services';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  title = "Groceries Home ";

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public dataService: GroceriesServiceProvider,
    public InputDialogServices: InputDialogServicesProvider

  ) {}
  
  loadItems(){
    return this.dataService.getItems()
  }
  
  addItem(){
    console.log('it adding')
    this.InputDialogServices.showPrompt()
  }
 
  removeItem(item, index) {

    let toast = this.toastCtrl.create({
      message: 'Remoiving Item - ' + item.name+ '....',
      duration: 3000,
      position: "top"
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });

    toast.present();
    this.dataService.removeItem(index)
  }
  editItem(item, index) {

    let toast = this.toastCtrl.create({
      message: 'Edit Item - ' + item.name+ '....',
      duration: 3000,
      position: "top"
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });

    toast.present();
    this.InputDialogServices.showPrompt(item,index)
  }
 
}
