import mitt, { Emitter, EventType } from 'mitt';

export class Mitt {
  private mitt: Emitter<Record<EventType, unknown>>;

  constructor() {
    this.mitt = mitt();
  }

  on(eventName: string | symbol, listener: (...args: any[]) => void) {
    this.mitt.on(eventName, listener);
  }

  off(eventName: string | symbol, listener: (...args: any[]) => void) {
    this.mitt.off(eventName, listener);
  }

  emit(eventName: string | symbol, args: any) {
    this.mitt.emit(eventName, args);
  }
}
