const express = require("express")
const app = express()
const port = process.env.PORT || 3001
const mongoose = require("mongoose")
const Comic = require("./models/comicModel")
const routes = require("./routes/comicRoutes"); // Routeのインポート
const connectOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/Comicdb", connectOptions);

//TODO:bodyParserが正常に動作しないためにjsonを読み取れない

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app); //appにRouteを設定する。

app.listen(port); // appを特定のportでlistenさせる。

console.log("API server started on: " + port);

// export default app