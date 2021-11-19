const app = require("./src/app")
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Alo diabo? Coca-cola na porta ${PORT}`);
})