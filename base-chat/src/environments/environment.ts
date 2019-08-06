// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
    firebase: {
	apiKey: 'AIzaSyBJh7_aJYQFJjmm7GBbdVSlxJD5KlamIgw',
    authDomain: 'chat-demo-fd4ed.firebaseapp.com',
    databaseURL: 'https://chat-demo-fd4ed.firebaseio.com',
    projectId: 'chat-demo-fd4ed',
    storageBucket: 'chat-demo-fd4ed.appspot.com',
    messagingSenderId: '544816847509'
  }
};
