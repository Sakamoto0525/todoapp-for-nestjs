# ログ監視

## Document

https://github.com/DataDog/docker-dd-agent?tab=readme-ov-file

## datadog-agent install

https://docs.datadoghq.com/ja/agent/basic_agent_usage/windows/?tab=gui

## docker-compose.yamlの書き方

https://zenn.dev/youdofoo/articles/6ac48c3224d811

```yaml
  dd-agent:
    image: datadog/agent:latest
    ports:
      - 8126:8126
    environment:
      # 言わずもがなAPIキー
      DD_API_KEY: ${DD_API_KEY}
      #  DatadogのAPM配下にログが飛んでくるようになる
      DD_APM_ENABLED: "true"
      # DatadogのLogs配下にログが飛んでくるようになる
      DD_LOGS_ENABLED: "true"
      # すべてのコンテナログを取得するかどうか
      # 未設定だとサーバーのメトリクスのみが連携される
      DD_LOGS_CONFIG_CONTAINER_COLLECT_ALL: "true"
      # ログを収集しないコンテナを指定できる
      # 今回はdatadog-agenet自体のログを収集しないために指定する
      DD_AC_EXCLUDE: "name:datadog-agent"
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - /proc/:/host/proc/:ro
      - /sys/fs/cgroup/:/host/sys/fs/cgroup:ro
```

## 詰まったこと

1. datadog-agent install

  [こちら](https://docs.datadoghq.com/ja/agent/basic_agent_usage/windows/?tab=gui)からWindows用をインストールした

2. command install 確認

  datadog-agentをインストールしたので `datadog-agent version` と試しにやってみたらCommand: not found.になった

  どうやらWindowsにインストールされただけで、WSL側ではUbuntu用のdatadog-agentをCLIでインストールしなおすしかない？

  > ちなみに、Windowsではversionコマンドの確認はできた
  > 
  > 基本的に"%ProgramFiles%\Datadog\Datadog Agent\bin\agent" にインストールされているので、、そちらをもとにversionコマンドを実行した
  >
  > ```bash
  > "%ProgramFiles%\Datadog\Datadog Agent\bin\agent" version
  > ```
  > 
  > pathを通せば楽なんだろうけど、今回はUbuntu側に入れる必要があるのかな？と思ったので一旦保留
  > 参考：[Agent Command](https://docs.datadoghq.com/ja/agent/basic_agent_usage/windows/?tab=gui#agent-%E3%81%AE%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89)

3. API Key (docker-compose.ymlのDD_API_KEY)
 
  Datadog コンソールのどこからAPI Keyを取得するかわからなかったが、ログインした直後にdatadog-agent installを促す画面にAPI KEYがかかれている

  ちなみにdatadog-agent install時にAPI KEYが必要。




















































































