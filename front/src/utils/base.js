const base = {
    get() {
        return {
            url : "http://localhost:8080/xiaoyuanxinwen/",
            name: "xiaoyuanxinwen",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xiaoyuanxinwen/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "校园新闻管理系统"
        } 
    }
}
export default base
