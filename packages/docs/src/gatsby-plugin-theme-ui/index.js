import preset from '@rebass/preset'
import merge from 'lodash.merge'
import prism from '@theme-ui/prism/presets/theme-ui'

export default merge( preset, {
	initialColorModeName: 'lite',
	colors: {
		text: '',
		background: ''
	}
})
