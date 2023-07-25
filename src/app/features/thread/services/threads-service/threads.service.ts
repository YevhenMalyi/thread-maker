import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const THREAD_LENGTH = 255;

interface IRawThread {
  text: string;
  prefix: string;
  postfix: string;
}

@Injectable({ providedIn: 'root' })
export class ThreadsService {
  private readonly thread$ = new BehaviorSubject<string[]>([]);

  get(): Observable<string[]> {
    return this.thread$.asObservable();
  }

  update(rawThread: IRawThread) {
    const processedThread = this.process(rawThread);
    this.thread$.next(processedThread);
  }

  process({ text, prefix = '', postfix = '' }: IRawThread): string[] {
    return this.splitByParagraph(text)
      .map(chunk =>  this.splitBySentence(chunk, prefix, postfix))
      .flat()
      .map(chunk =>  this.splitByWord(chunk, prefix, postfix))
      .flat();
  }

  splitByParagraph(text: string): string[] {
    return text.split('\n').filter(chunk => chunk.length !== 0);
  }

  splitBySentence(text: string, prefix: string, postfix: string): string[] {
    const maxTextLength = THREAD_LENGTH - prefix.length - postfix.length;
    return this.splitToChunks(text, maxTextLength, '. ')
      .filter(chunk => chunk.length !== 0);
  }

  splitByWord(text: string, prefix: string, postfix: string): string[] {
    const maxTextLength = THREAD_LENGTH - prefix.length - postfix.length;
    return this.splitToChunks(text, maxTextLength, ' ')
      .map((textChunk: string) => `${prefix}${textChunk}${postfix}`);
  }

  splitToChunks(inputString: string, chunkSize: number, splitBy: string) {
    let words = inputString.split(splitBy);
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

  log(data: string[]): void {
    console.log(data, data.map(item => item.length));
  }
}

const a = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum justo vel sapien ullamcorper scelerisque. Donec efficitur euismod aliquam. Nunc porta tempus nibh. Phasellus gravida interdum odio, id tristique purus fermentum sit amet. Quisque facilisis faucibus ante. In a est ut orci facilisis aliquet. Mauris pellentesque ligula non mi fringilla posuere. Aenean lectus metus, sagittis et eros fringilla, volutpat rhoncus lorem.
Vestibulum vestibulum et lorem eu congue. Integer eu nulla euismod, dictum ante nec, vestibulum augue. Pellentesque quis pharetra leo. Vestibulum in tristique est. Nam pharetra, nunc at vulputate aliquet, dui odio gravida dolor, vel tincidunt elit velit at libero. Cras consequat, orci quis gravida ullamcorper, ante ligula molestie enim, ac gravida urna ex quis mi. Praesent augue velit, fermentum sit amet mattis ut, laoreet sed elit.
Sed ultrices ligula at enim venenatis, id sodales eros lacinia. Mauris sapien tortor, rutrum eget finibus eget, tempus a magna. Curabitur nec tincidunt urna. Proin sit amet sapien posuere, fermentum ligula rutrum, tristique dui. Nam a lorem facilisis, efficitur tortor eget, tincidunt diam. Nullam ac posuere purus, eu placerat felis. Vivamus odio velit, fringilla in ipsum sit amet, vulputate consequat dolor. Maecenas venenatis nunc in lectus pretium, id tincidunt dui finibus. Nullam in risus nunc. Suspendisse sollicitudin luctus enim. Nullam metus ex, consequat dictum ornare non, laoreet sit amet risus. Integer est diam, porta in aliquet at, interdum sed quam. Vestibulum sed ex nunc. Donec consequat semper massa.
Fusce malesuada enim in turpis porttitor, at eleifend sem dictum Quisque imperdiet eros ipsum Vivamus non tincidunt purus Donec nec varius mauris Maecenas rhoncus a tortor sed dapibus Mauris mi dui, vestibulum ac egestas luctus, interdum ut erat Nunc convallis elit at dui posuere, et pellentesque dolor tristique Suspendisse feugiat purus quis risus ultrices sodales Donec tincidunt semper orci Sed id nunc accumsan, rutrum tellus at, vehicula lorem Phasellus sed porttitor velit Aenean eu rhoncus magna.
`;