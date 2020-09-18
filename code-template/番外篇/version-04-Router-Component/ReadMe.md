# version-04-Router-Component

跟 version-03-Router-dom
差別在於 新增一個 NavigationMenu.js
將 跳轉頁面模組化

並新增 About , Home function Compoents

Navigation.js 將跳轉頁面 傳入 子組件
````
...
<NavigationMenu
    closeMenu={() => setShowMenu(false)}
/>
              
````

NavigationMenu.js
props 接收來自 父組件的值

```
<li>
    <Link
    to="/about"
    className="text-blue-500 py-3 border-t border-b block"
    // onClick={() => setShowMenu(false)}
    onClick={props.closeMenu}
    >
    About
    </Link>
</li>
```
