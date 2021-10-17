import { PhotinoData } from './PhotinoData';

export interface PhotinoResponse extends PhotinoData {
  result?: any;
  error?: string;
}
