const { pathsToModuleNameMapper } = require('ts-jest')
const { jsWithTs } = require('ts-jest/presets')
const { compilerOptions } = require('./tsconfig')

module.exports = {
  globals: {
    'ts-jest': {
      isolatedModules: true
    }
  },
  resetMocks: true,
  restoreMocks: true,
  transform: jsWithTs.transform,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: __dirname
  }),
  collectCoverageFrom: ['src/**', '!src/injection/**'],
  setupFiles: ['./test/setup.js', './test/dynamodb/setup-before-env.js']
}
