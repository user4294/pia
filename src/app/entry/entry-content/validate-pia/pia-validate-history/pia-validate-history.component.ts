import {Component, ElementRef, OnInit} from '@angular/core';

import { Pia } from 'app/entry/pia.model';

import { PiaService } from 'app/entry/pia.service';

@Component({
  selector: 'app-pia-validate-history',
  templateUrl: './pia-validate-history.component.html',
  styleUrls: ['./pia-validate-history.component.scss'],
  providers: [PiaService]
})
export class PiaValidateHistoryComponent implements OnInit {

  constructor(private el: ElementRef, private _piaService: PiaService) { }

  ngOnInit() {
    this._piaService.getPIA();
  }

  displayHistoryList() {
    const historyList = this.el.nativeElement.querySelector('.pia-validationHistoryBlock-content');
    const btn = this.el.nativeElement.querySelector('.pia-historyBlock-btn span');
    btn.classList.toggle('pia-icon-accordeon-down');
    historyList.classList.toggle('close');
  }
  displayRefuseList() {
    const refuseList = this.el.nativeElement.querySelector('.pia-validationHistoryBlock-refuse-content');
    const btn = this.el.nativeElement.querySelector('.pia-refuseBlock-btn span');
    btn.classList.toggle('pia-icon-accordeon-down');
    refuseList.classList.toggle('close');
  }

}