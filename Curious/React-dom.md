# React Dom

## index.js 파일

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';

ReactDOM.render(
	<React.StrictMode>
  		<App />
  	</React.StrictMode>,
  	document.getElementById('root')
);
```   

<br><br>

## index.html 파일
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
            name="description"
            content="Web site created using create-react-app"
        />
        <title>App</title>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>
    </body>
</html>
```

```jsx
ReactDOM.render(
	<React.StrictMode>
  		<App />
  	</React.StrictMode>,
```

## app.jsx 파일
```jsx
import React from 'react';
import from './app.css';

function App() {
  return <h1>hello :)</h1>;
}  

export default App;
```