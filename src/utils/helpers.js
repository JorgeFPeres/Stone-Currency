import Radio from '@material-ui/core/Radio'
import { green, grey } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'

export function transformRawNumber(value) {
  return value.replace(/\D/g, '')
}

export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    // currency: 'BRL'
  }).format(number / 100)
  return newNumber
}

export const getUniqueValues = () => {}

export const GreenRadio = withStyles({
  root: {
    color: grey[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />)
