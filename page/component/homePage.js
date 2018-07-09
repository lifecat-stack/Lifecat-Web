window.onload=function() {
    var vm = new vue({
        el: "#home-page",
        data: {
            diaries: [
                {
                    id: "1",
                    title: "注册成功",
                    text: "今天晴朗",
                    author: "ten",
                    date: "2018",
                    views: "21"
                }
            ]
        }
    });
}