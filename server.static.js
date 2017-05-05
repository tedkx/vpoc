const path =    require('path'),
    express =   require('express'),
    config =    require('./webpack.config');

const html = `<!DOCTYPE html>
<html>
    <head>
        <title>VDFM Project X</title>
    </head>

    <body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-content-white">
        <div id="app-wrap"></div>

        ` + Object.keys(config.entry).map((key) => `<script src="dist/${key}.js"></script>`).join('\n') + `
    </body>
</html>`;

const app =     express(),
    port = 3000,
    address = '0.0.0.0';

app.use('/dist', express.static('build'))

app.use('/', function (req, res) {
  res.send(html);
});

app.listen(port, address, (err) => {
    if(err)
        return console.log(err);

    console.log(`Listening at http://${address}:${port}`);
});