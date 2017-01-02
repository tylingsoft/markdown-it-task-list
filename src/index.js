const taskListPlugin = (md) => {
  md.tags = {}

  md.renderer.renderInline = function (tokens, options, env) {
    let result = md.renderer.constructor.prototype.renderInline.call(this, tokens, options, env)
    if ((md.tags['bullet_list'] || 0) > 0 && (md.tags['list_item'] || 0) > 0) {
      if (tokens[0].content.startsWith('[ ] ')) {
        return '<input type="checkbox" disabled /> ' + result.substr(4)
      } else if (tokens[0].content.startsWith('[x] ')) {
        return '<input type="checkbox" disabled checked /> ' + result.substr(4)
      }
    }
    return result
  }

  md.renderer.renderToken = function (tokens, idx, options) {
    let token = tokens[idx]
    let tag = token.type
    if (tag.endsWith('_open')) {
      let _tag = tag.substr(0, tag.length - 5)
      md.tags[_tag] = (md.tags[_tag] || 0) + 1
    } else if (tag.endsWith('_close')) {
      let _tag = tag.substr(0, tag.length - 6)
      md.tags[_tag] = (md.tags[_tag] || 0) - 1
    }

    if ((md.tags['bullet_list'] || 0) > 0 && tag === 'list_item_open' &&
      (tokens[idx + 2].content.startsWith('[ ] ') || tokens[idx + 2].content.startsWith('[x] '))) {
      token.attrPush(['class', 'task-list-item'])
    }

    return md.renderer.constructor.prototype.renderToken.call(this, tokens, idx, options)
  }
}

export default taskListPlugin
