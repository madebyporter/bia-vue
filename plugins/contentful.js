// ./plugins/contentful.js

const contentful = require("contentful");

let space, accessToken, environment;

if (process.env.NODE_ENV === "production") {
  space = process.env.CONTENTFUL_SPACE;
  accessToken = process.env.CONTENTFUL_ACCESSTOKEN;
  environment = process.env.CONTENTFUL_ENVIRONMENT;
} else {
  space = process.env.CONTENTFUL_SPACE_STAG;
  accessToken = process.env.CONTENTFUL_ACCESSTOKEN_STAG;
  environment = process.env.CONTENTFUL_ENVIRONMENT_STAG;
}

console.log("accessToken: ", accessToken);

module.exports = contentful.createClient({
  space,
  accessToken,
  environment
});
