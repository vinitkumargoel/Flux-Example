import AppDispatcher from "../dispatcher/AppDispatcher";
import { EventEmitter } from "events";

const CHANGE_EVENT = "change";

class AppStore extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

AppDispatcher.register(payload => {
  console.log(payload)
});

export default new AppStore();
