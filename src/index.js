const core = require('./core');
const pluginA = require('./plugins/pluginA');
const pluginB = require('./plugins/pluginB');

core.init();
core.registerPlugin(pluginA);
core.registerPlugin(pluginB);
core.start();