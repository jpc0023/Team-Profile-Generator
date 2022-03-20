const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employeeCreate = new Employee();
    expect(typeof(employeeCreate)).toBe('object');
})

test('returns name', ()=> {
    const name = "Sally";
    const employeeCreate = new Employee(name);
    expect(employeeCreate.name).toBe(name);
})

test('returns id', () => {
    const id = 1;
    const employeeCreate = new Employee("Sally", id);
    expect(employeeCreate.id).toBe(id);
})

test('returns email', ()=> {
    const email = "test@test.com";
    const employeeCreate = new Employee('Sally', 1, email);
    expect(employeeCreate.email).toBe(email);
})

test('getName method', () => {
    const testName = "Sally";
    const employeeCreate = new Employee(testName);
    expect(employeeCreate.getName()).toBe(testName);
})

test('getId method', () => {
    const testId = 1;
    const employeeCreate = new Employee('Sally', testId);
    expect(employeeCreate.getId()).toBe(testId);
})

test('getEmail method', () => {
    const testEmail = "test@test.com";
    const employeeCreate = new Employee('Sally', 1, testEmail);
    expect(employeeCreate.getEmail()).toBe(testEmail);
})