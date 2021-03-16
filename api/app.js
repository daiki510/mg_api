const express = require("express")
const app = express()
const port = process.env.PORT || 3001
const mongoose = require("mongoose")
const Comic = require("./models/comicModel")
const routes = require("./routes/comicRoutes"); // Routeのインポート
const bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/Comicdb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app); //appにRouteを設定する。

app.listen(port); // appを特定のportでlistenさせる。

console.log("API server started on: " + port);

// export default app