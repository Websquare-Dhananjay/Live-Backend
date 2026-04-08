const app = require("./src/app");
const {connectDB}  = require("./src/config/database")
require("dotenv").config();
const port = process.env.PORT;

app.listen(port, async() => {
    await connectDB();
    console.log(`Server running on port ${port}`);
});


