const app = Vue.createApp({
    data() {
        return {
            header: "hello, world",
            products: [1, 2, 3, 4]
        }
    }
})

app.mount('body')