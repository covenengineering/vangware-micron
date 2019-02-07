## Modules

<dl>
<dt><a href="#module_ael">ael</a> ⇒ <code>Array.&lt;ElementType&gt;</code></dt>
<dd><p>Listen to several events on an element or a group of elements.</p>
</dd>
<dt><a href="#module_atr">atr</a> ⇒ <code>Array.&lt;ElementType&gt;</code></dt>
<dd><p>Set several attributes of an element or a group of elements.</p>
</dd>
<dt><a href="#module_cks">cks</a> ⇒ <code>Object.&lt;string, string&gt;</code></dt>
<dd><p>Get the current document cookies in object form.</p>
</dd>
<dt><a href="#module_cne">cne</a> ⇒ <code>Array.&lt;HTMLElement&gt;</code></dt>
<dd><p>Creates a new element.</p>
</dd>
<dt><a href="#module_cry">cry</a> ⇒ <code>any</code></dt>
<dd><p>Curry the given function.
Loosely typed because typing curry is hell.</p>
</dd>
<dt><a href="#module_css">css</a> ⇒ <code>Array.&lt;ElementType&gt;</code></dt>
<dd><p>Set several styles of an element or a group of elements.</p>
</dd>
<dt><a href="#module_del">del</a> ⇒ <code>Array.&lt;ElementType&gt;</code></dt>
<dd><p>Remove an element or a group of elements from the DOM.</p>
</dd>
<dt><a href="#module_dom">dom</a> ⇒ <code>Array.&lt;Document&gt;</code></dt>
<dd><p>Parse string into DOM.</p>
</dd>
<dt><a href="#module_get">get</a> ⇒ <code>Array.&lt;ElementType&gt;</code></dt>
<dd><p>Alias for querySelectorAll in an array.</p>
</dd>
<dt><a href="#module_mrx">mrx</a> ⇒ <code>string</code></dt>
<dd><p>Takes a string and an object and makes a regex map replace</p>
</dd>
<dt><a href="#module_obj">obj</a> ⇒ <code>ObjectType</code></dt>
<dd><p>Creates a clean object.</p>
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

## ael ⇒ <code>Array.&lt;ElementType&gt;</code>
Listen to several events on an element or a group of elements.

**Returns**: <code>Array.&lt;ElementType&gt;</code> - DOM Element or Array of DOM Elements with event.  
**Template**: <code>HTMLElement</code> ElementType  

| Param | Type | Description |
| --- | --- | --- |
| E | <code>ElementType</code> \| <code>Array.&lt;ElementType&gt;</code> | DOM Element or Array of DOM Elements with event. |
| V | <code>Object.&lt;string, EventListener&gt;</code> | List of events and callbacks in Object format. |

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

## atr ⇒ <code>Array.&lt;ElementType&gt;</code>
Set several attributes of an element or a group of elements.

**Returns**: <code>Array.&lt;ElementType&gt;</code> - DOM Element or Array of DOM Elements with new attributes.  
**Template**: <code>HTMLElement</code> ElementType  

| Param | Type | Description |
| --- | --- | --- |
| E | <code>ElementType</code> \| <code>Array.&lt;ElementType&gt;</code> | DOM Element or Array of DOM Elements with event. |
| A | <code>Object.&lt;string, string&gt;</code> | List of attributes in Object format. |

**Example**  
```js
// <a id="id">Link</a>
atr(get("#id"), {
  class: "a-class"
});
// <a id="id" class="a-class">Link</a>
```
<a name="module_cks"></a>

## cks ⇒ <code>Object.&lt;string, string&gt;</code>
Get the current document cookies in object form.

**Returns**: <code>Object.&lt;string, string&gt;</code> - The document cookies object.  
**Example**  
```js
cks(); // If document.cookie is "a=1; b=2", returns { a: 1, b: 2 }
cks(); // If document.cookie is empty, returns {}
```
<a name="module_cne"></a>

## cne ⇒ <code>Array.&lt;HTMLElement&gt;</code>
Creates a new element.

**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - New element with properties set.  
**Template**: <code>keyof HTMLElementTagNameMap</code> TagType  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| t | <code>TagType</code> \| <code>string</code> |  | Element tag. |
| [P] | <code>Object.&lt;string, string&gt;</code> | <code>{}</code> | Element properties. |

**Example**  
```js
cne("div"); // Returns <div></div>
cne("div", {
  width: "100",
  height: "100",
  style: {
    backgroundColor: "#000"
  }
}); // Returns <div width="100" height="100" style="background-color:#000"></div>
```
<a name="module_cry"></a>

