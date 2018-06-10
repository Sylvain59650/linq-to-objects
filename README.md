 <div class="Note" style="color:orange;font-style:italic">
 
The lastest version of this document is available on [Github > linq-to-objects](https://sylvain59650.github.io/linq-to-objects/)
</div>

# linq-to-objects

Implements [linq](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/) for javascript


<div style="display:inline">
    <a target="_blank" title="build" href="https://travis-ci.org/Sylvain59650/linq-to-objects"><img src="https://travis-ci.org/Sylvain59650/linq-to-objects.png?branch=master" /></a>
    <a target="_blank" title="version" href="https://www.npmjs.com/package/linq-to-objects"><img src="https://img.shields.io/npm/v/linq-to-objects.svg" /></a>
    <a target="_blank" title="package" href="https://github.com/Sylvain59650/linq-to-objects"><img src="https://img.shields.io/github/package-json/v/Sylvain59650/linq-to-objects.svg" /></a>
    <a target="_blank" title="dependencies" href="https://david-dm.org/Sylvain59650/linq-to-objects"><img src="https://img.shields.io/david/Sylvain59650/linq-to-objects.svg" /></a>
    <a target="_blank" title="dependencies graph" href="http://npm.anvaka.com/#/view/2d/linq-to-objects"><img src="https://img.shields.io/badge/dependencies-graph-blue.svg" /></a>
    <img src="https://img.shields.io/bundlephobia/min/linq-to-objects.svg" />
    <img src="https://img.shields.io/badge/eslint-ok-blue.svg" />
    <a target="_blank" title="tests" href="https://sylvain59650.github.io/linq-to-objects/"><img src="https://img.shields.io/badge/tests-passing-brightgreen.svg" /></a>

 <a target="_blank" title="stats" href="https://www.jsdelivr.com/package/npm/linq-to-objects"><img src="https://data.jsdelivr.com/v1/package/npm/linq-to-objects/badge" /></a>
      <a target="_blank" title="script online" href="https://cdn.jsdelivr.net/npm/linq-to-objects/distrib/linq-to-objects.min.js"><img src="https://img.shields.io/badge/cdn-jsdeliv-black.svg" /></a>
<img src="https://img.shields.io/npm/l/linq-to-objects.svg" />
<img src="https://hits.dwyl.com/Sylvain59650/linq-to-objects.svg" />
</div>

# Installation

    npm install linq-to-objects --save

OR

    yarn add linq-to-objects --save

# References in NodeJs

    require("linq-to-objects");

# References in browser after install
<code>

  &lt;script src="./node_modules/linq-to-objects/distrib/linq-to-objects.min.js"&gt;&lt;/script&gt;
</code>

For IE only (>=10), you need to add this polyfill script

<code>
  &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js"&gt;&lt;/script&gt;
</code>

# References in browser without install
<code>
  &lt;script src="https://cdn.jsdelivr.net/npm/linq-to-objects/distrib/linq-to-objects.min.js"&gt;&lt;/script&gt;
</code>

# Table Of Contents

**Note** See the complete documentation on [Github > linq-to-objects](https://sylvain59650.github.io/linq-to-objects/)

# Array Extension
 - add
 - addRange
 - aggregate
 - all
 - any
 - average
 - clear
 - concat
 - count
 - distinct
 - equals
 - first
 - firstOrDefault
 - insertAt
 - insertRangeAt
 - getRange
 - groupBy
 - innerJoin
 - intersect
 - last
 - lastOrDefault
 - min
 - max
 - orderBy
 - orderByDescending
 - removeAll
 - removeAt
 - removeRange
 - reverse
 - selectNew
 - skip
 - skipWhile
 - sum
 - takeWhile
 - union
 - whileIndex
 - where