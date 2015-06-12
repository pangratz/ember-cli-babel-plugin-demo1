module.exports = function(babel) {
  var t = babel.types;
  return new babel.Transformer('babel-plugin-demo1', {
    Literal: function(node) {
      if (node.value === "babel-plugin-demo1") {
        return t.literal("demo1");
      }
    }
  });
}
