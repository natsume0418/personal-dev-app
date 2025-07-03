# Shima System

## 💻 必要なもの

- Docker Desktop（[公式ダウンロード](https://www.docker.com/products/docker-desktop)）
- Git（[公式ダウンロード](https://git-scm.com/)）

## 🚀 セットアップ手順

```bash
git clone https://github.com/yourname/shima-system.git
cd shima-system
cp frontend/.env.local.sample frontend/.env.local
docker-compose up --build
```

- アクセスURL
  - フロントエンド： http://localhost:3000
  - バックエンドAPI： http://localhost:8080/api/hoge
    - 例）~/api/hello、~/api/users