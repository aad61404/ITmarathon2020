使用Redux 前 除了知道為何你要使用它
能帶來什麼好處外，再來就是要確定你使用的react版本是哪一版本的

最明顯的差異就是在有沒有使用Hook
像我最近碰到的專案就是沒有使用Hook，在準備要開發時候才發現繞了一些彎路

也是因為我的React 技術還沒到很熟的地步 目前最新是 React Redux 7.2需要React 16.8.3或更高版本，可以用hook
我使用的是7.0 ，支援 React 16.4 以上

文章也有分 redux , react-redux
是不同的喔 !
如同我們上次提到

Redux是JavaScript狀態容器 可以讓你構建一致化的應用，運行於不同的環境（客戶端、服務器、原生應用）

你在vanilla 可以用，vue、react、angular 也可以用
Redux 介紹三個最主要的元素

這張圖的步驟非常完整
![Gif](https://i.imgur.com/QWSeI69.gif)


在網頁上View操作送出事件，經過Action 釐清事件到 Reducer 處理完回傳一個新的State到網頁(View)上

Action
描述 事件發生的情況

Reducer 
根據接收Action 描述的情況對資料做處理，回傳一新的個處理資料

store
儲存資料的地方，統一state


為什麼我們需要Redux呢?
沒有Redux 我們的資料流向會變成什麼樣子 ? 這張圖可以有很好的解釋
![IMG](https://i.imgur.com/2vbnyiv.png)
....待補

