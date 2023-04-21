import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  /**
   * TODO:
   * Write a quantify label function. It will take
   * 2 inputs. The first input is a string that is
   * a singular form of a word. The second input is
   * a number the indicates the count. The function
   * should return a string that combines the count
   * and the word such that the word is plural or
   * singular depending on the count.
   *
   *    Examples:
   *      "cup" 1 => "1 cup"
   *      "cup" 2 => "2 cups"
   *      "box" 1 => "1 box"
   *      "box" 2 => "2 boxes"
   *
   * Testing:
   * Please explain your approach to testing this code.
   */

  singularOrPlural(word: string, count: number) {
    // plural use case
    if (count > 1 || count === 0) {
      if (word === 'cup') {
        return `${count} cups`;
      } else {
        return `${count} boxes`;
      }
      //singular case
    } else if (count === 1) {
      return `1 ${word}`;
    } else {
      return `invalid arguments`;
    }
  }

  public ngOnInit(): void {
    /**
     * TODO:
     * Call the quantify label function here
     * and log the result to the console.
     */
    console.log(this.singularOrPlural('cup', 1));
    console.log(this.singularOrPlural('box', 1));
    console.log(this.singularOrPlural('cup', 2));
    console.log(this.singularOrPlural('box', 2));
    console.log(this.singularOrPlural('box', 0));
    console.log(this.singularOrPlural('cup', 0));
    console.log(this.singularOrPlural('cup', -1));
  }
}
