import { helper } from '@ember/component/helper'
import { SafeString } from '@ember/template/-private/handlebars'
import { htmlSafe } from '@ember/template'

export default helper(([str]: [str: string]): SafeString => htmlSafe(str))
