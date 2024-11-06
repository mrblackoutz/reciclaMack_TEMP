// eslint.config.mjs
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import reactPlugin from 'eslint-plugin-react'
import nextPlugin from '@next/eslint-plugin-next'
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended'

const commonRules = {
	// Regras do TypeScript
	...tsPlugin.configs.recommended.rules,
	...tsPlugin.configs['recommended-requiring-type-checking'].rules,
	// Outras regras personalizadas
	'react/no-unescaped-entities': 'off',
	'@next/next/no-page-custom-font': 'off',
	'@typescript-eslint/no-unused-vars': 'error',
	'@typescript-eslint/no-unused-expressions': 'error',
	'react/prop-types': 'warn',
	'@typescript-eslint/no-restricted-imports': [
		'error',
		{
			patterns: [
				{
					group: ['@mui/*/*/*'],
					message: 'Importação aninhada de @mui não é permitida. Utilize importações diretas dos submódulos.'
				},
				{
					group: ['!@mui/material/*'],
					message: 'Importação individual de submódulos de @mui/material é recomendada para melhor desempenho.'
				}
			],
			paths: [
				{
					name: '@mui/material',
					message: 'Importação direta de @mui/material não é recomendada. Utilize importações individuais dos submódulos.'
				}
			]
		}
	]
}

const nextConfig = {
	plugins: {
		'@next/next': nextPlugin
	},
	...nextPlugin.configs.recommended,
	...nextPlugin.configs['core-web-vitals']
}

// Remover a propriedade extends
const { extends: _, ...nextPluginWithoutExtends } = nextConfig

export default [
	{
		...nextPluginWithoutExtends,
		...prettierPluginRecommended,
		...reactPlugin.configs.flat.recommended,
		...reactPlugin.configs.flat['jsx-runtime'],
		files: ['**/*.ts', '**/*.tsx'],
		plugins: {
			'@typescript-eslint': tsPlugin
		},
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
				ecmaFeatures: {
					jsx: true
				},
				project: './tsconfig.json'
			}
		},
		settings: {
			react: {
				version: 'detect'
			},
			next: {
				rootDir: './src',
				pageExtensions: ['tsx']
			}
		},
		linterOptions: {
			reportUnusedDisableDirectives: true
		},
		rules: commonRules
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		ignores: ['**/*.js', '**/*.mjs'],
		languageOptions: {
			globals: {
				React: 'readonly',
				JSX: 'readonly'
			}
		}
	}
]

