import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('widgetElement') widgetElement!: ElementRef;
  message = '';

  handleWidgetEvent(event: Event): void {
    const { detail } = event as CustomEvent;
    this.message = detail;
  }

  sendMessageToWidget(): void {
    this.widgetElement.nativeElement.widgetMethod('Message from sandbox');
  }
}
