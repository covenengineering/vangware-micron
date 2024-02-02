## Modules

<dl>
<dt><a href="#module_ael">ael</a> ⇒ <code><a href="#CurriedAEL">CurriedAEL</a></code></dt>
<dd><p>Listen to several events on an element or a group of elements.</p>
</dd>
<dt><a href="#module_atr">atr</a> ⇒ <code><a href="#CurriedATR">CurriedATR</a></code></dt>
<dd><p>Set several attributes of an element or a group of elements.</p>
</dd>
<dt><a href="#module_cks">cks</a> ⇒ <code>Record.&lt;string, string&gt;</code></dt>
<dd><p>Get the current document cookies in object form.</p>
</dd>
<dt><a href="#module_cne">cne</a> ⇒ <code><a href="#CurriedCNE">CurriedCNE</a></code></dt>
<dd><p>Creates a new element.</p>
</dd>
<dt><a href="#module_css">css</a> ⇒ <code><a href="#CurriedCSS">CurriedCSS</a></code></dt>
<dd><p>Set several styles of an element or a group of elements.</p>
</dd>
<dt><a href="#module_del">del</a> ⇒ <code>Array.&lt;HTMLElement&gt;</code></dt>
<dd><p>Remove an element or a group of elements from the DOM.</p>
</dd>
<dt><a href="#module_dom">dom</a> ⇒ <code>Array.&lt;Document&gt;</code></dt>
<dd><p>Parse string into DOM.</p>
</dd>
<dt><a href="#module_get">get</a> ⇒ <code>Array.&lt;HTMLElement&gt;</code></dt>
<dd><p>Alias for querySelectorAll in an array.</p>
</dd>
<dt><a href="#module_mrx">mrx</a> ⇒ <code><a href="#CurriedMRX">CurriedMRX</a></code></dt>
<dd><p>Takes a string and an object and makes a regex map replace</p>
</dd>
<dt><a href="#module_obj">obj</a> ⇒ <code>ObjectType</code></dt>
<dd><p>Creates a clean object.</p>
</dd>
<dt><a href="#module_tsh">tsh</a> ⇒ <code>string</code></dt>
<dd><p>Timestamp string hash generator (up to 8 characters).</p>
</dd>
<dt><a href="#module_url">url</a> ⇒ <code>string</code></dt>
<dd><p>Parse an object into a simple string in URL format for XHR.</p>
</dd>
<dt><a href="#module_xhr">xhr</a> ⇒ <code><a href="#CurriedXHR">CurriedXHR</a></code></dt>
<dd><p>Alias for new XMLHttpRequest, with GET method by default.</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#CurriedAEL">CurriedAEL</a> ⇒ <code>Array.&lt;HTMLElement&gt;</code></dt>
<dd></dd>
<dt><a href="#CurriedATR">CurriedATR</a> ⇒ <code>Array.&lt;HTMLElement&gt;</code></dt>
<dd></dd>
<dt><a href="#CurriedCNE">CurriedCNE</a> ⇒ <code>Array.&lt;HTMLElement&gt;</code></dt>
<dd></dd>
<dt><a href="#CurriedCSS">CurriedCSS</a> ⇒ <code>Array.&lt;HTMLElement&gt;</code></dt>
<dd></dd>
<dt><a href="#CurriedMRX">CurriedMRX</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#CurriedXHR">CurriedXHR</a> ⇒ <code>XMLHttpRequest</code></dt>
<dd></dd>
</dl>

<a name="module_ael"></a>

## ael ⇒ [<code>CurriedAEL</code>](#CurriedAEL)

Listen to several events on an element or a group of elements.

| Param | Type                                              | Description                                    |
| ----- | ------------------------------------------------- | ---------------------------------------------- |
| V     | <code>Record.&lt;string, EventListener&gt;</code> | List of events and callbacks in Object format. |

**Example**

```typescript
// <a id="id">Link</a>
ael({
	click: event => {
		event.preventDefault();
		console.log("#id element clicked");
	},
})(get("#id"));
```

<a name="module_atr"></a>

## atr ⇒ [<code>CurriedATR</code>](#CurriedATR)

Set several attributes of an element or a group of elements.

