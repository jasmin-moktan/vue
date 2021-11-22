<template>
  <div v-small:column="'narrow'" id="show-blog">
      <h1>List Blog Titles</h1>
      <input type="text" v-model="search" placeholder="Search Blogs">
      <div v-for="blog in filteredBLogs" :key="blog" class="single-blog">
          <h2 v-rainbow>{{blog.title | to-uc}}</h2>
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
    this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
        console.log(data);
        this.blogs = data.body.slice(0,10);
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
 //mixins
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
