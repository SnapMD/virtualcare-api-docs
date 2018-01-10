# VirtualCare REST API OpenAPI Specification
[![Build Status](https://travis-ci.org/SnapMD/virtualcare-api-docs.svg?branch=master)](https://travis-ci.org/SnapMD/virtualcare-api-docs)

## Links

- Documentation (ReDoc): https://snapmd.github.io/virtualcare-api-docs/
- SwaggerUI: https://snapmd.github.io/virtualcare-api-docs/swagger-ui/
- Full spec:
    + JSON https://snapmd.github.io/virtualcare-api-docs/swagger.json
    + YAML https://snapmd.github.io/virtualcare-api-docs/swagger.yaml
- Preview spec version for branch `[branch]`: https://<i></i>snapmd.github.io/virtualcare-api-docs/preview/[branch]

**Note:** All above links are updated only after Travis CI finishes deployment

## Working on specification
### Install

1. Install [Node JS](https://nodejs.org/)
2. Clone repo and `cd`
    + Run `npm install`

### Usage

1. Run `npm start`
2. Checkout console output to see where local server is started. You can use all [links](#links) (except `preview`) by replacing `https://snapmd.github.io/virtualcare-api-docs/` with url from the message: `Server started <url>`
3. Make changes using your favorite editor or `swagger-editor` (look for URL in console output)
4. All changes are immediately propagated to your local server, moreover all documentation pages will be automatically refreshed 
in the browser after each change
**TIP:** you can open `swagger-editor`, documentation and `swagger-ui` in parallel
5. Once you finish with the changes you can run tests using: `npm test`
6. Share you changes with the rest of the world by pushing to GitHub
