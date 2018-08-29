import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Memory } from '../app.model/memory';
import { MemoryService } from '../app.service/memory.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css']
})
export class MemoryComponent implements OnInit {

  memory: Memory;
  id: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memoryService: MemoryService
  ) { }

  ngOnInit() {
    console.log('we are at Memory Component');
    this.getMemory();
  }

  getMemory() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.memoryService.getMemory(this.id).subscribe( memory => this.memory = memory );
  }

}
