# PrognRoll

> A tiny, lightweight jQuery plugin that creates scroll progress bar on the page

## Install

Load jQuery and include PrognRoll file

```html
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://raw.githack.com/mburakerman/prognroll/master/src/prognroll.min.js"></script>
```

## Usage

To see scrolling progress on your page, you need to activate PrognRoll.

```js
$(function() {
  $("body").prognroll();
});
```
That's it!

You can also customize the progress bar. These are default settings.

```js
$(function() {
  $("body").prognroll({
    height: 5, // progress bar height
    color: "#50bcb6", // progress bar background color
    custom: false // if you make it true, you can add your custom div and see it's scroll progress on the page
  });
});
```

## Examples

Body

```html
<body>
<!-- Content -->
</body>
```
```js
$(function() {
  $("body").prognroll();
});
```
[Body demo on JSFiddle](https://jsfiddle.net/78rwvmu0/)

Custom div

```html
<div class="box">
<!-- Content -->
</div>
```

```js
$(function() {
  $(".box").prognroll({
    custom: true
  });
});
```
[Custom div demo on JSFiddle](https://jsfiddle.net/37j4uh2d/)

## Size

1 kb minified

## License

Licensed under the MIT License.
