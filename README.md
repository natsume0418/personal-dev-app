# 🌱 Shima App - ローカル開発環境構築手順

Spring Boot + MySQL + Next.js によるフルスタックアプリケーションのローカル開発環境構築手順です。

---

## 📦 必要なインストール（初回のみ）

事前に、以下の2つをインストールしてください：

| ツール名 | 説明 | インストール先 |
|----------|------|----------------|
| [Git](https://git-scm.com/downloads) | ソースコード管理ツール | https://git-scm.com/downloads |
| [Docker Desktop](https://www.docker.com/products/docker-desktop) | コンテナ実行環境 | https://www.docker.com/products/docker-desktop |

⚠️ Java / Node.js / Maven は Docker コンテナ内で動くため **PCに直接インストールする必要はありません！**

---

## 🚀 環境構築・起動手順

```bash
# 1. リポジトリをクローン
git clone git@github.com:shima-private/training-PJ.git

# 2. ディレクトリへ移動
cd your-repo

# 3. Dockerでビルド＆起動（初回は --build 推奨）
docker-compose up --build
```

---

## 📁 ディレクトリ構成

/backend       Spring Boot バックエンド
/frontend      Next.js フロントエンド
/db            schema.sql, data.sql（初期DB構築スクリプト）
docker-compose.yml
README.md

---

## 🧪 初期データ

DBは初回起動時に、/db/schema.sql と /db/data.sql により自動初期化されます。
ユーザー一覧は /api/users にGETリクエストで取得できます。

---

## 🔗 各サービスへのアクセスURL

| サービス | URL |
|----------|------|
| Frontend | http://localhost:3000 |
| Backend API | http://localhost:8080/api/hello |
| MySQL DB | localhost:3306（DB: shima_db, ユーザー: appuser, パス: pass） |
