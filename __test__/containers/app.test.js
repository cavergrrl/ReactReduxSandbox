import React from 'react';
import TestRenderer from 'react-test-renderer';

import App from '../../src/containers/app';

let component = null;
let instance = null;

describe('App', () => {

    describe('App should display', () => {
        beforeAll( () => {
            component = TestRenderer.create(<App />);
            instance = component.root;
        });

        it("Should render", () => {
            const div = instance.find( element => element.type === 'div' && element.props.id === 'app-container');
            expect(div).toBeTruthy();
        });
    });

});