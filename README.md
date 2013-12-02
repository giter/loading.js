Loading.js
==========

This `loading.js` ajax engine is a pure javascript web-development protocol for component-based web development.

It is very simple that I think every web developer can understand it from source code.

## Loading.js in brief:

Now let's see how it works:

  First let's think web page development as ` html = section + callback `
	
  Assume that each web page can be divided into several `position`. (like `#hd`, `#bd`, `#ft`, `#aside`)

  And each `position` may have some unique `section`.(like `#hd .sec-navi`, `#bd .sec-list`)
	
  So we can bind javacript callback on this `section`. (like `call("hd","navi",function(){ console.log("Hello World!"); }`)

  Finally we not care about how server-side implement this protocol.

## Usage:

- Include jQuery & loading.js
- Implement sever-side code
- Add callbacks

...html


	<div id="hd"><div class='section section-navi'>Initial div!</div></div>
	<div id="another-pos"></div>

	<a href='#' class='loading' uri='/loading/example/uri'>Click to loading</a>

	<form action='/loading/example/uri' method='get'>
		<input type='submit' value='Submit to loading' />
	</form>

	<script src='jquery.js></script>
	<script src='loading.js></script>

	<script>

		bind("hd","navi",function(target){

			console.log("Hello world!");
		});

	</script>

...


## Server-side response:

...json

> GET /loading/example/uri

[{
	"postion":"hd",
	"section":"navi",
	"data":"This is navi"
},{
	"positoin":"another-pos",
	"section":"another-section",
	"data":"We support multi section in a response!"
}]


## That's all.
