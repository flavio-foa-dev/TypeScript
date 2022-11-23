require('dotenv/config')
import { app } from "./app";

const port = process.env.PORT || 3004

app.listen(port, function () {console.log("listening in port: " + port)})