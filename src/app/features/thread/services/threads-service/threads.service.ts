import { Injectable } from '@angular/core';

const THREAD_LENGTH = 255;

interface IRawThread {
  text: string;
  prefix: string;
  postfix: string;
}

@Injectable({ providedIn: 'root' })
export class ThreadsService {
  constructor() { }

  create({ text, prefix = '', postfix = '' }: IRawThread): void {
    const maxTextLength = THREAD_LENGTH - prefix.length - postfix.length;
    const result = this.splitToChunks(text, maxTextLength)
      .map((textChunk: string) => `${prefix}${textChunk}${postfix}`);
    console.log(result);
  }

  splitToChunks(inputString: string, chunkSize: number) {
    let words = inputString.split(' ');
    let chunks = [];
    let currentChunk = '';

    words.forEach((word) => {
      if ((currentChunk.length + word.length) <= chunkSize) {
        currentChunk += ' ' + word;
      } else {
        chunks.push(currentChunk.trim());
        currentChunk = word;
      }
    });

    chunks.push(currentChunk.trim());

    return chunks;
}
}