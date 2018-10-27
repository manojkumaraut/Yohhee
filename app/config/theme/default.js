import { scale } from '../../utils'

/* Project Font Specification */
const fonts = {
  exoLight: 'Exo2-Light',
  exoRegular: 'Exo2-Regular',
  exoMedium: 'Exo2-Medium',
  exoBold: 'Exo2-Bold',
  exoBlack: 'Exo2-Black'
}
/* Project Font Specification */

/* Project Color Specification */
const colors = {
  primary: '#ff0000',
  white: '#ffffff',
  black: '#000000'
}
/* Project Color Specification */

/* Font Base Value */
const FontBaseValue = scale(16);
/* Font Base Value */

export const defaultTheme = {
  name: 'defaultTheme',
  colors: {
    primary: colors.primary,
    white: colors.white,
    black: colors.black
  },
  font: {
    size: {
      base: FontBaseValue,
      h1: scale(20),
      h2: scale(18),
      h3: scale(16),
      h4: scale(14),
      h5: scale(12),
      h6: scale(10),
      h7: scale(8),
    },
    lineHeights: {
      medium: 18,
      big: 24
    },
    family: {
      exoLight: fonts.exoLight,
      exoRegular: fonts.exoRegular,
      exoMedium: fonts.exoMedium,
      exoBold: fonts.exoBold,
      exoBlack: fonts.exoBlack
    }
  }
}
