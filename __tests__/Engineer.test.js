const { test, expect } = require('@jest/globals');
const { ensureExpectedIsNonNegativeInteger } = require('jest-matcher-utils');
const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

test('create github username', () => {
    const testGithub = "github";
    const employeeCreate = new Engineer('Sally', 1, 'test@test.com', testGithub);
    expect(employeeCreate.github).toBe(testGithub);
})

test('getGithub() module', () => {
    const testGithub = 'testtestgithub';
    const employeeCreate = new Engineer('Sally', 1, 'test@test.com', 'testtestgithub');
    expect(employeeCreate.getGithub()).toBe('testtestgithub');
})

test('getRole() module', () => {
    const employeeCreate = new Engineer('Sally', 1, 'test@test.com', 2202, 'testtestgithub');
    expect(employeeCreate.getRole()).toBe('Engineer');
})