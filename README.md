# search-book-app
おすすめの小説を教えてくれるアプリケーション  
楽天booksAPIを使用

## Requirement

- next.js: 13.0.3
- typescript: 4.8.4
- mantine: 5.7.2
- tabler/icons: 1.111.0

## Installation

- 下記サイトからRakuten Developersに登録、APIキーを発行する  
  https://webservice.rakuten.co.jp/  
  ご利用ガイド：https://webservice.rakuten.co.jp/guide
- env.local.ファイルを作成、楽天APIキーを記載
  ```bash
  NEXT_PUBLIC_APPLICATION_ID=ここに楽天APIキーを記載
  ```

- 下記コマンドを実行
  ```bash
  cd search-book
  npm install
  npx next dev
  ```
