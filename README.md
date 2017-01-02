# markdown-it-task-list

Plugin for markdown-it, supports GitHub style task list.


## Installation

```
yarn add markdown-it-task-list
```


## Usage

```javascript
import markdownIt from 'markdown-it'
import markdownItTaskList from 'markdown-it-task-list'
const mdi = markdownIt()
mdi.use(markdownItIcons)
mdi.render('- [ ] task 1') // <p></p>
mdi.render('- [x] task 2') // <p></p>
```


## Development

### Build

```
yarn run build
```

### Test

```
yarn test
```