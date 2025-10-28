import { decompress } from 'fzstd';
import BaseDecoder from './basedecoder.js';

export default class ZstdDecoder extends BaseDecoder {
  decodeBlock(buffer) {
    return decompress(new Uint8Array(buffer)).buffer;
  }
}