| Param | Type                                       | Description                          |
| ----- | ------------------------------------------ | ------------------------------------ |
| A     | <code>Record.&lt;string, string&gt;</code> | List of attributes in Object format. |

**Example**

```typescript
// <a id="id">Link</a>
atr({
	class: "a-class",
})(get("#id"));
// <a id="id" class="a-class">Link</a>
```

<a name="module_cks"></a>

## cks ⇒ <code>Record.&lt;string, string&gt;</code>

Get the current document cookies in object form.

**Returns**: <code>Record.&lt;string, string&gt;</code> - The document cookies
object.

| Param | Type                | Description                                 |
| ----- | ------------------- | ------------------------------------------- |
| [C]   | <code>string</code> | Cookie string (default to document.cookie). |

**Example**

```typescript
cks(); // If document.cookie is "a=1; b=2", returns { a: 1, b: 2 }
cks(); // If document.cookie is empty, returns {}
```

<a name="module_cne"></a>

## cne ⇒ [<code>CurriedCNE</code>](#CurriedCNE)

Creates a new element.

| Param | Type                | Description  |
| ----- | ------------------- | ------------ |
| t     | <code>string</code> | Element tag. |

**Example**

```typescript
cne("div")(); // Returns <div></div>
cne("div")({
	width: "100",
	height: "100",
	style: {
		backgroundColor: "#000",
	},
}); // Returns <div width="100" height="100" style="background-color:#000"></div>
```

<a name="module_css"></a>

## css ⇒ [<code>CurriedCSS</code>](#CurriedCSS)

Set several styles of an element or a group of elements.

| Param | Type                             | Description                      |
| ----- | -------------------------------- | -------------------------------- |
| S     | <code>CSSStyleDeclaration</code> | List of styles in Object format. |

**Example**

```typescript
// <a id="id">Link</a>
css({
	fontWeight: 700,
})(get("#id"));
// <a id="id" style="font-weight:700">Link</a>
```

<a name="module_del"></a>

## del ⇒ <code>Array.&lt;HTMLElement&gt;</code>

Remove an element or a group of elements from the DOM.

**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - Array of DOM Elements
removed from DOM.

| Param | Type                                   | Description                               |
| ----- | -------------------------------------- | ----------------------------------------- |
| E     | <code>Array.&lt;HTMLElement&gt;</code> | Array of DOM Elements to remove from DOM. |

**Example**

```typescript
// <a id="id">Link</a>
del(get("#id")); // Element gets removed from the DOM and returned
```

<a name="module_dom"></a>

## dom ⇒ <code>Array.&lt;Document&gt;</code>

Parse string into DOM.

**Returns**: <code>Array.&lt;Document&gt;</code> - Parsed DOM.

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| s     | <code>string</code> | String to be parsed. |

**Example**

```typescript
dom("<a>Hello world</a>"); // Returns document object with that link on the body
```

<a name="module_get"></a>

## get ⇒ <code>Array.&lt;HTMLElement&gt;</code>

Alias for querySelectorAll in an array.

**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - Array of elements.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| q     | <code>string</code> | CSS Query.  |

**Example**

```typescript
// <a id="id">Link</a>
get("#id"); // Above element gets returned
```

<a name="module_mrx"></a>

## mrx ⇒ [<code>CurriedMRX</code>](#CurriedMRX)

Takes a string and an object and makes a regex map replace

| Param | Type                                       | Description                                         |
| ----- | ------------------------------------------ | --------------------------------------------------- |
| m     | <code>Record.&lt;string, string&gt;</code> | Map with format `{ "target": "replacing string" }`. |

**Example**

```typescript
mrx({ a: 1, b: 2, c: 3 })("abc"); // Returns "123"
```

<a name="module_obj"></a>

## obj ⇒ <code>ObjectType</code>

Creates a clean object.

**Returns**: <code>ObjectType</code> - New clean object.

| Param | Type                    | Description     |
| ----- | ----------------------- | --------------- |
| o     | <code>ObjectType</code> | Objects to use. |

**Example**

```typescript
obj({ a: 1, b: 2, c: 3 }).__proto__ === void 0; // true, because is a clean object
```

