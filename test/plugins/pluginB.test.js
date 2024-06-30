import { expect } from 'chai';
import pluginB from '../../src/plugins/pluginB.js';

describe('PluginB', () => {
    it('should have a name', () => {
        expect(pluginB).to.have.property('name', 'PluginB');
    });

    it('should initialize', () => {
        expect(pluginB).to.have.property('init').that.is.a('function');
        pluginB.init();
    });
});