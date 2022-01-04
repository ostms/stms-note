# pug まとめ

## インストール

```sh
npm i github:pugjs/pug-cli#master -D
```

<details><summary><a href="https://qiita.com/takeshisakuma/items/dbbb1c465099e6e4dd2e#112-pugファイルをhtmlファイルに変換する場合" target="_blank">PugファイルをHTMLファイルに変換する場合</a></summary>

このままではコンパイル時に、`_`（アンダースコア）がついたファイルもコンパイルされてしまうので、`pug-cli`を[GitHub](https://github.com/pugjs/pug-cli)からインストールし直す必要があります。 
🔗[テンプレート化したい場合に使う記述方法](https://ginneko-atelier.com/blogs/entry428/#テンプレート化したい場合に使う記述方法)
🔗[pug-cliで\_header.pugや\_include/*もコンパイルされてしまう問題を解決する](https://qiita.com/soarflat/items/48cec8fb19252a3fc4ad)


</details>


## pug npm-script

```json
"scripts": {
 	"pug": "pug ./src --hierarchy -o ./dist -P -w"
 }
```

- [npm よく使うコマンドまとめ](../npm%20よく使うコマンドまとめ.md)

### npmオプション

| **`-h`** `--help`            | ヘルプを出力する|
| :--------------------------- | :---------------------------------------------------- |
| **`-V`** `--version`         | バージョン番号を出力する|
| **`-o`** `--out <path>`      | 出力先のディレクトリを指定|
| **`-O`** `--obj <str\|path>` | JSON/JavaScriptオプションオブジェクト、またはファイル|
| **`-p`** `--path <path>`     | インクルードの解決に使用されるファイル名|
| **`-P`** `--pretty`          | 整形されたHTMLをコンパイルする|
| **`-b`** `--basedir`         | 絶対的なインクルードを解決するためにルートディレクトリとして使用されるパス|
| **`-c`** `--client`          | クライアント側のruntime.jsコンパイル関数。|
| **`-n`** `--name <str>`      | コンパイルされたテンプレートの名前 (`--client`が必要)|
| **`-D`** `--no-debug`        | デバッグせずにコンパイルする（小さな関数）|
| **`-w`** `--watch`           | ファイルの変更を監視し、自動的に再レンダリングします|
| **`-E`** `--extension <ext>` | 出力ファイル拡張子を指定します|
| **`-s`** `--silent`          | ログを出力しない|
| `--name-after-file`          | ファイルパスの最後のセクションにちなんで、テンプレートに名前を付ける<br>(`--client`が必要、` --name`で上書きされます)|
| `--doctype <str>`            | コマンドラインでdoctypeを指定する<br>(テンプレートで指定されていない場合に有効)|
| `--hierarchy`                | 階層構造を保つ|


<details><summary>English</summary>

| **`-h`** `--help`            | output usage information                                                                                     |
| :--------------------------- | :----------------------------------------------------------------------------------------------------------- |
| **`-V`** `--version`         | output the version number                                                                                    |
| **`-O`** `--obj <str\|path>` | JSON/JavaScript options object or file                                                                       |
| **`-o`** `--out <dir>`       | output the rendered HTML or compiled JavaScript to `<dir>`|
| **`-p`** `--path <path>`     | filename used to resolve includes                                                                            |
| **`-b`** `--basedir`         | path used as root directory to resolve absolute includes                                                     |
| **`-P`** `--pretty`          | compile pretty HTML output                                                                                   |
| **`-c`** `--client`          | compile function for client-side runtime.js                                                                  |
| **`-n`** `--name <str>`      | the name of the compiled template (requires `--client`)                                                      |
| **`-D`** `--no-debug`        | compile without debugging (smaller functions)                                                                |
| **`-w`** `--watch`           | watch files for changes and automatically re-render                                                          |
| **`-E`** `--extension <ext>` | specify the output file extension                                                                            |
| **`-s`** `--silent`          | do not output logs                                                                                           |
| `--name-after-file`          | name the template after the last section of the file path<br>(requires `--client` and overriden by `--name`) |
| `--doctype <str>`            | specify the doctype on the command line<br>(useful if it is not specified by the template)                   |

</details>

### --help
```bash
使い方: index [options] [dir|file ...]
```
```bash
	# `templates` ディレクトリにあるすべてのファイルをレンダリングする:
	$ pug templates

	# {foo,bar}.htmlを作成する:
	$ pug {foo,bar}.pug

	# 標準の入力・出力ストリームで `pug`を使用する
	$ pug < my.pug > my.html
	$ echo 'h1 Pug!' | pug

	# foo`と`bar`ディレクトリにあるすべてのファイルを`/tmp`にレンダリング:
	$ pug foo bar --out /tmp

	# 文字列でオプションを指定する:
	$ pug -O '{"doctype": "html"}' foo.pug
	# または、JSONの代わりにJavaScriptを使用する
	$ pug -O "{doctype: 'html'}" foo.pug

	# ファイルを通してオプションを指定する:
	$ echo "exports.doctype = 'html';" > options.js
	$ pug -O options.js foo.pug
	# または、JSONも動作します:
	$ echo '{"doctype": "html"}' > options.json
	$ pug -O options.json foo.pug
```