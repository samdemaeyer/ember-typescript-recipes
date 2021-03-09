import { helper } from '@ember/component/helper'

export default helper(
  ([length, index]: [length: number, index: number]): boolean =>
    length === index + 1
)
