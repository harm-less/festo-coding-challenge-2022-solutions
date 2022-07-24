module.exports = {
	root: true,
	env: {
		es6: true,
		node: true,
		jest: true
	},
	extends: [
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'prettier'
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module'
	},
	plugins: ['@typescript-eslint'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-misused-promises': [
			'error',
			{
				checksVoidReturn: false
			}
		],
		'@typescript-eslint/no-unused-vars': [
			'error',
			{args: 'all', argsIgnorePattern: '^_|type|of|returns', vars: 'all', varsIgnorePattern: '^_'}
		],
		'@typescript-eslint/array-type': ['warn', {default: 'generic'}],
		'@typescript-eslint/no-unnecessary-condition': 'error',
		quotes: ['error', 'single', {avoidEscape: true}],
		'no-console': ['error', {allow: ['info', 'warn', 'error', 'time', 'timeEnd']}],
		'no-var-requires': 0,
		'object-shorthand': ['error', 'always'],
		'no-negated-condition': 2
	},
	overrides: [
		{
			files: ['*.spec.ts'],
			rules: {
				'@typescript-eslint/no-non-null-assertion': 'off'
			}
		}
	]
};
