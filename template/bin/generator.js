let chalk = require('chalk')
let path = require('path')
let fs = require('fs')
let Metalsmith = require('metalsmith')
let inquirer = require('inquirer')
// let async = require('async')
// let consolidate = require('consolidate')

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
}

let addProject = function () {
  return new Promise((resolve, reject) => {
    let tplPath = path.join(__dirname, 'app-tpl')
    Metalsmith(tplPath).source('.')
                       .use(renderTemplate())
  })
}

let run = function () {
  addProject()
}

let generator = function (appPath, appProxy, appName) {
  exists(appPath).then(res => {
    if (res) {
      inquirer.prompt([{
        type: 'confirm',
        name: 'ok',
        message: '此目录已经存在，是否要清空目录继续？',
        default: true
      }]).then((answers) => {
        if (answers.ok) {
          run(appPath, appProxy, appName)
        } else {
          console.log(chalk.red(`已取消添加新的工程目录:`), chalk.green(`${appName}`))
        }
      })
    }
  }, err => {
    console.error(err)
  })
}
module.exports = generator
