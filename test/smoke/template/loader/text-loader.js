const loaderUtils = require('loader-utils')
module.exports = function(source){
  const options = loaderUtils.getOptions(this)
  source = source.replace(/\[name\]/g, options.name);
  return `module.exports = ${ JSON.stringify(source) }`;
}
