import axios from 'axios';

export default class AddPageModel {
    static async createPost(newPost){
        try {
            await axios.post('http://localhost:3000/posts', newPost)
        } catch(err) {
            console.log(err);
        }
    }
}