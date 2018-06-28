import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})

export class TodolistComponent implements OnInit {
  @ViewChild('text') public inputText;

  public itemText: string;
  public itemList = [];
  public completedList = [];
  constructor() { }

  ngOnInit() {

  }

  // User clicked on add Button
  // If there is any text inside the item field,add that text to the todo list.
  onAddItem() {
    if (this.itemText) {
      const listItem = {
        'name': this.itemText
      };
      this.itemList.push(listItem);
    }
    this.itemText = '';
    this.inputText.nativeElement.focus();
  }

  // Remove Item on click of delete button
  removeItem(i) {
    const actualIndex = this.itemList.length - 1 - i;
    // console.log(i, this.itemList.length - 1 - i);
    this.itemList.splice(actualIndex, 1);
  }
  removeSelectedItem(i) {
    const actualIndex = this.completedList.length - 1 - i;
    // console.log(i, this.itemList.length - 1 - i);
    this.completedList.splice(actualIndex, 1);
  }

  completedItem(itemdisplayed, i) {
    this.completedList.push(itemdisplayed);
    this.removeItem(i);
    console.log(this.completedList);
  }

   addItemBack(listCompleted, i) {
    this.itemList.push(listCompleted);
    this.removeSelectedItem(i);
  }





}
