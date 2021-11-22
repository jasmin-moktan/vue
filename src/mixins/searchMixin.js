export default{
    computed:{
        filteredBLogs: function () {
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            });
        }
    }
}