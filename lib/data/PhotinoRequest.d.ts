import { PhotinoData } from './PhotinoData';
export interface PhotinoRequest extends PhotinoData {
    module: string;
    method: string;
    parameters: any[];
}
