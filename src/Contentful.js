const contentful = require("contentful");

export default contentful.createClient({
  space: "48t1s0p1dk0p" || process.env.REACT_APP_API_SPACE,
  accessToken: "61dda3b65d92ab91decdcde3f89f5d268746742a792e27b9981a33a1a76c8c7f" || process.env.REACT_APP_ACCESS_TOKEN
});
