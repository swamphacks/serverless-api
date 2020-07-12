module.exports = {
	collectCoverageFrom: [
		'./src/**/*.ts',
		'!./src/tests/data/*'
	],
	coverageThreshold: {
		'./src/**/*.ts': {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js"
	],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
	testMatch: [
		"**/tests/*.(ts|tsx|js)"
	]
}