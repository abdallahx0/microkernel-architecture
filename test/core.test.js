import { expect } from 'chai';
import core from '../src/core.js';

describe('Core Module', () => {
    it('should initialize core', () => {
        core.init();
        expect(core.plugins).to.be.an('array').that.is.empty;
    });

    it('should register a plugin', () => {
        const plugin = { name: 'TestPlugin', init: () => {} };
        core.registerPlugin(plugin);
        expect(core.plugins).to.include(plugin);
    });

    it('should initialize registered plugins', () => {
        let initialized = false;
        const plugin = {
            name: 'TestPlugin',
            init: () => { initialized = true; }
        };
        core.registerPlugin(plugin);
        core.start();
        expect(initialized).to.be.true;
    });
});