# CheckerITPTIT - Front End

- React version : 18.2.0
- MUI : 5.13.7

## Scripts

> - `npm start` : Start development server
> - `npm run build` : Build production
> - `npm run test` : Run test
> - `npm run ejectproject` : Eject config
> - `npm run prettier` : Format code

## Project structure

> - `public` : Public files
> - `src` : Source code
> - |- `assets` : Static files
> - - |- `images` : Images
> - - |- `sounds` : Sounds
> - - |- `videos` : Videos
> - - |- `others` : Other assets
> - |- `components` : Global components
> - |- `layouts` : Global layouts
> - |- `config` : Config files
> - - |- `config.js` : Init project config
> - - |- `routes.js` : Routes config
> - |- `pages` : All pages
> - |- `redux` : Redux files
> - - |- `actions` : Redux actions
> - - |- `reducers` : Redux reducers
> - - |- `store.js` : Redux store ( init store, middlewares, ...)
> - |- `services` : Services (api, ...)
> - |- `styles` : Global styles
> - |- `utils` : Utils (helpers, ...)
> - |- `App.js` : Root component
> - |- `index.jsx` : ReactDOM render

## Routes:

> - `/` - Landing page ( including `news`)

**Authencation**

> - `/auth/login` : Login page
> - `/auth/register` : Register page (optional)

**View > Member**
( thêm sau kkk )

> - `/member` : View all members
> - `/member/:id` : View member detail
