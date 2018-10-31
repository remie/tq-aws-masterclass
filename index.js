
const html = `
<html>
	<head>
		<style>
			html, body { padding: 0; margin: 0; width: 100%; height: 100%; }
		</style>
	</head>
	<body>
		<iframe style="width:100vw;height:100vh;" src="https://www.youtube.com/embed/wZZ7oFKsKzY?start=21&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	</body>
</html>
`;

require('http').createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(html);
  res.end();
}).listen(8080, () => console.log('http server listening on port 8080'));
