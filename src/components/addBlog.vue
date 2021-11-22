<template>
  <div id="add-blog">
    
    <form v-if="!submitted">
      <h1>Add Blog</h1>
        <label for="title">TItle</label>
        <input type="text" v-model.lazy="blog.title" required><br>
        <label for="textarea">Content</label>
        <textarea v-model.lazy="blog.content" required></textarea>
        <div id="checkboxes">
          <p>Blog Categories:</p>
          <label>Ninjas</label>
          <input type="checkbox" value="ninjas" v-model="blog.categories" />
          <label>Wizards</label>
          <input type="checkbox" value="wizards" v-model="blog.categories" />
          <label>Mario</label>
          <input type="checkbox" value="mario" v-model="blog.categories" />
          <label>Cheese</label>
          <input type="checkbox" value="cheese" v-model="blog.categories" />
        </div>
        <label for="author">Author:</label>
        <select v-model="blog.author">
          <option v-for="author in authors" :key="author">{{author}}</option>
        </select>
        <button v-on:click.prevent="post()">Add Blog</button>
    </form>
    <div>
      <h3 v-if="submitted">Thankyou for submitting</h3>
    </div>
    <div id="preview">
        <h2>Preview Blog</h2>
        <p>Blog Title:{{blog.title}}</p>
        <p>Blog Content:</p>
        <p>{{blog.content}}</p>
        <p>Blog Categories</p>
        <ul>
          <li v-for="category in blog.categories" :key="category">{{category}}</li>
        </ul>
        <p>Blog Author</p>
        <p>{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
 
  data(){
    return{
      blog:{
        title: "",
        content: "",
        categories: [],
        author: "",
      },
      authors:['name1','name2','name3'],
      submitted: false,
    }
  },
  methods:{
    post:function () {
      this.$http.post('https://blog-vuw-default-rtdb.firebaseio.com/posts.json',this.blog).then(function(data){
                console.log(data);
                this.submitted = true;
            });
    }
  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
 #add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
} 
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
}
</style>