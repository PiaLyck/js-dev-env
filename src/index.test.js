// {} means "named import"
import { expect } from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('My first test', function () {
    it('should pass', function () {
        expect(true).to.equal(true);
    })
});

//The file I want to test in JSDOM
describe('index.html', function () {
    it('should say Users in a h1 tag', function (done) {
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        //define JSDOM environment
        jsdom.env(index, function (err, window) {
            //get the H1 element on index.html:
            const h1 = window.document.getElementsByTagName('h1')[0];

            //and write what we expect:
            expect(h1.innerHTML).to.equal("Users");

            //Because you're doing an asyncronous test with a callball, tell Mocha that now the test is done: 
            done();

            //and close the window again to free up the memory that was taken when the in-memory DOM (JSDOM) was created
            window.close();
        })
    })
});