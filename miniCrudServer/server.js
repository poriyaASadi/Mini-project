const http = require("http");
const url = require("url");

let dataBease = {
  users: [
    { id: 1, name: "poriya", age: 18, password: 1385 },
    { id: 2, name: "ali", age: 17, password: 1384 },
    { id: 3, name: "mamad", age: 16, password: 1383 },
    { id: 4, name: "samon", age: 15, password: 1382 },
    { id: 5, name: "mane", age: 14, password: 1381 },
  ],
};
let server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", " * ");
  // console.log(req.method);
  const urlParams = url.parse(req.url, true);
  if (req.method === "GET" && urlParams.pathname === "/api/users") {
    const mainData = dataBease.users.filter(
      (user) => user.name.toLowerCase() === urlParams.query.name.toLowerCase()
    );
    console.log(mainData[0]);
    if (mainData.length) {
      res.write(JSON.stringify(mainData[0]));
      res.end();
    } else {
      res.write(JSON.stringify("user not found sorry :)"));
      res.end();
    }
  } else if (res.method === "DELETE" || urlParams.pathname === "/api/users/delet") {
    let mainUserId = Number(urlParams.query.id);
    let date = dataBease.users.some((item) => item.id === mainUserId);
    if (date) {
      let allUser = [...dataBease.users];
      let filter = allUser.filter((user) => user.id !== mainUserId);
      res.write(JSON.stringify(filter));
      res.end();
      dataBease.users = filter;
    } else {
      res.write("sorry not user :)");
      res.end();
    }
  }else if ('') {

  } 
});
server.listen(5000);
