# ① Node.js の公式イメージをベースにする
FROM node:18

# ② 作業ディレクトリを作成（コンテナの中で使う場所）
WORKDIR /app

# ③ 依存関係ファイルだけ先にコピー（キャッシュが効くように）
COPY package*.json ./

# ④ npm install 実行（依存パッケージのインストール）
RUN npm install

# ⑤ ソースコードをすべてコピー
COPY . .

# ⑥ Next.jsの開発サーバーを起動
EXPOSE 3000
CMD ["npm", "run", "dev"]
