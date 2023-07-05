### ts-node-npm-boilerplate
使用typescript来写node.js模块，然后用webpack打包成js，将打包后的js发布成npm包。
#### 测试和使用
使用test/ndex.js来测试模块的功能；
在你的项目中，参考test/test_in_your_program.js来使用node.js模块
#### todo
##### 如何配置vscode调试src里的文件
思路：用ts写一个调用src/index.ts的入口程序，然后用tsc编译成js，直接调试该js文件，调试时会自动映射到ts文件。