## cry ⇒ <code>any</code>
Curry the given function.
Loosely typed because typing curry is hell.

**Returns**: <code>any</code> - Curried function or function output.  

| Param | Type | Description |
| --- | --- | --- |
| f | <code>function</code> | Function to be curried. |
| ...A | <code>any</code> | Arguments. |

**Example**  
```js
const add = (a, b) => a + b;
const curriedAdd = cry(add);
const addTwo = curriedAdd(2);

curriedAdd(1)(2); // Returns 3
addTwo(3); // Returns 5
```
<a name="module_css"></a>

## css ⇒ <code>Array.&lt;ElementType&gt;</code>
Set several styles of an element or a group of elements.

**Returns**: <code>Array.&lt;ElementType&gt;</code> - DOM Element or Array of DOM Elements with new styles.  
**Template**: <code>HTMLElement</code> ElementType  

| Param | Type | Description |
| --- | --- | --- |
| E | <code>ElementType</code> \| <code>Array.&lt;ElementType&gt;</code> | DOM Element or Array of DOM Elements to set styles. |
| S | <code>CSSStyleDeclaration</code> | List of styles in Object format. |

**Example**  
```js
// <a id="id">Link</a>
css(get("#id"), {
  fontWeight: 700
});
// <a id="id" style="font-weight:700">Link</a>
```
<a name="module_del"></a>

## del ⇒ <code>Array.&lt;ElementType&gt;</code>
Remove an element or a group of elements from the DOM.

**Returns**: <code>Array.&lt;ElementType&gt;</code> - DOM Element or Array of DOM Elements removed from DOM.  
**Template**: <code>HTMLElement</code> ElementType  

| Param | Type | Description |
| --- | --- | --- |
| E | <code>ElementType</code> \| <code>Array.&lt;ElementType&gt;</code> | DOM Element or Array of DOM Elements to remove from DOM. |

**Example**  
```js
// <a id="id">Link</a>
del(get("#id")); // Element gets removed from the DOM and returned
```
<a name="module_dom"></a>

## dom ⇒ <code>Array.&lt;Document&gt;</code>
Parse string into DOM.

**Returns**: <code>Array.&lt;Document&gt;</code> - Parsed DOM.  

| Param | Type | Description |
| --- | --- | --- |
| s | <code>string</code> | String to be parsed. |

**Example**  
```js
dom("<a>Hello world</a>"); // Returns document object with that link on the body
```
<a name="module_get"></a>

## get ⇒ <code>Array.&lt;ElementType&gt;</code>
Alias for querySelectorAll in an array.

**Returns**: <code>Array.&lt;ElementType&gt;</code> - Array of elements.  
**Template**: <code>HTMLElement</code> ElementType  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| q | <code>string</code> |  | CSS Query. |
| [e] | <code>ElementType</code> \| <code>Document</code> | <code>document</code> | Base element. |

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
| m | <code>Object.&lt;string, string&gt;</code> | Map with format `{ "target": "replacing string" }`. |

**Example**  
```js
mrx("abc", {"a":1,"b":2,"c":3}); // Returns "123"
```
<a name="module_obj"></a>

## obj ⇒ <code>ObjectType</code>
Creates a clean object.

**Returns**: <code>ObjectType</code> - New clean object.  
**Template**: ObjectType  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>ObjectType</code> | Objects to use. |

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
| n | <code>number</code> \| <code>string</code> |  | Number to be padded. |
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

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [l] | <code>number</code> | <code>10</code> | Length of the random string. |

**Example**  
```js
rnd(); // Random string of 10 characters, like: "oosjghfusv".
rnd(5); // Random string of 5 characters, like: "fz5ik".
```
<a name="module_tsh"></a>

## tsh ⇒ <code>string</code>
Timestamp string hash generator (up to 8 characters).

**Returns**: <code>string</code> - A timestamp hash.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [l] | <code>number</code> | <code>8</code> | Length of the random string (8 max). |

**Example**  
```js
tsh(); // Timestamp hash of 8 characters, like: "km5ztiej".
tsh(4); // Timestamp hash of 4 characters, like: "ytbz".
```
<a name="module_url"></a>

## url ⇒ <code>string</code>
Parse an object into a simple string in URL format for XHR.

**Returns**: <code>string</code> - URL formated string.  
**Template**: ObjectType  

| Param | Type | Description |
| --- | --- | --- |
| o | <code>ObjectType</code> | List of input data for ajax in Object format. |

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
| [m] | <code>string</code> | <code>&quot;\&quot;GET\&quot;&quot;</code> | Method. |

**Example**  
```js
xhr("/api").send(); // Sends request to /api
```
