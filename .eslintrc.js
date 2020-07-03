module.exports = {
	'env': {
		'browser': true,
		'es6': true,
	},
	'extends': [
		'plugin:react/recommended',
		'google',
	],
	'globals': {
		'Atomics': 'readonly',
		'SharedArrayBuffer': 'readonly',
	},
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaFeatures': {
			'jsx': true,
		},
		'ecmaVersion': 2018,
		'sourceType': 'module',
	},
	'plugins': [
		'react',
		'@typescript-eslint',
	],
	'rules': {
		'require-jsdoc': 0,
		'no-invalid-this': 0,
		'quote-props': 0,
		'semi': 'off',
		'@typescript-eslint/semi': ['error'],
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'max-len': [2, {
			'code': 120,
			'tabWidth': 2,
			'ignoreUrls': true,
			'ignorePattern': '^import [^,]+ from |^export | implements',
		}],
	},
};
