import { Component } from '@angular/core';

@Component({
  selector: 'page-shortcut',
  templateUrl: 'shortcut.html',
})

export class ShortcutPage{

  cut: {recyclable1: string, recyclable2: string, recyclable3: string, recyclable4: string, recyclable5: string, location: string} = {
    recyclable1: 'Battery',    
    recyclable2: 'Bottle',    
    recyclable3: 'Metal',    
    recyclable4: 'Paper',
    recyclable5: 'Plastic',
    location: 'Cabanatuan City',
  };
  isReadonly() {
    return this.isReadonly;   //return true/false 
  }
  }