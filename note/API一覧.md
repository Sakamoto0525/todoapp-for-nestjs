# API一覧

GET    /tasks
GET    /tasks/:id
POST   /tasks
PUT    /tasks/:id
DELETE /tasks

task.controller.ts
task.service.ts
task.module.ts // いらない

app.module.tsに書く必要がある



## 理想形

- src
    - main.ts
    - module
        - app.module.ts // board.module.tsをimportしてる
        - domain // エンドポイントに関連するもの
            - board
                - board.controller.ts
                - board.service.ts
                - board.module.ts // controller,serviceをimportしてる
            - task
                - task.controller.ts
                - task.service.ts
                - task.module.ts
        // 内部処理とか外部APIをたたくとか？
        // それぞれ下記はmodule.tsを持っていて、最終的にはapp.module.tsにimportされる
        - email
        - healthcheck
        - debug
        - storage // s3へのAPIをたたく処理
            - storage.module.ts
            - storage.service.ts
    // 必要になったら作成
    - command // batch
    - config // envの取得
    - entity // model
        - board.ts // DBに関連しない静的処理をする
