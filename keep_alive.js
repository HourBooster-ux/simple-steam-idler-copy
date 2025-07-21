var http = require('http');

const PORT = process.env.PORT || 3000;

http.createServer(function (req, res) {
  res.write("I'm alive");
  res.end();
}).listen(PORT, () => {
  console.log(`Keep-alive server running on port ${PORT}`);
});
