### In components/item.js , Don't forget the key which is something not going to be repeated, id for example.
<pre>
<code>
&lt;p key={item.num}&gt;Student number {item.num} is called {item.name} with {item.age} years old.&lt;/p&gt;
</code>
</pre>
forgetting it will give an error...
