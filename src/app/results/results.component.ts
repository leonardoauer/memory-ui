import { Component, OnInit } from '@angular/core';
import { Memory } from '../app.model/memory';
import { Router } from '@angular/router';
import { MemoryService } from '../app.service/memory.service';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  memories: Memory[];

  constructor(
    private router: Router,
    private memoryService: MemoryService
  ) { }

  ngOnInit() {
    this.memoryService.getMemories().subscribe(memories => this.memories = memories);
  }

  onSelect(memory: Memory) {
    this.router.navigateByUrl('memory/view/' + memory.id);
  }
}
