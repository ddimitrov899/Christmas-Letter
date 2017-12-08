import { Injectable } from '@angular/core';
import { ApiService } from '../core/api.service';

const path = 'stats';
@Injectable()
export class StatsService {

  constructor(private apiService: ApiService) { }
  getAllStats() {
    return this.apiService.get(path);
  }
}
