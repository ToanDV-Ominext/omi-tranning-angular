import { Component, OnInit } from '@angular/core';

import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  /**
   * コンストラクタ
   * @param loadingService ローディング用サービス
   * 
   * @remark ローディング用サービスはhtmlからも参照するためpublic宣言
   */
  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.stopLoading();
  }
}
