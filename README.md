NgHotkey
========

Provide hotkey functionality in AngularJS using [Mousetrap](https://github.com/ccampbell/mousetrap)

## Getting Started
1. Include nghotkey on your page

  ```html
  <script src="/path/to/mousetrap.min.js"></script>
  <script src="/path/to/nghotkey.js"></script>
  ```
  
2. Put nghotkey to your module dependencies

  ```javascript
  var app = angular.module('app', ['nghotkey']);
  ```
  
3. Set hotkey for elements or directives using hotkey directive as an attribute

  ```html
    <input type="text" hotkey="h ?" hotkey-action="keyup" />
    <input type="button" hotkey="ctrl+;"/>
  ```
