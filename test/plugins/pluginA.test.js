import { expect } from 'chai';
import pluginA from '../../src/plugins/pluginA.js';

describe('PluginA', () => {
    it('should have a name', () => {
        expect(pluginA).to.have.property('name', 'PluginA');
    });

    it('should initialize', () => {
        expect(pluginA).to.have.property('init').that.is.a('function');
        pluginA.init();
    });
});