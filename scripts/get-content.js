/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */

require('dotenv').config()
const fs = require('fs')
const path = require('path')
const { createClient } = require('contentful')

const SPACE = process.env.CONTENTFUL_SPACE
const TOKEN = process.env.CONTENTFUL_TOKEN

console.log('tokens', SPACE, TOKEN)

const client = createClient({
  space: SPACE,
  accessToken: TOKEN,
})

const types = ['project']

const getContent = async () => {
  console.log('> Starting import...')
  types.forEach(async (type) => {
    console.log('> Getting content for', type)
    const entries = await client.getEntries({
      // eslint-disable-next-line camelcase
      content_type: type,
      include: 3,
    })

    const allFields = entries.items.map(({ sys, fields }) => {
      console.log('> Saving id', sys.id)
      return Object.assign({}, fields, {
        id: sys.id,
      })
    })
    console.log('> Found', allFields.length, 'items')
    fs.writeFileSync(
      path.join(__dirname, '..', 'data', `${type}.json`),
      JSON.stringify(allFields),
    )
    console.log('> Content gotten and written for', type)
  })

  return true
}

module.exports = { getContent }

if (process.argv[2] === 'install') {
  getContent()
}
