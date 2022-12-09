// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
const { isPhoneNumber, isEmail, isStrongPassword, isDate, isHexColor } = functions;
test('(915)-234-1234 is a valid phone number', () => {
    expect(isPhoneNumber('(915)-234-1234')).toBe(true);
})
test('(123) 456-7891 is a valid phone number', () => {
    expect(isPhoneNumber('(123) 456-7891')).toBe(true);
})
test('1234567891 is not a valid phone number', () => {
    expect(isPhoneNumber('1234567891')).toBe(false);
})
test('124567891 is not a valid phone number', () => {
    expect(isPhoneNumber('124567891')).toBe(false);
})
test('abc@gmail.com is a valid email', () => {
    expect(isEmail('abc@gmail.com')).toBe(true);
})
test('cse110@ucsd.edu is a valid email', () => {
    expect(isEmail('cse110@ucsd.edu')).toBe(true);
})
test('abc.com is a not a valid email', () => {
    expect(isEmail('abc.com')).toBe(false);
})
test('hi@you is a not a valid email', () => {
    expect(isEmail('hi@you')).toBe(false);
})
test('a1bF is a strong password', () => {
    expect(isStrongPassword('a1bF')).toBe(true);
})
test('ASD_F23CXsdf is a strong password', () => {
    expect(isStrongPassword('ASD_F23CXsdf')).toBe(true);
})
test('ab2 is not a strong password', () => {
    expect(isStrongPassword('ab2')).toBe(false);
})
test('6sdffaDDASDKmc is not a strong password', () => {
    expect(isStrongPassword('6dffaDDASDKmc')).toBe(false);
})
test('01/01/1833 is a valid date', () => {
    expect(isDate('01/01/1833')).toBe(true);
})
test('3/5/2000 is a valid date', () => {
    expect(isDate('3/5/2000')).toBe(true);
})
test('35/5/200 is not a valid date', () => {
    expect(isDate('35/5/200')).toBe(false);
})
test('jan 777 2022 is not a valid date', () => {
    expect(isDate('jan 777 2022')).toBe(false);
})
test('#800000 is a valid color', () => {
    expect(isHexColor('#800000')).toBe(true);
})
test('#FFF is a valid color', () => {
    expect(isHexColor('#FFF')).toBe(true);
})
test('#F is not a valid color', () => {
    expect(isHexColor('#F')).toBe(false);
})
test('#FFFFDRRR is not a valid color', () => {
    expect(isHexColor('#FFFFDRRR')).toBe(false);
})