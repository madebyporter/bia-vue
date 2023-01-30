export default function({ app, redirect }) {
    app.contentful.getClient().defaultHostname = 'preview.contentful.com'
}