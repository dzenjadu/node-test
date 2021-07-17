//File System
const fs = require('fs')
const path = require('path')

// console.log(fs)

//создать папку
// fs.mkdir(path.join(__dirname, 'fs_test_folder'), (err) => {
//     if (err) throw new Error(err)
//     console.log('Папка была создана.')
// })

//создать файл
// fs.writeFile(
//     path.join(__dirname, 'fs_test_folder', 'test_file.txt'),
//     'Hello',
//     (err) => {
//         if (err) throw new Error(err)
//         console.log('Файл был создан.')
//     }
// )

//добавить контент в файл
// fs.appendFile(
//     path.join(__dirname, 'fs_test_folder', 'test_file.txt'),
//     ' Hello 2',
//     (err) => {
//         if (err) throw new Error(err)
//         console.log('Файл был изменен.')
//     }
// )

//считывать содержимое файла
// fs.readFile(
//     path.join(__dirname, 'fs_test_folder', 'test_file.txt'),
//     'utf-8',
//     (err, data) => {
//         if (err) throw new Error(err)
//         console.log(Buffer.from(data).toString())
//     }
// )

//переименовать файл
// fs.rename(
//     path.join(__dirname, 'fs_test_folder', 'test_file.txt'),
//     path.join(__dirname, 'fs_test_folder', 'test_file_renamed.txt'),
//     (err) => {
//         if (err) throw new Error(err)
//         console.log('Файл был переименован.')
//     }
// )