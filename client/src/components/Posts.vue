<template>
  <div class="container">
    <h1>Latest Posts</h1>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="post-container">
      <div class="post" v-for="post in posts" :key="post._id">
        {{ `${post.createdAt}` }}
        <p class="title">{{ post.title }}</p>
        <p class="text">{{ post.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "@/services/PostService";
export default {
  name: "PostS",
  data() {
    return {
      posts: [],
      error: "",
      text: "",
      url: "http://localhost:5000/api/posts",
    };
  },
  created() {
    PostService.getPosts()
      .then((response) => (this.posts = response.data))
      .catch((error) => {
        console.log(error);
      });
  },
};
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
  padding: 10px;
  margin-bottom: 15px;
}

div.post {
  position: relative;
  border: 1px solid #5bd658;
  background-color: #bcffb8;
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
