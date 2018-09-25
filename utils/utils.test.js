const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
    // if(res !== 44) {
    //     throw new Error(`Expected 44 but got ${res}`);
    // }

});

it('Should square given number', () => {
    var res = utils.square(10);

    expect(res).toBe(100).toBeA('number');
    // if(res !== 100) {
    //     throw new Error(`Expected 100 but got ${res}`);
    // }
});

it('Should expect something',() => {
    // expect({name:"Jainish"}).toBe({name:"Jainish"});
    // expect({name:"Jainish"}).toEqual({name:"Jainish"});
    // expect({name:"jainish"}).toNotEqual({name:"Jainish"});
    // expect([2,3,4]).toInclude(5);
    // expect([2,3,4]).toExclude(5);
    expect({
        name:"Jainish",
        age:21,
        location:"Ahmedabad"
    }).toInclude({
        name:"Jainish"
    });
});