<a name="module_tsh"></a>

## tsh ⇒ <code>string</code>

Timestamp string hash generator (up to 8 characters).

**Returns**: <code>string</code> - A timestamp hash.

| Param | Type                | Default        | Description                          |
| ----- | ------------------- | -------------- | ------------------------------------ |
| [l]   | <code>number</code> | <code>8</code> | Length of the random string (8 max). |

**Example**

```typescript
tsh(); // Timestamp hash of 8 characters, like: "km5ztiej".
tsh(4); // Timestamp hash of 4 characters, like: "ytbz".
```

<a name="module_url"></a>

## url ⇒ <code>string</code>

Parse an object into a simple string in URL format for XHR.

**Returns**: <code>string</code> - URL formated string.

| Param | Type                    | Description                                   |
| ----- | ----------------------- | --------------------------------------------- |
| o     | <code>ObjectType</code> | List of input data for ajax in Object format. |

**Example**

```typescript
url({ a: 1, b: 2, c: 3 }); // Returns "a=1&b=2&c=3"
url({ a: [1, 2, 3], b: { c: 1, d: 2 } }); // Returns "a[0]=1&a[1]=2&a[2]=3&b[c]=1&b[d]=2"
```

<a name="module_xhr"></a>

## xhr ⇒ [<code>CurriedXHR</code>](#CurriedXHR)

Alias for new XMLHttpRequest, with GET method by default.

**Returns**: [<code>CurriedXHR</code>](#CurriedXHR) - Curried function that
returns the opened XML HTTP Request.

| Param | Type                | Description                         |
| ----- | ------------------- | ----------------------------------- |
| m     | <code>string</code> | Method (GET/PUT/POST/PATCH/DELETE). |

**Example**

```typescript
xhr("GET")("/api").send(); // Sends request to /api
```

<a name="CurriedAEL"></a>

## CurriedAEL ⇒ <code>Array.&lt;HTMLElement&gt;</code>

**Kind**: global typedef  
**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - Array of DOM Elements with
new attributes.

| Param | Type                                   | Description                       |
| ----- | -------------------------------------- | --------------------------------- |
| E     | <code>Array.&lt;HTMLElement&gt;</code> | Array of DOM Elements with event. |

<a name="CurriedATR"></a>

## CurriedATR ⇒ <code>Array.&lt;HTMLElement&gt;</code>

**Kind**: global typedef  
**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - Array of DOM Elements with
new attributes.

| Param | Type                                   | Description                       |
| ----- | -------------------------------------- | --------------------------------- |
| E     | <code>Array.&lt;HTMLElement&gt;</code> | Array of DOM Elements with event. |

<a name="CurriedCNE"></a>

## CurriedCNE ⇒ <code>Array.&lt;HTMLElement&gt;</code>

**Kind**: global typedef  
**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - New element with
properties set.

| Param | Type                     | Description         |
| ----- | ------------------------ | ------------------- |
| [P]   | <code>HTMLElement</code> | Element properties. |

<a name="CurriedCSS"></a>

## CurriedCSS ⇒ <code>Array.&lt;HTMLElement&gt;</code>

**Kind**: global typedef  
**Returns**: <code>Array.&lt;HTMLElement&gt;</code> - Array of DOM Elements with
new styles.

| Param | Type                                   | Description                          |
| ----- | -------------------------------------- | ------------------------------------ |
| E     | <code>Array.&lt;HTMLElement&gt;</code> | Array of DOM Elements to set styles. |

<a name="CurriedMRX"></a>

## CurriedMRX ⇒ <code>string</code>

**Kind**: global typedef  
**Returns**: <code>string</code> - String with replaced elements from map.

| Param | Type                | Description |
| ----- | ------------------- | ----------- |
| s     | <code>string</code> | String.     |

<a name="CurriedXHR"></a>

## CurriedXHR ⇒ <code>XMLHttpRequest</code>

**Kind**: global typedef  
**Returns**: <code>XMLHttpRequest</code> - DOM Element or Array of DOM Elements
with new attributes.

| Param | Type                | Description                 |
| ----- | ------------------- | --------------------------- |
| u     | <code>string</code> | URL to make the request to. |
