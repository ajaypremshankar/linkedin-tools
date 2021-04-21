let capsLetter = /^[A-Z]{1}$/;
let smallLetter = /^[a-z]{1}$/;

export default function toUnicode(
  str: string,
  options: { bold: boolean; italic: boolean }
) {
  let inputCodePoint: number = str.codePointAt(0) || 0;

  if (str.match(capsLetter)) {
    
    if (options.bold && options.italic) {
        return String.fromCodePoint(inputCodePoint + 119847);
    }

    if (options.bold) {
      return String.fromCodePoint(inputCodePoint + 119743); 
    }

    if (options.italic) {
        return String.fromCodePoint(inputCodePoint + 119795);
    }
    
  } else if (str.match(smallLetter)) {

    if (options.bold && options.italic) {
        return String.fromCodePoint(inputCodePoint + 119841);
    }

    if (options.bold) {
      return String.fromCodePoint(inputCodePoint + 119737);
    }

    if (options.italic) {
      if(str === 'h') {
        return String.fromCodePoint(8462);
      }
      return String.fromCodePoint(inputCodePoint + 119789);
    }
  }

  return str;
}
