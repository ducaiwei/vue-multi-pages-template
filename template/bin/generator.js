let chalk = require('chalk')
let path = require('path')
let fs = require('fs')
let Metalsmith = require('metalsmith')
let inquirer = require('inquirer')
let async = require('async')
let consolidate = require('consolidate') // 模板引擎

let exists = function (appPath) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(appPath)) {
      fs.readdir(appPath, function (error, files) {
        if (error) reject(error)
        if (files.length) {
          resolve(files.length)
        }
      })
    } else {
      resolve()
    }
  })
}

let renderTemplate = function () {
  return function (files, metalsmith, done) {
    let keys = Object.keys(files)
    async.each(keys, (file, next) => {
      let str = files[file].contents.toString()
      if (!/{{([^{}]+)}}/g.test(str)) {
        return next()
      }
      consolidate.atpl.render(str, options, function (error, res) {
        if (error) {
          error.message = `[${file}] ${error.message}`
          return next(error)
        }
        files[file].contents = res
        next()
      })
    }, done)
  }
}

let addProject = function (appPath, appName) {
  return new Promise((resolve, reject) => {
    let tplPath = path.join(__dirname, 'app-tpl')
    Metalsmith(tplPath)
      .source('.')
      .use(renderTemplate({appName})) // 渲染模板文件
      .destination(appPath)
      .build((error) => {
        if (error) throw error
      })
  })
}

let run = function (appPath, appName) {
  addProject(appPath, appName)
}

let generator = function (appPath, appName) {
  exists(appPath).then(res => {
    if (res) {
      inquirer.prompt([{
        type: 'confirm',
        name: 'ok',
        message: '此目录已经存在，是否要清空目录继续？',
        default: true
      }]).then((answers) => {
        if (answers.ok) {
          run(appPath, appName)
        } else {
          console.log(chalk.red(`已取消添加新的工程目录:`), chalk.green(`${appName}`))
        }
      })
    } else {
      run(appPath, appName)
    }
  }, err => {
    console.error(err)
  })
}
module.exports = generator
