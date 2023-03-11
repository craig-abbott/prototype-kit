import matter from 'gray-matter'

function parseFrontMatter (env) {
  env.on('load', (name, source, loader) => {
    const pageData = matter(source.src).data
    if (Object.keys(pageData).length > 0) {
      env.addGlobal('page', pageData)
    }

    // Clear front-matter from template
    const YAMLFrontMatter = /^---[\r\n]*[\S\s]*---/
    if (pageData.layout) {
      const code = `{%- extends '${pageData.layout}' -%}`
      source.src = source.src.replace(YAMLFrontMatter, code)
    } else {
      source.src = source.src.replace(YAMLFrontMatter, '')
    }
  })
}

export default parseFrontMatter
