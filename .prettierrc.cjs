/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
	arrowParens: 'avoid',
	bracketSpacing: true,
	htmlWhitespaceSensitivity: 'css',
	insertPragma: false,
	bracketSameLine: false,
	jsxSingleQuote: true,
	printWidth: 120,
	proseWrap: 'preserve',
	quoteProps: 'as-needed',
	requirePragma: false,
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'none',
	useTabs: true,
	endOfLine: 'crlf'
}

module.exports = config
