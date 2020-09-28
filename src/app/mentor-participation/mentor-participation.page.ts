import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mentor-participation',
  templateUrl: './mentor-participation.page.html',
  styleUrls: ['./mentor-participation.page.scss'],
})

export class MentorParticipationPage {

  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Данные успешно отправлены',
      duration: 2000
    });
    toast.present();
  }

}
