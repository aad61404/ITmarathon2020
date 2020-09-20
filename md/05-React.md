
前面的五天我們都是在前端React 上面做練習
接下來的五天

我們會為了跟後端溝通做一些準備並帶來更多前端練習
如同我們之前提到的  (與資料庫交互傳輸) =>後端 => API => 前端(瀏覽器呈現)

API 是什麼呢 ?
```
搜尋一下MDN  (網頁前端開發上的百科全書)關於 API定義
在網頁開發，一個 API 通常指的是一系列的代碼功能(如： methods, properties, events, and URLs)爲了方便程式開發者使用他們的 apps 通過用戶的網頁瀏覽器組件，或與用戶電腦上的其他軟體或硬件， 或與第三方網站和服務實現互動。
```

我們要實現與後端溝通就必須透過API，那麼如果我們一時沒有資料庫和環境要怎麼測試呢?

其中一個答案是 前端(套件)工具 JSON Server  

我們將了解從後端接取數據 可以幫我們建立一個 API server，並能用 RESTful 的方式取資料，只需要準備一個放假資料的 json 檔（或 export json 格式的 js 檔）即可。

## 首先

該套件需要準備一個 JSON

JSON 檔 : JavaScript Object Notation (JSON) 為將結構化資料 (structured data) 呈現為 JavaScript 物件的標準格式，常用於網站上的資料呈現、傳輸 (例如將資料從伺服器送至用戶端，以利顯示網頁)。

請準備一個名為 db.json　的檔案 (該檔案我放在跟package.json) 同一層檔案
內容如下
```
{
    "notes": [{
            "id": 1,
            "content": "與後端溝通",
            "date": "2020-09-20T20:30:31.098Z",
            "important": true
        },
        {
            "id": 2,
            "content": "需要API",
            "date": "2020-09-20T20:39:34.091Z",
            "important": false
        },
        {
            "id": 3,
            "content": "串接練習",
            "date": "2019-09-20T21:20:14.298Z",
            "important": true
        }
    ]
}
```


## 安裝

安裝 json-server 指令
```
npm install json-server --save-dev
```


在package.json文件的腳本部分添加一個小的修改：

```
{
  // ... 
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "server": "json-server -p3001 --watch db.json"
  },
}
```
現在，我們可以在沒有參數定義的情況下方便地使用如下命令從項目根目錄啟動json-server：

```
npm run server
```
當我啟動後　需要開啟瀏覽器到　http://localhost:3001/notes
正常顯示如下

[Imgur](https://i.imgur.com/brtoQhe.jpg)


## axios
Axios 是一個基於 promise 的 HTTP 庫，可以發送get、post請求。
為了要串接在您的本機React，還需要axios 工具

然後在你的編輯器上　(vscode , sublime 等等...)
終端機terminal 開第二個視窗執行　npm start

也就是說　同時間　你在運行的程式中　
會有兩個分別是　
```
// json-server
npm run server
// 開另一個終端機視窗
// react 啟用
npm start

```

你可以將它想像為　你運行了server(伺服器) => 後端 (開了一個API) => 前端(接收資料並渲染) 

在react 上使用　axios　方法為

```

import axios from 'axios'

// 在宣告組件內使用，例如
  axios.get('http://localhost:3001/notes').then(response => {
    const notes = response.data
    console.log(notes)
  })
```

到範例上看看
```
import React , {useState} from 'react';
import axios from 'axios'

const App = (props) => {
  const [value, setValue] = useState(10)


  axios.get('http://localhost:3001/notes').then(response => {
    const notes = response.data
    console.log(notes)
  })

  return (
    <div>
      {value}
    </div>
  )
}
export default App;

```

成果預覽
[Imgur](https://i.imgur.com/TkVbaBu.jpg)