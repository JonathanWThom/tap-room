import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "style",
  pure: false
})

export class StylePipe implements PipeTransform {
  transform(input: Keg[], desiredStyle) {
    var output: Keg[] = [];
    if (desiredStyle === "Belgian Ale") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].style === "Belgian Ale") {
          output.push(input[i]);
      }
    }
      return output;
    } else if (desiredStyle === "Red Ale") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].style === "Red Ale") {
            output.push(input[i]);
        }
      }
      return output;
    } else if (desiredStyle === "Lager") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].style === "Lager") {
            output.push(input[i]);
        }
      }
      return output;
    } else if (desiredStyle === "IPA") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].style === "IPA") {
            output.push(input[i]);
        }
      }
      return output;
    } else if (desiredStyle === "Stout") {
        for (var i = 0; i < input.length; i++) {
          if (input[i].style === "Stout") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredStyle === "Other") {
      for (var i=0; i < input.length; i++) {
        if (input[i].style === "Other") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
        return input;
    }
  }
}
