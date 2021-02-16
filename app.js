const app = Vue.createApp({
    data() {
        return {
            header: "hello, world",
            products: [
                {
                    image: "./assets/product.jpeg",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nostrum. Id deleniti saepe odio",
                    price: 15.98,
                    reduction: 17.56
                },
                {
                    image: "./assets/product1.jpeg",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nostrum. Id deleniti saepe odio",
                    price: 15.98,
                    reduction: 17.56
                },
                {
                    image: "./assets/product2.jpeg",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nostrum. Id deleniti saepe odio",
                    price: 15.98,
                    reduction: 17.56
                },
                {
                    image: "./assets/product.jpeg",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nostrum. Id deleniti saepe odio",
                    price: 15.98,
                    reduction: 17.56
                },
                {
                    image: "./assets/product2.jpeg",
                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, nostrum. Id deleniti saepe odio",
                    price: 15.98,
                    reduction: 17.56
                }
            ]
        }
    }
})

app.mount('body')