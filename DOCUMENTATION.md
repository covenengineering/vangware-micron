## Modules

<dl>
<dt><a href="#module_ael">ael</a> ⇒ <code>Array.&lt;HTMLElement&gt;</code></dt>
<dd><p>Listen to several events on an element or a group of elements.</p>
</dd>
<dt><a href="#module_atr">atr</a> ⇒ <code>Array.&lt;HTMLElement&gt;</code></dt>
<dd><p>Set several attributes of an element or a group of elements.</p>
</dd>
<dt><a href="#module_cks">cks</a> ⇒ <code>Object</code></dt>
<dd><p>Get the current document cookies in object form.</p>
</dd>
<dt><a href="#module_cry">cry</a> ⇒ <code>function</code></dt>
<dd><p>Curry the given function.</p>
</dd>
<dt><a href="#module_css">css</a> ⇒ <code>Array.&lt;HTMLElement&gt;</code></dt>
<dd><p>Set several styles of an element or a group of elements.</p>
</dd>
<dt><a href="#module_del">del</a> ⇒ <code>Array.&lt;HTMLElement&gt;</code></dt>
<dd><p>Remove an element or a group of elements from the DOM.</p>
</dd>
<dt><a href="#module_dom">dom</a> ⇒ <code>Document</code></dt>
<dd><p>Parse string into DOM.</p>
</dd>
<dt><a href="#module_get">get</a> ⇒ <code>Array.&lt;HTMLElement&gt;</code></dt>
<dd><p>Alias for querySelectorAll, but returning an array instead of a nodeList.</p>
</dd>
<dt><a href="#module_mrx">mrx</a> ⇒ <code>string</code></dt>
<dd><p>Takes a string and an object and makes a regex map replace</p>
</dd>
<dt><a href="#module_obj">obj</a> ⇒ <code>Object</code></dt>
<dd><p>Creates a clean object with a forEach method.</p>
</dd>
<dt><a href="#module_pad">pad</a> ⇒ <code>string</code></dt>
<dd><p>Add padding zeros to passed number.</p>
</dd>
<dt><a href="#module_rnd">rnd</a> ⇒ <code>string</code></dt>
<dd><p>Random string generator (up to 10 characters).
Credit: <a href="https://github.com/Jacob-Friesen/obscurejs/blob/master/2015/oneLineRandomText.js">https://github.com/Jacob-Friesen/obscurejs/blob/master/2015/oneLineRandomText.js</a></p>
</dd>
<dt><a href="#module_tsh">tsh</a> ⇒ <code>string</code></dt>
<dd><p>Timestamp string hash generator (up to 8 characters).</p>
</dd>
<dt><a href="#module_url">url</a> ⇒ <code>string</code></dt>
<dd><p>Parse an object into a simple string in URL format for XHR.</p>
</dd>
<dt><a href="#module_xhr">xhr</a> ⇒ <code>XMLHttpRequest</code></dt>
<dd><p>Alias for new XMLHttpRequest, with GET method by default.</p>
</dd>
</dl>

<a name="module_ael"></a>

## ael ⇒ <code>Array.&lt;HTMLElement&gt;</code>
Listen to several events on an element or a group of elements.

**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - DOM Element or Array of DOM Elements with event.  

| Param | Type | Description |
| --- | --- | --- |
| E | <code>HTMLElement</code> \| <code>Array.&lt;HTMLElement&gt;</code> | DOM Element or Array of DOM Elements with event. |
| V | <code>Object</code> | List of events and callbacks in Object format. |

**Example**  
```js
// <a id="id">Link</a>
ael(get("#id"), {
  click: event => {
    event.preventDefault();
    console.log("#id element clicked");
  }
});
```
<a name="module_atr"></a>

## atr ⇒ <code>Array.&lt;HTMLElement&gt;</code>
Set several attributes of an element or a group of elements.

**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - DOM Element or Array of DOM Elements with new attributes.  

| Param | Type | Description |
| --- | --- | --- |
| E | <code>HTMLElement</code> \| <code>Array.&lt;HTMLElement&gt;</code> | DOM Element or Array of DOM Elements with event. |
| A | <code>Object</code> | List of attributes in Object format. |

**Example**  
```js
// <a id="id">Link</a>
atr(get("#id"), {
  class: "a-class"
});
// <a id="id" class="a-class">Link</a>
```
<a name="module_cks"></a>

## cks ⇒ <code>Object</code>
Get the current document cookies in object form.

**Returns**: <code>Object</code> - The document cookies object.  
<a name="module_cry"></a>

## cry ⇒ <code>function</code>
Curry the given function.

**Returns**: <code>function</code> - Curried function.  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | Function to be curried. |
| A | <code>Array.&lt;any&gt;</code> | Arguments. |

**Example**  
```js
const add = (a, b) => a + b;
const curryedAdd = cry(add);
const addTwo = curryedAdd(2);

curryedAdd(1)(2); // Returns 3
addTwo(3); // Returns 5
```
<a name="module_css"></a>

