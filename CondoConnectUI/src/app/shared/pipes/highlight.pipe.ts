import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {

  transform(text: string, search: string): string {
    if (!search || !text) {
      return text;
    }
    const pattern = search.replace(/[-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\{new_string}");
    const regex = new RegExp(pattern, 'gi');
    return text.replace(regex, match => `<span class="highlight-text">${match}</span>`);
  }
}
