module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'semi': ['error', 'never'],
		'comma-dangle': ['error', 'never'],
		'indent': ['error', 'tab'],
		'no-mixed-operators': ['error', { 'allowSamePrecedence': true }],
		'max-len': ['error', { 'code': 100, 'ignoreStrings': true }]
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}