## css ⇒ <code>Array.&lt;HTMLElement&gt;</code>
Set several styles of an element or a group of elements.

**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - DOM Element or Array of DOM Elements with new styles.  

| Param | Type | Description |
| --- | --- | --- |
| E | <code>HTMLElement</code> \| <code>Array.&lt;HTMLElement&gt;</code> | DOM Element or Array of DOM Elements to set styles. |
| S | <code>Object</code> | List of styles in Object format. |

**Example**  
```js
// <a id="id">Link</a>
css(get("#id"), {
  fontWeight: 700
});
// <a id="id" style="font-weight:700">Link</a>
```
<a name="module_del"></a>

## del ⇒ <code>Array.&lt;HTMLElement&gt;</code>
Remove an element or a group of elements from the DOM.

**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - DOM Element or Array of DOM Elements removed from DOM.  

| Param | Type | Description |
| --- | --- | --- |
| E | <code>HTMLElement</code> \| <code>Array.&lt;HTMLElement&gt;</code> | DOM Element or Array of DOM Elements to remove from DOM. |

**Example**  
```js
// <a id="id">Link</a>
del(get("#id")); // Element gets removed from the DOM and returned
```
<a name="module_dom"></a>

## dom ⇒ <code>Document</code>
Parse string into DOM.

**Returns**: <code>Document</code> - Parsed DOM.  

| Param | Type | Description |
| --- | --- | --- |
| S | <code>string</code> | String to be parsed. |

**Example**  
```js
dom("<a>Hello world</a>"); // Returns document object with that link on the body
```
<a name="module_get"></a>

## get ⇒ <code>Array.&lt;HTMLElement&gt;</code>
Alias for querySelectorAll, but returning an array instead of a nodeList.

**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - Array of elements.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| q | <code>string</code> |  | CSS Query. |
| [e] | <code>HTMLElement</code> | <code>document</code> | Base element. |

**Example**  
```js
// <a id="id">Link</a>
get("#id"); // Above element gets returned
```
<a name="module_mrx"></a>

## mrx ⇒ <code>string</code>
Takes a string and an object and makes a regex map replace

**Returns**: <code>string</code> - String with replaced elements from map.  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>string</code> | String. |
| m | <code>Object</code> | Map with format { "string to be replaced": "replacing string" }. |

**Example**  
```js
mrx("abc", {"a":1,"b":2,"c":3}); // Returns "123"
```
<a name="module_obj"></a>

## obj ⇒ <code>Object</code>
Creates a clean object with a forEach method.

**Returns**: <code>Object</code> - New clean object.  

| Param | Type | Description |
| --- | --- | --- |
| ...o | <code>Object</code> | Objects to use. |

**Example**  
```js
obj({ a: 1, b: 2, c: 3}).__proto__ === void 0; // true, because is a clean object
```
<a name="module_pad"></a>

## pad ⇒ <code>string</code>
Add padding zeros to passed number.

**Returns**: <code>string</code> - Padded number.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| n | <code>number</code> |  | Number to be padded. |
| [l] | <code>number</code> | <code>2</code> | Total length of resulting number. |

**Example**  
```js
pad(1); // Returns "01"
pad(2, 5); // Returns "00002"
```
<a name="module_rnd"></a>

## rnd ⇒ <code>string</code>
Random string generator (up to 10 characters).
Credit: https://github.com/Jacob-Friesen/obscurejs/blob/master/2015/oneLineRandomText.js

**Returns**: <code>string</code> - A random string.  

| Param | Type | Description |
| --- | --- | --- |
| l | <code>number</code> | Length of the random string. |

<a name="module_tsh"></a>

## tsh ⇒ <code>string</code>
Timestamp string hash generator (up to 8 characters).

**Returns**: <code>string</code> - A timestamp hash.  

| Param | Type | Description |
| --- | --- | --- |
| l | <code>number</code> | Length of the random string (8 max). |

<a name="module_url"></a>

## url ⇒ <code>string</code>
Parse an object into a simple string in URL format for XHR.

**Returns**: <code>string</code> - URL formated string.  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>Object</code> | List of input data for ajax in Object format. |

**Example**  
```js
url({ a: 1, b: 2, c: 3 }); // Returns "a=1&b=2&c=3"
url({ a: [1, 2, 3], b: { c: 1, d: 2 } }) // Returns "a[0]=1&a[1]=2&a[2]=3&b[c]=1&b[d]=2"
```
<a name="module_xhr"></a>

## xhr ⇒ <code>XMLHttpRequest</code>
Alias for new XMLHttpRequest, with GET method by default.

**Returns**: <code>XMLHttpRequest</code> - The opened XML HTTP Request.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| u | <code>string</code> |  | URL. |
| [m] | <code>string</code> | <code>&quot;GET&quot;</code> | Method. |

**Example**  
```js
xhr("/api").send(); // Sends request to /api
```
