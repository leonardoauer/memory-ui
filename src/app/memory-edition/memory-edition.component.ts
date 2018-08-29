import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Memory } from '../app.model/memory';
import { MemoryService } from '../app.service/memory.service';

declare var $: any;

@Component({
  selector: 'app-memory-edition',
  templateUrl: './memory-edition.component.html',
  styleUrls: ['./memory-edition.component.css']
})
export class MemoryEditionComponent implements OnInit {

  id: string;
  memory: Memory;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private memoryService: MemoryService
  ) { }

  ngOnInit() {
    this.getMemory();
  }

  getMemory() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.memoryService.getMemory(this.id).subscribe(memory => {
      this.memory = memory;

      // https://stackoverflow.com/a/25042813/3254992
      setTimeout(function() { $('#textarea').wysihtml5({}); }, 0);

      // or create an ngInit
      // https://stackoverflow.com/a/37753794/3254992
    });
  }

  updateMemory() {
    this.memory.content.text = $('#textarea').val();
    this.memoryService.updateMemory(this.memory).subscribe(() => this.location.back());
  }
}
