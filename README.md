> an example how to integrate contentful into the vue-starter

# Installation

- install contentful `npm install --save --save-exact contentful`
- delete the folder `./src/app/app/NotFound`
- change `./src/app/app/routes.ts` to

```typescript
import { RouteConfig } from 'vue-router/types/router';

export const AppRoutes: RouteConfig[] = [
  {
    path:      '/error',
    component: () => import(/* webpackChunkName: "error" */ './Error/Error.vue').then(m => m.default),
  },

  // example redirect
  // TODO: remove from production code
  {
    path:     '/redirect',
    redirect: '/',
  },

  // example route for authentication guard
  // will redirect to `/login` (implemented in `src/app/router`)
  // TODO: remove from production code
  {
    path: '/requires-auth',
    meta: { requiresAuth: true },
  },
];
```
- copy the contents of the `src` directory of this repository into your vue-starter project

# Create Contentful Models

## Page

![page model](page.png?raw=true)

## Text

![page model](text.png?raw=true)

## Gallery

![page model](gallery.png?raw=true)

# Create Content

## Test Page

![page model](testpage.png?raw=true)

## Notfound Page

![page model](notfound.png?raw=true)

# Testing

- run your app `CONTENTFUL_ACCESS_TOKEN=your-token CONTENTFUL_SPACE_ID=your-space-id npm run dev`
- go to [http://localhost:3000/test](http://localhost:3000/test)
  - you should see the content from contentful
- go to [http://localhost:3000/foo](http://localhost:3000/foo)
 - you should get a 404 error in the network tab and the content from contentful
 
# Next steps
- create more content models and refine the logic in the contentful module e.g. use `<component :is="item.component" v-bind="item.properties" />`
