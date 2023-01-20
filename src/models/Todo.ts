export default class Todo {
  id?: string;
  text: string;
  constructor(todoText: string, id?: string) {
    this.id =
      id === undefined
        ? new Date().toISOString() + Math.random().toString()
        : id;
    this.text = todoText;
  }
}
