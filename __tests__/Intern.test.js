const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test('add school for intern', () => {
    const testSchool = 'school';
    const employeeCreate = new Intern('Sally', 1, 'test@test.com', testSchool);
    expect(employeeCreate.school).toBe(testSchool);
})

test('getSchool() module', () => {
    const testSchool = 'school';
    const employeeCreate = new Intern('Sally', 1, 'test@test.com', testSchool);
    expect(employeeCreate.getSchool()).toBe('school');
})

test('getRole() module', () => {
    const employeeCreate = new Intern('Sally', 1, 'test@test.com', 'school');
    expect(employeeCreate.getRole()).toBe('Intern');
})