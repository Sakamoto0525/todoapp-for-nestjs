```bash
  -h, --help                        ヘルプを表示                         [ブール値]
      --version                     バージョン番号を表示                 [ブール値]
      --all                         `onlyChanged` の逆。`onlyChanged` がデフォルトで設定されている場合、`--all` を使用してJestを実行すると、変更されたファイルに関連するテストのみを実行するのではなく、すべてのテストを実行します。               [ブール値]
      --automock                    デフォルトですべてのファイルを自動モックします。       [ブール値]
  -b, --bail                        `n` 個の失敗したテスト後にテストスイートを直ちに終了します。 [ブール値]
      --cache                       変換キャッシュを使用するかどうかを指定します。キャッシュを無効にするには `--no-cache` を使用します。               [ブール値]
      --cacheDirectory              Jestがキャッシュされた依存情報を保存するディレクトリ。    [文字列]
      --changedFilesWithAncestor    現在の変更と直前のコミットで行われた変更に関連するテストを実行します。`--onlyChanged` と同様の動作をします。  [ブール値]
      --changedSince                指定したブランチ以降の変更に関連するテストを実行します。現在のブランチが指定したブランチから分岐している場合、ローカルで行われた変更のみがテストされます。`--onlyChanged` と同様の動作をします。     [文字列]
      --ci                          Jestを連続統合（CI）モードで実行するかどうか。ほとんどの一般的なCI環境ではデフォルトで有効になっています。スナップショットが明示的に要求されない限り、スナップショットの書き込みを防ぎます。   [ブール値]
      --clearCache                  設定されたJestキャッシュディレクトリをクリアしてから終了します。デフォルトのディレクトリは、jest --showConfig を呼び出すことで見つけることができます。          [ブール値]
      --clearMocks                  各テストの前にモック呼び出し、インスタンス、コンテキスト、結果を自動的にクリアします。各テストの前に jest.clearAllMocks() を呼び出すのと同等です。    [ブール値]
      --collectCoverage             カバレッジ情報を収集して出力することを示します。         [ブール値]
      --collectCoverageFrom         カバレッジ情報を収集するファイルのグロブパターン（<rootDir>に対して相対的）を指定します。     [文字列]
      --color                       テスト結果の出力にカラーハイライトを強制的に適用します（stdoutがTTYでない場合でも）。カラーを使用しない場合は false に設定します。        [ブール値]
      --colors                      `--color` のエイリアス。                   [ブール値]
  -c, --config                      テストを検出して実行する方法を指定するJest構成ファイルへのパス。構成で rootDir が設定されていない場合、構成ファイルを含むディレクトリがプロジェクトの rootDir と見なされます。これは JSON エンコードされた値でもあり、Jestが構成として使用します。     [文字列]
      --coverage                    テストカバレッジ情報を収集してレポートに表示することを示します。      [ブール値]
      --coverageDirectory           Jestがカバレッジファイルを出力するディレクトリ。            [文字列]
      --coveragePathIgnorePatterns  テストを実行する前に全ファイルパスに対してマッチさせる正規表現パターンの配列。ファイルパスがパターンと一致する場合、カバレッジ情報はスキップされます。     [配列]
      --coverageProvider            カバレッジを収集するために使用するプロバイダを選択します。      [選択肢: "babel", "v8"]
      --coverageReporters           カバレッジレポートを書き込む際にJestが使用するレポーターのリスト。istanbulのレポーターを使用できます。       [配列]
      --coverageThreshold           カバレッジ結果の最小閾値を設定するために使用されるJSON文字列。       [文字列]
      --debug                       Jest構成に関するデバッグ情報を出力します。            [ブール値]
      --detectLeaks                 **実験的**：テストでメモリリークを検出します。テストを実行した後、使用されたグローバルオブジェクトをガベージコレクションし、リークが発生した場合は失敗します。    [ブール値]
      --detectOpenHandles           テスト実行の最後にJestが終了しない残存のオープンハンドルを出力します。`runInBand` を暗示します。      [ブール値]
      --env                         すべてのテストで使用されるテスト環境。これはファイルまたはノードモジュールを指すことができます。例：`jsdom`、`node`、または `path/to/my-environment.js`。   [文字列]
      --errorOnDeprecated           廃止されたAPIの呼び出しで有用なエラーメッセージをスローします。     [ブール値]
  -e, --expand                      パッチの代わりに完全な差分を表示するためにこのフラグを使用します。   [ブール値]
      --filter                      フィルタリング関数をエクスポートするモジュールへのパス。このメソッドは実行されるテストリストを受け取り、実行から除外するために操作できます。テストが壊れていることがわかっているテストをフィルタリングインフラストラクチャと組み合わせて使用すると特に便利です。      [文字列]
      --findRelatedTests            渡されたソースファイルのリストに関連するテストを見つけます。コミットフック統合のために便利で、特定のファイルに基づいてJestが実行するテストの最小限の量を決定するのに使用されます。     [ブール値]
      --forceExit                   すべてのテストが実行された後にJestを強制的に終了します。テストコードで設定されたリソースが適切にクリーンアップできない場合に便利です。   [ブール値]
      --globalSetup                 すべてのテストの前に実行されるモジュールへのパス。    [文字列]
      --globalTeardown              すべてのテストの後に実行されるモジュールへのパス。    [文字列]
      --globals                     すべてのテスト環境で利用可能である必要があるグローバル変数のマップを含むJSON文字列。  [文字列]
      --haste                       hasteモジュールシステム用の変数のマップを含むJSON文字列   [文字列]
      --ignoreProjects              指定したプロジェクトのテストを無視します。Jestは構成内の `displayName` 属性を使用して各プロジェクトを識別します。     [配列]
      --init                        基本的な構成ファイルを生成します           [ブール値]
      --injectGlobals               Jestがグローバル変数を注入するかどうか   [ブール値]
      --json                        テスト結果をJSON形式で出力します。このモードでは他のすべてのテスト出力とユーザーメッセージがstderrに送信されます。     [ブール値]
      --lastCommit                  最後のコミットで行われたファイル変更に影響を受けるすべてのテストを実行します。`--onlyChanged` と同様の動作をします。       [ブール値]
      --listTests                   指定された引数に基づいてJestが実行するすべてのテストをリストし、終了します。特にCIシステムと一緒に `--findRelatedTests` を使用して特定のファイルに基づいてJestが実行するテストを決定するのに役立ちます。 [ブール値]
      --logHeapUsage                各テストの後にヒープ使用量をログに出力します。メモリリークをデバッグするために有用です。ノードで `--runInBand` と `--expose-gc` と一緒に使用します。   [ブール値]
      --maxConcurrency              並行実行される許容される最大テスト数を指定します。これは `test.concurrent` を使用するテストにのみ影響します。       [数値]
  -w, --maxWorkers                  テストを実行するためのワーカープールがスポーンする最大数を指定します。これは通常、マシン上で利用可能なコア数にデフォルトで設定されています。（通常はこのデフォルトを上書きしない方が良いです）  [文字列]
      --moduleDirectories           リクエリングモジュールの場所から再帰的に検索されるディレクトリ名の配列。  [配列]
      --moduleFileExtensions        モジュールが使用するファイル拡張子の配列。ファイル拡張子を指定せずにモジュールを要求する場合、Jestはこれらの拡張子を探します。  [配列]
      --moduleNameMapper            正規表現からモジュール名またはモジュール名の配列へのマップを含むJSON文字列。これにより、1つのモジュールでリソース（画像やスタイルなど）をスタブ化できます。   [文字列]
      --modulePathIgnorePatterns    モジュールパスを考慮する前に一致させる正規表現パターンの配列。  [配列]
      --modulePaths                 NODE_PATH 環境変数を設定する代わりに使用するAPI。modulePathsは、モジュールを解決する際に追加の場所を検索するための絶対パスの配列です。     [配列]
      --noStackTrace                テスト結果の出力にスタックトレースを無効にします   [ブール値]
      --notify                      テスト結果の通知を有効にします         [ブール値]
      --notifyMode                  テスト結果の通知が表示されるタイミングを指定します。      [文字列]
  -o, --onlyChanged                 現在のリポジトリで変更されたファイルに基づいて実行するべきテストを特定しようとします。ただし、現在のリポジトリでgitまたはhgリポジトリでテストを実行している場合にのみ機能します。   [ブール値]
  -f, --onlyFailures                前回の実行で失敗したテストを実行します         [ブール値]
      --openHandlesTimeout          Jestがきれいに終了しない場合、このミリ秒数後にオープンハンドルが残っている可能性について警告を表示します。`0` で無効になります。      [数値]
      --outputFile                  `--json` オプションも指定されている場合、テスト結果をファイルに書き込みます。   [文字列]
      --passWithNoTests             テストが見つからない場合に失敗しないようにします（たとえば `--testPathPattern` を使用している場合）。   [ブール値]
      --preset                      Jest構成のベースとして使用されるプリセット。  [文字列]
      --prettierPath                インラインスナップショットに使用される "prettier" モジュールへのパス。  [文字列]
      --projects                    Jestを使用してすべてのプロジェクトのすべてのテストを実行するプロジェクトのリスト。Jestは構成内の `displayName` 属性を使用して各プロジェクトを識別します。  [配列]
      --randomize                   ファイル内のテストの順序をシャッフルします。シードを選択するには `--seed` CLIオプションを参照してください。  [ブール値]
      --reporters                   テストスイートのカスタムレポーターのリスト。   [配列]
      --resetMocks                  各テストの前にモック状態を自動的にリセットします。各テストの前に jest.resetAllMocks() を呼び出すのと同等です。  [ブール値]
      --resetModules                有効にすると、個々のテストを実行する前にすべてのテストファイルのモジュールレジストリがリセットされます。  [ブール値]
      --resolver                    カスタムリゾルバーを使用するためのJSON文字列  [文字列]
      --restoreMocks                各テストの前にモック状態と実装を自動的にリストアします。各テストの前に jest.restoreAllMocks() を呼び出すのと同等です。  [ブール値]
      --rootDir                     Jestがテストとモジュールをスキャンするルートディレクトリ。  [文字列]
      --roots                       Jestがファイルを検索するディレクトリへのパスのリスト。   [配列]
  -i, --runInBand                   テストを現在のプロセスで直列に実行します（テストを実行する子プロセスのワーカープールを作成するのではなく）。デバッグ用にはこれが時々便利ですが、そのようなユースケースは非常にまれです。   [ブール値]
      --runTestsByPath              提供されたパターンが正確なファイルパスの場合に使用します。これにより、通常の表現に変換してすべての単一ファイルに一致するテストを実行することを避けます。  [ブール値]
      --runner                      Jestのデフォルトのテストランナーの代わりにカスタムランナーを使用できます。   [文字列]
      --seed                        テストファイル内で `jest.getSeed()` を介して取得できるシード値を設定します。このオプションが指定されていない場合、Jestは値をランダムに生成します。シード値は `-0x80000000` から `0x7fffffff` の間でなければなりません。  [数値]
      --selectProjects              指定したプロジェクトのテストを実行します。Jestは構成内の `displayName` 属性を使用して各プロジェクトを識別します。   [配列]
      --setupFiles                  各テストの前にテスト環境を構成またはセットアップするためのコードを実行するモジュールへのパ

```