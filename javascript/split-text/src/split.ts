import { text } from './text';

const segments: string[] = [];
let startCounter = -1; // need think to change the logic but not the startCounter = 0

for (let idx: number = 0; idx < text.length; idx++) {
  let character: number = text.charCodeAt(idx);
  if (character === 44) {
    // code '44' is for comma sign ','
    segments.push(text.substring(startCounter + 1, idx));
    startCounter = Number(idx) + 1;
    console.log(`startCounter - ${startCounter} and idx - ${idx}`);
  }
}
segments.push(text.substring(startCounter + 1));

console.log(segments);
