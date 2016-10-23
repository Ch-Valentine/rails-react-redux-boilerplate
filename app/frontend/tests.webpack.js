let context = require.context('./src', true, /.+\.(spec|test)\.jsx?$/);
context.keys().forEach(context);
module.exports = context;
