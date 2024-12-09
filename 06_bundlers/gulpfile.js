//1 сначало подключаем необходимые инструменты для вызова плагнов
const { src, dest, series, watch } = require('gulp')

//2 устанавливаем плагины
//функция канкат, чтобы объединять файлы
const concat = require('gulp-concat') //нужно через терминал установить npm i -D gulp-concat
//функция gulp-htmlmin, чтобы минифицировать html
const htmlMin = require('gulp-htmlmin') //нужно через терминал установить npm i -D gulp-htmlmin

//3 gulp-task объединять файлы
const styles = () => {
  return src('src/styles/**/*.css') //исходники с которыми будет работать таск
    .pipe(concat('main.css')) //объединяет в один файл main.css все исходники которые нашел с расширением css
    .pipe(dest('dist')) //в папку dist сохранить результат
}
//gulp-task минифицировать html
const htmlMinify = () => {
  return src('src/**/*.html') //выбирает все файлы в папке src с расширением html
    .pipe(htmlMin({  //выполняем функцию htmlMin и передаём следующие параметры
      collapseWhitespace: true, //
    }))
    .pipe(dest('dist'))//в папку dist сохранить результат
}

//4 экспортируй таск styles в котором будет вызываться функция styles
exports.styles = styles //и выполнить таск через терминал gulp styles
//экспортируй таск htmlMinify в котором будет вызываться функция htmlMinify
exports.htmlMinify = htmlMinify //и выполнить таск через терминал gulp htmlMinify

//4 выполнение всех тасков, чтобы не писать каждый раз кажый экспорт таска отдельно
exports.default = series(htmlMinify, styles) //в терминале пишем просто gulp и запускаются все таски по очереди, как здесь указано
