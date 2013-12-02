Loading.js
==========

- This `loading.js` is a component-based web development protocol.
- It's pure javascript.
- It's simple, I think everyone can understand it from source code.

## Loading.js in brief:

Now let's see how it works:

- First let's think web page development as ` page =  position* ; position = section* ; section = html + callback(js) `
- Assume that each web page can be divided into several `position`. (like `#hd`, `#bd`, `#ft`, `#aside`)
- And each `position` may have some unique `section`.(like `#hd .sec-navi`, `#bd .sec-list`)
- So we can bind javacript callback on this `section`. (like `bind("hd","navi",function(target){ console.log("Hello World!"); }`)
- Finally I not care about how server-side implement this protocol, but it is easy.

## Usage:

- Include jQuery & loading.js
- Implement sever-side code
- Add callbacks

```html


	<div id="hd"><div class='section section-navi'>Initial div!</div></div>
	<div id="another-pos"></div>

	<a href='#' class='loading' uri='./link.json'>Click to loading</a>

	<form class='loading' action='./form.json' method='get'>
		<input type='submit' value='Submit to loading' />
	</form>

	<script src='http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js'></script>
	<script src='./loading.js'></script>

	<script>
		bind("hd","navi",function(target){

			console.log("Hello world!");
		});
	</script>
```


## Server-side response:


> GET /loading/example/uri

```json
[{
	"postion":"hd",
	"section":"navi",
	"data":"This is navi"
},{
	"positoin":"another-pos",
	"section":"another-section",
	"data":"We support multi section in a response!"
}]
```

## That's all.
