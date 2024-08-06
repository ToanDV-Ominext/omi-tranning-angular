import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading: boolean;   //HTMLからも参照したいためPublic設定

  constructor() {}

  /**
   * Starts loading
   */
  startLoading() {
    this.isLoading = true;
  }

  /**
   * Stops loading
   */
  stopLoading() {
    this.isLoading = false;
  }
}

