<template>
  <div v-small:column="'narrow'" id="show-blog">
      <h1>All Blogs</h1>
      <input type="text" v-model="search" placeholder="Search Blogs">
      <div v-for="blog in filteredBLogs" :key="blog" class="single-blog">
         <router-link v-bind:to="'/blog/'+blog.id"> <h2 v-rainbow>{{blog.title | to-uc}}</h2></router-link>
          <p>{{blog.content | snippet}}</p>
      </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'

export default {
  data(){
    return{
        blogs: [],
        search: "", 
    }
  },
  methods:{

  },
  computed:{
    //   filteredBLogs: function () {
    //       return this.blogs.filter((blog) => {
    //           return blog.title.match(this.search);
    //       });
    //   }
  },
  created() {
    this.$http.get('https://blog-vuw-default-rtdb.firebaseio.com/posts.json').then(function(data){
       return data.json();
    }).then(function (data) {
        var blogsArray = [];
        for (let key in data ) {
            data[key].id = key
            blogsArray.push(data[key]);
        }
        console.log(blogsArray);
        this.blogs = blogsArray;
    });
 },
//  registering locally
 filters:{
     'toUc'(params) {
         return params.toUpperCase();
     }
 },
//  directives locally
 directives:{
     'rainbow':{
         bind(el,binding,vnode){
            el.style.color ="#" + Math.random().toString().slice(2,8);
        }
     }
 },
 mixins:[searchMixin]
}
</script>

<style>
#show-blog{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>
