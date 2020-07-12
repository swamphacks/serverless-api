// jest.config.js
module.exports = {
	collectCoverageFrom: ['./src/**/*.ts'],
	coverageThreshold: {
		'./src/**/*.ts': {
			branches: 100,
			functions: 100,
			lines: 100,
			statements: 100,
		},
	},
	// moduleNameMapper: {
	// 	'@app(.*)$': '<rootDir>/app/$1',
	// },
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