FROM node:23-slim

LABEL maintainer "h_matsushita <h_matsushita@zestpro.co.jp>"

# 必要最小限のパッケージのみインストール
RUN apt-get update && apt-get install -y \
    git \
    tzdata \
    && rm -rf /var/lib/apt/lists/*

# タイムゾーンを設定
ENV TZ=Asia/Tokyo

# pnpm を有効化（corepack 推奨）
RUN corepack enable && corepack prepare pnpm@latest --activate

# ワークスペースディレクトリを作成＋nodeユーザーへ権限付与
WORKDIR /workspace
RUN mkdir -p /workspace && chown -R node:node /workspace

# デフォルトユーザーを node に変更
USER node