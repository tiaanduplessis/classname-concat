
import classNameConcat from 'classname-concat'

console.log(classNameConcat('foo', 'bar')) // foo bar
console.log(classNameConcat('foo', {bar: false})) // foo
console.log(classNameConcat('foo', {bar: false}, {baz: true})) // foo baz
console.log(classNameConcat('foo', {bar: false, nested: {ping: true}})) // foo ping
console.log(classNameConcat('foo', {bar: () => true, baz: {ping: true}})) // foo bar ping
console.log(classNameConcat(['foo', () => 'hello'])) // foo hello
console.log(classNameConcat(null, 'hello', undefined, 'friend')) // hello friend
