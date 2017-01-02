import assert from 'assert'
import markdownIt from 'markdown-it'
import markdownItTaskList from '../src/index'

const mdi = markdownIt()
mdi.use(markdownItTaskList)

assert(mdi.render('# Hello world').trim() === '<h1>Hello world</h1>', '# Hello world')
assert(mdi.render('Hello world').trim() === '<p>Hello world</p>', 'Hello world')

console.log(mdi.render('- [ ] task 1'))
console.log(mdi.render('- [x] task 2'))

assert(mdi.render('- [ ] task 1').trim() === '<ul>\n<li class="task-list-item"><input type="checkbox" disabled /> task 1</li>\n</ul>', '- [ ] task 1')
assert(mdi.render('- [x] task 2').trim() === '<ul>\n<li class="task-list-item"><input type="checkbox" disabled checked /> task 2</li>\n</ul>', '- [x] task 2')
