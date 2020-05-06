import React from 'react';
import TestRenderer from 'react-test-renderer';

import AppHeader from "../../src/components/app-header";

let component = null;
let tree = null;

describe('AppHeader', () => {

    describe('AppHeader should display even w-no props', () => {
        beforeEach( () => {
            component = TestRenderer.create(<AppHeader />);
            tree = component.toJSON();
        });

        it("Should render", () => {
            console.log( tree );
            expect( tree ).toMatchSnapshot();
        });

        it("Should display default name", () => {
            let expected = 'Anonymous';
            let actual = AppHeader.defaultProps.username;
            expect(actual).toEqual(expected);
        });

        it("Should display default formal time of day", () => {
            let expected = 'Day';
            let actual = AppHeader.getFormalTimeOfDay();
            expect(actual).toEqual(expected);
        });

    });

    describe('AppHeader static methods', () => {

        it("Should display Morning greeting based on hour passed", () => {
            let expected = 'Morning';
            let actual = AppHeader.getFormalTimeOfDay(6);
            expect(actual).toEqual(expected);
        });

        it("Should display Afternoon greeting based on hour passed", () => {
            let expected = 'Afternoon';
            let actual = AppHeader.getFormalTimeOfDay(13);
            expect(actual).toEqual(expected);
        });

        it("Should display Evening greeting based on hour passed", () => {
            let expected = 'Evening';
            let actual = AppHeader.getFormalTimeOfDay(20);
            expect(actual).toEqual(expected);
        });

    });

    describe('AppHeader with props', () => {
        beforeEach( () => {
            component = TestRenderer.create(<AppHeader currentHour='5' username='Newbie' />);
            tree = component.toJSON();
        });

        it("Should render", () => {
            console.log( tree );
            expect( tree ).toMatchSnapshot();
        });

    });
});


