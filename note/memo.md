## memo

- PUT /tasks
  - laneIDの移動だけできる, 作成時に同じboardIDかの判断処理を要れる
- タグを追加
- ユーザー追加
- 認証追加

# prisma db push が 生成するはずの node_modules/.prisma/client に生成しない問題

対応

prisma db pushの出力先をdefaultのnode_modules/.prisma/clientから、
./prisma/clientに変える

あとはtfconfig.tsにpathsを追加して、

```json
    "paths": {
      "@prismaClient": ["./prisma/client/index"], // 追記
    },
```

import @prisma/client部分を import @prismaClientにすれば終わり

> ちなみにjestのmoduleNamemapperに追加しないと、テスト実行時に@prismaclinetがnot foundとなる

```
 "jest": {
    ...
    "moduleNameMapper": {
      "^@prismaClient$": "/app/prisma/client/index" // 追記
    }
  }
```
