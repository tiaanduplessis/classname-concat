import classnameConcat from '../'

test('should be defined', () => {
  expect(classnameConcat).toBeDefined()
})

test('should concat classnames', () => {
  expect(classnameConcat('foo', 'bar')).toBe('foo bar')
  expect(classnameConcat('foo', {bar: false})).toBe('foo')
  expect(classnameConcat('foo', {bar: false}, {baz: true})).toBe('foo baz')
  expect(classnameConcat('foo', {bar: false, nested: {ping: true}})).toBe('foo ping')
  expect(classnameConcat('foo', {bar: () => true, baz: {ping: true}})).toBe('foo bar ping')
  expect(classnameConcat(['foo', () => 'hello'])).toBe('foo hello')
  expect(classnameConcat(null, 'hello', undefined, 'friend')).toBe('hello friend')
})
