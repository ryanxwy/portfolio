// sanity setup
import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
})

// useful for our images
const builder = imageUrlBuilder(client)

// generate the url of image stored in the sanity dataset
export const urlFor = (source) => builder.image(source)
