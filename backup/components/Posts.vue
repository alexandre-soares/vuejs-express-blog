<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <hr>
    <p class="error" v-if="error">{{ error }}</p>
    <div class="post-container">
      <div class="post" v-for="(post, index) in posts" :key="post._id" :item="post" :index="index">
        {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}
        <p class="title">{{ post.title }}</p>
        <p class="text">{{ post.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from '@/services/PostService';
export default {
  name: 'Post',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created () {
    try {
      this.posts = await PostService.getPosts()
      console.log(this.posts);
    } catch (error) {
      this.error = error.message;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.container {
  max-width: 800px;
  margin: 0 auto;
}

p.error {
  border: 1px solid #ff5b5f;
  background-color: #ffc5c1;
  padding:  10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color:  #bcffb8;
  padding: 10px 10px 30px 10px;
  margin-bottom: 15px;
}

div.created-at {
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 15px 5px 15px;
  background-color: darkgreen;
  color: white;
  font-size: 13px;
}

p.text {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 0;
}
</style>
