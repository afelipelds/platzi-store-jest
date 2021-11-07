import randomString from '../global';

const text = 'Hola al mundo';
const fruits = ['manzana', 'melon', 'banana'];

test('should contain a text', () => {
  expect(text).toMatch(/Hola/);
})
////////////////////////////////////////////////////////////////////////////

test('should contain a fruit', () => {
  expect(fruits).toContain('banana');
})

test('grater than', () => {
  expect(12).toBeGreaterThan(1);
})
////////////////////////////////////////////////////////////////////////////

test('is it true', () => {
  expect(true).toBeTruthy();
})
////////////////////////////////////////////////////////////////////////////

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''))
}

test('execute a callback', () => {
  reverseString('Hello', (str) => {
    expect(str).not.toBe('Hello')
  })
})
////////////////////////////////////////////////////////////////////////////

const promiseReverseString = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) reject(Error('Error'))

    resolve(str.split('').reverse().join(''))
  })
}

test('test a promise', () => {
  promiseReverseString('Helloo')
    .then((str) => {
      expect(str).toBe('oolleH')
    })
})

test('test async...await', async () => {
  const str = await promiseReverseString('Hello')
  
  expect(str).toBe('olleH')
})

afterAll(() => console.log('//////////// after all basic tests ////////////'))
////////////////////////////////////////////////////////////////////////////

test('test the functionality', () => {
  expect(typeof randomString()).toBe('string');
});