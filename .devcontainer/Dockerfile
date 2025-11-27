FROM node:23-slim

LABEL maintainer "h_matsushita <h_matsushita@zestpro.co.jp>"

# 必要最小限のパッケージのみインストール
RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

# ワークスペースディレクトリを作成＋nodeユーザーへ権限付与
WORKDIR /workspace
RUN mkdir -p /workspace && chown -R node:node /workspace

# タイムゾーンを設定
ENV TZ=Asia/Tokyo