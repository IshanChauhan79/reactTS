class Todo {
  text: string;
  id: string;
  constructor(value: string) {
    this.text = value;
    this.id = `${Math.random()}`;
  }
}
export default Todo;
