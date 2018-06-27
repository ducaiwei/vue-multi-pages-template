#! /usr/bin/env node

let program = require('commander')
let path = require('path')
let generator = require('./generator')

program.allowUnknownOption()
program.command('generator <name>')
       .action(function (name) {
           let projectPath = path.join(__dirname, `../src/pages/${name}`)
           generator(projectPath, name)
       })
program.parse(process.argv)