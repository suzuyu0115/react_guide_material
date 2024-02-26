import axios from 'axios';

const ENDPOINT_URL = 'http://localhost:3003/todo'

const todoApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    console.log(result);
    return result.data;
  },
  async post(todo) {
    const result = await axios.post(ENDPOINT_URL, todo);
    console.log(result);
    return result.data;
  },
  async delete(todo) {
    const result = await axios.delete(ENDPOINT_URL + '/' + todo.id);
    console.log(result);
    return result.data;
  },
  async patch(todo) {
    const result = await axios.put(ENDPOINT_URL + '/' + todo.id, todo);
    console.log(result);
    return result.data;
  }
}

todoApi.patch({
  "id": "f2c38014-e2df-40ae-ac93-36303b8771ce",
  "content": "にょっす🐮🖐️",
  "editing": false,
  "completed": false
});

export default todoApi;
