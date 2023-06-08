import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function bootstrp() {
  try {
    await mongoose.connect(config.database_url as string);

    console.log(`database is connected successfully`);
    app.listen(config.port, () => {
      console.log(`Application app listening on port ${config.port}`);
    });
  } catch (error) {
    console.error(`database connection failed`, error);
  }

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
bootstrp();
