const path =    require('path'),
    express =   require('express'),
    webpack =   require('webpack'),
    config =    require('./webpack.config'),
    devmd =     require('webpack-dev-middleware'),
    hotmd =     require('webpack-hot-middleware');

const html = `<!DOCTYPE html>
<html>
    <head>
        <title>VDFM Project X</title>
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
    </head>

    <body class="page-header-fixed page-sidebar-closed-hide-logo page-container-bg-solid page-content-white">
        <div id="app-wrap"></div>

        ` + Object.keys(config.entry).map((key) => `<script src="http://localhost:3000/dist/${key}.js"></script>`).join('\n') + `
    </body>
</html>`;

const app =     express(),
    compiler =  webpack(config),
    port = 3000,
    address = '0.0.0.0';

app.use(devmd(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(hotmd(compiler));

app.use('/', function (req, res) {
  res.send(html);
});

app.listen(port, address, (err) => {
    if(err)
        return console.log(err);

    console.log(`Listening at http://${address}:${port}`);
});