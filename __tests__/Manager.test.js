const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager.js');

test('manager officeNumber', () => {
    const testOfficeNumber = 1;
    const employeeCreate = new Manager('Sally', 1, 'test@test.com', testOfficeNumber);
    expect(employeeCreate.officeNumber).toBe(testOfficeNumber);
})

test('getOfficeNumber module', () => {
    const testOfficeNumber = 2202;
    const employeeCreate = new Manager('Sally', 1, 'test@test.com', testOfficeNumber);
    expect(employeeCreate.getOfficeNumber()).toBe(testOfficeNumber);
})

test('getRole module', () => {
    const role = 'Manager';
    const employeeCreate = new Manager('Sally', 1, 'test@test.com', 2202);
    expect(employeeCreate.getRole()).toBe(role);
})