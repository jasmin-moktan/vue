<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blog></show-blog>
    <list-blog></list-blog> -->
    <header-blog></header-blog>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlog.vue'
import listBlog from './components/listBlogs.vue'
import headerBlog from './components/header.vue'

export default {
  components:{
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blog': listBlog,
    'header-blog': headerBlog,

  },
  data(){
    return{

    }
  },
  methods:{

  }
}
</script>

<style>

</style>
