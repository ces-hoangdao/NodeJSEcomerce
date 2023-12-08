import app from "./src/app";

const port = process.env.PORT || 5050;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

process.on("SIGINT", () => {
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });
});
