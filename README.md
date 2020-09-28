# react-admin-master

学习react

参考[react-admin](https://github.com/yaowuya/react-admin)

### 笔记

1. 隐藏的文件：通过`npm run eject`显示被隐藏的文件，此命令不可逆
2. 全局配置sass，`npm i -D sass-resources-loader`

在webpack.config.js下配置

```js
{
              test: sassRegex,
              exclude: sassModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                },
                'sass-loader'
              ).concat({
                loader: 'sass-resources-loader',
                options: {
                  resources: [
                    // 这里按照你的文件路径填写
                    path.resolve(__dirname, './../src/styles/index.scss')
                  ]
                }
              }),
              // Don't consider CSS imports dead code even if the
              // containing package claims to have no side effects.
              // Remove this when webpack adds a warning or an error for this.
              // See https://github.com/webpack/webpack/issues/6571
              sideEffects: true,
            },
```
