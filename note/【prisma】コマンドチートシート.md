# Prisma

## 概要

```
◭  Prismaは、データベースのクエリ、マイグレーション、モデリングを行うためのモダンなDBツールキットです（https://prisma.io）。

使用法

  $ prisma [コマンド]

コマンド

            init   アプリケーションのためにPrismaをセットアップします
        generate   アーティファクトを生成します（例：Prismaクライアント）
              db   データベースのスキーマとライフサイクルを管理します
         migrate   データベースをマイグレーションします
          studio   Prisma Studioを使用してデータを閲覧します
        validate   Prismaスキーマを検証します
          format   Prismaスキーマをフォーマットします
         version   Prismaのバージョン情報を表示します
           debug   Prismaのデバッグ情報を表示します

フラグ

     --preview-feature   プレビューPrismaコマンドを実行します
     --help, -h          コマンドに関する追加情報を表示します
```


## チートシート

```
  新しいPrismaプロジェクトをセットアップする
  $ prisma init

  アーティファクトを生成する（例：Prismaクライアント）
  $ prisma generate

  データを閲覧する
  $ prisma studio

  Prismaスキーマからマイグレーションを作成し、データベースに適用し、アーティファクトを生成する（例：Prismaクライアント）
  $ prisma migrate dev

  既存のデータベースからスキーマを取得し、Prismaスキーマを更新する
  $ prisma db pull

  Prismaスキーマの状態をデータベースにプッシュする
  $ prisma db push

  Prismaスキーマを検証する
  $ prisma validate

  Prismaスキーマをフォーマットする
  $ prisma format

  Prismaのバージョン情報を表示する
  $ prisma version

  Prismaのデバッグ情報を表示する
  $ prisma debug

```