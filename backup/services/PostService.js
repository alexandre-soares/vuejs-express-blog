import axios from 'axios'

const url = 'http://localhost:5000/api/posts';

class PostService {
    // Get Post
    // static is here to not extend
    static getPosts() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(data.map(post => ({
                    ...post,
                    createdAt: new Date(post.createdAt)
                })));
            } catch (error) {
                reject(error);                
            }
        })
    }

    // Create Post
    static insertPost(title, content) {
        return axios.post(url, {
            title,
            content
        })
    }
}

export default PostService