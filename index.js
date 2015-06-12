/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-babel-plugin-demo1',

  setupPreprocessorRegistry: function(type, registry) {
    var BabelTransformerPlugin = require('./babel-plugin-demo1');

    registry.add('babel-plugin', {
      name: 'babel-plugin-demo1',
      plugin: BabelTransformerPlugin
    });
  }
};
