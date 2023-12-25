import axios from "axios";

export default class ListPageModel {
  static async getPosts() {
    const res = await axios.get('http://localhost:3000/posts');

    return res.data;
  }
}
