### Read about "NavLink vs Link"

NavLink adds 'active' class to the current 'a' tag navigated, while Link doesn't. That can help you to use different style with css.

#### Notice: activeClassName is an attribute for NavLink which can be used to change 'active' into any class you want, 'selected', 'navigated' or anything.

<pre>
<code>
  &lt;NavLink to="/" activeClassName="selected"&gt;Home&lt;/NavLink&gt;
</code>
</pre>

> In React Router v6, activeClassName has been removed and you should use the function className to apply classnames to either active or inactive NavLink components.
