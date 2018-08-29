import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Memory } from '../app.model/memory';
import { MemoryService } from '../app.service/memory.service';

declare var $: any;

@Component({
  selector: 'app-memory-create',
  templateUrl: './memory-create.component.html',
  styleUrls: ['./memory-create.component.css']
})
export class MemoryCreateComponent implements OnInit {

  memory: Memory = Memory.newInstance();

  constructor(
    private location: Location,
    private memoryService: MemoryService
  ) { }

  ngOnInit() {
    $('#textarea').wysihtml5({});
    $('#tags-id').tagEditor({
      autocomplete: {
        delay: 0, // show suggestions immediately
        position: { collision: 'flip' }, // automatic menu position up/down
        source: ['Java', 'J2ee', 'J2se', 'MySQL', 'Rest Api']},
      placeholder: 'Select 1 or more tags for your memory'
    });
  }

  addMemory() {
    this.memory.content.text = $('#textarea').val();
    this.memory.tags = $('#tags-id').tagEditor('getTags')[0];
    this.memoryService.addMemory(this.memory).subscribe(() => this.location.back());
  }
}
