export const one = () => 'one'
export const two = () => 'two'
export const three = () => 'three'
export const four = () => 'four'
export const numbers = () => [one, two, three, four].map((a) => a()).join(' ')

export default () => {
  // eslint-disable-next-line no-console
  console.log(numbers())
}
