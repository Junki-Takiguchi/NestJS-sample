## 1. clone後のリモートリポジトリ変更
```bash
git remote set-url origin <remote repository url>
```

## ex1. （Windowsの場合）Make for Windowsのインストール
https://zenn.dev/genki86web/articles/6e61c167fbe926　<br>
システム環境変数のPathに `インストール先/bin` を登録する

## 2. Makeコマンドを使ったコンテナの起動
```bash
make build #docker compose build
make up #docker compose up -d
make down #docker compose down --rmi local -v
make access #docker compose exec app /bin/bash
```

## 3. npmパッケージのインストール
```bash
npm install
```

### 4. prismaのインストール
```bash
npm i prisma
```

### 5. nest.jsを含むパッケージの更新チェックおよび更新
npm-check-updatesのインストール
```bash
npm install -g npm-check-updates
```

更新
```bash
ncu -u
```

再度npm installを実行
```bash
npm install
```

ex2. package.jsonのパッケージを更新する場合：
1. `package.json`の`dependencies`を削除し初期化
```json
{
  "name": "learn-typescript",
  "version": "1.0.0",
  "scripts": {
    "prettier": "npx prettier --write src",
    "eslint": "npx eslint src --fix",
    "ts-node": "npx ts-node"
  }
}
```

2. `make access`でコンテナに接続し、Dockerfile内に記載されてる各パッケージをインストールしなおす
```bash
# 例）
npm install typescript \
    @types/node \
    ts-node
```

3. 全てのパッケージをインストール後、`package.json`を再度確認し、`dependencies`のスコープ内に各パッケージが更新されてることを確認する
```json
{
  "name": "learn-typescript",
  "version": "1.0.0",
  "dependencies": {
    "@types/node": "^18.13.0",
    "@typescript-eslint/eslint-plugin": "^5.51.0",
    "@typescript-eslint/parser": "^5.51.0",
    "eslint": "^8.33.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-config-airbnb-typescript": "^17.0.0",
    "eslint-plugin-import": "^2.27.5",
    "prettier": "^2.8.4",
    "ts-node": "^10.9.1",
    "typescript": "^4.9.5"
  },
  "scripts": {
    "prettier": "npx prettier --write src",
    "eslint": "npx eslint src --fix",
    "ts-node": "npx ts-node"
  }
}
```


## 新規でプロジェクトを作る場合：
### 4. 新規プロジェクトの作成
```bash
$ nest new <project-name>
```

### 各種ファイルを作ったプロジェクト内のディレクトリに移す
eslintrc.js
.gitignore
.prettierrc
docker-compose.yml
Dockerfile
makefile
README.md
tsconfig.build.json
tsconfig.json


### 5. 新規コントローラーの作成
```bash
$ nest new <controller-name>
```

### package.json / scripts
```bash
npm run prettier #npx prettier --write src
npm run eslint #npx eslint src --fix
npm run ts-node src/something.ts #npx ts-node src/something.ts
```



