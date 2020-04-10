const express = require("express"),
  bodyParser = require("body-parser"),
  chalk = require("chalk"),
  findInMapping = require("./mapping.js");
cors = require("cors");
const app = express();
const port = 3005;
const fixturespath = "../cypress/fixtures/";
app.use(bodyParser.json());

app.use(function (error, req, res, next) {
  if (error instanceof SyntaxError) {
    return res
      .status(500)
      .send({ data: `Invalid data ${JSON.stringify(req.body, null, 2)}` });
  } else {
    next();
  }
});

app.use(function (req, res, next) {
  const { method, body, url } = req;
  if (url === "/favicon.ico") return;
  if (method === "OPTIONS") {
    next();
    return;
  }
  if (JSON.stringify(body) === "{}") {
    console.log(
      `${new Date().toString()}: ${method} to ${url}`
    );
  } else {
    console.log(
      `${new Date().toString()}: ${method} to ${url} \n req.body: ${JSON.stringify(
        body,
        null,
        2
      )}`
    );
  }
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials: true
  })
);

const sendResponse = (req, res) => {
  mappingFile = findInMapping(req);
  if (!mappingFile) {
    console.log(chalk.red(`Couldn't find mapping for ${req.url}`));
    res.sendStatus(404);
    return;
  }
  if (mappingFile.responseStatus && mappingFile.responseStatus !== 200) {
    res.sendStatus(mappingFile.responseStatus);
    return;
  }
  try {
    res.json(require(`${fixturespath}/${mappingFile.response}`));
  } catch (ex) {
    console.log(chalk.red(`Couldn't find file ${mappingFile.response}`));
    res.sendStatus(500);
  }
};

app.post("/*", sendResponse);
app.get("/*", sendResponse);
app.patch("/*", sendResponse);

app.listen(port, () =>
  console.log(`Vin.Communications.Views.Mockserver listening on port ${port}!`)
);
