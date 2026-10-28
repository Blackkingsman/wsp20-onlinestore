# Online Store

My first web app: a storefront backend plus a product admin panel, built for a college web programming course in Spring 2020.

> Built by hand in 2020, before AI coding tools. Left as originally written.

## Features

- Admin login with Firebase Auth
- Add products, with form validation
- View, edit, and delete products
- Single-page admin UI served by an Express app

## Tech

- **JavaScript** (vanilla, no framework)
- **Firebase Cloud Functions** running **Express**
- **Firebase Auth**, Firestore, and Hosting

## Project layout

```
functions/index.js                   Express app exported as a Cloud Function
functions/prodadmin/prodadmin.html   admin single-page app
functions/prodadmin/js/              login, home, add, show pages, auth, validation
public/                              static hosting
```

## Running it

You need the Firebase CLI and your own Firebase project. Replace the config in `prodadmin.html` with yours, then:

```bash
cd functions && npm install
firebase emulators:start   # or: firebase deploy
```
