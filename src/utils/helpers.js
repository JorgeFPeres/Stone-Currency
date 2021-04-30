import Radio from '@material-ui/core/Radio'
import { green, grey } from '@material-ui/core/colors'
import { withStyles } from '@material-ui/core/styles'

// Remove the symbol $
export function transformRawNumber(value) {
  return value.replace(/\D/g, '')
}

// Format the final value to R$
export const formatPrice = (number) => {
  const newNumber = Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  }).format(number)
  return newNumber
}

// Change the radio button color to green
export const GreenRadio = withStyles({
  root: {
    color: grey[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Radio color='default' {...props} />)
