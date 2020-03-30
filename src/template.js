const template = (title = '', initialState = {}, content = '') => {
  const scripts = content
    ? `
      <script>
        window.__STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="assets/client.js"></script>
    `
    : '<script src="assets/bundle.js"></script>';

  const page = 
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>${title}</title>
        <link type="text/css" rel="stylesheet" href="assets/style.css">
      </head>
      <body>
        <div>
            <div id="app">
              ${content}
            </div>
        </div>
          ${scripts}
      </body>
    </html>
    `;
  return page;
};

export default template;
