import AppDispatcher from "../dispatcher/AppDispatcher";
import { EventEmitter } from "events";

let _items = [];
const CHANGE_EVENT = "change";

function addItem(article) {
  _items.push(article);
}

class AppStore extends EventEmitter {
  constructor() {
    super();
    this.dispatchToken = AppDispatcher.register(payload => {
      addItem(payload.action.item);
      this.emitChange();
      return true;
    });
  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  getAll() {
    return _items;
  }
  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

export default new AppStore();
