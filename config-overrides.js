const path = require('path')

const {
  override,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  useBabelRc,
  addWebpackAlias,
  addWebpackPlugin
} = require('customize-cra')

const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')

const rewiredMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
  return config
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true
      // modifyVars: { '@primary-color': '#1DA57A' },
    }
  }),
  rewiredMap(),
  addDecoratorsLegacy(),
  useBabelRc(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    components: path.resolve(__dirname, 'src/components')
  }),
  addWebpackPlugin(
    new ProgressBarPlugin({
      complete: '█',
      format: `${chalk.green('Building')} [ ${chalk.green(':bar')} ] ':msg:' ${chalk.bold('(:percent)')}`,
      clear: true
    })
  )
)
