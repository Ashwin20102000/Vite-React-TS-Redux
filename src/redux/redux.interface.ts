export interface ActionInterface {
  type:string;
  data:any
}

interface CounterData {
  operation:string;
  value:number;
}

export interface ActionCounter extends ActionInterface {
  data: CounterData
}

export interface CounterState {
  value:number|0;
}
export interface State {
  Counter:CounterState
}

