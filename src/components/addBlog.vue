<template>
  <div id="add-blog">
    <h1>Add Blog</h1>
    <form>
        <label for="title">TItle</label>
        <input type="text" required><br>
        <label for="textarea">Content</label>
        <textarea required></textarea>
    </form>
    <div id="preview">
        <h2>Preview Blog</h2>
        <p>Blog Title:</p>
        <p>Blog Content:</p>
    </div>
  </div>
</template>

<script>
export default {
 
  data(){
    return{

    }
  },
  methods:{

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
</style>