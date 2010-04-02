<?php

class OmegaTrick_compressionJs extends xFrameworkPX_Model
{

	public $usetable = false;

    // 対象ディレクトリ配列
    private $_targetDirs = array(
        'app',
        'core',
        'draw',
        'locale',
        'plugins',
        'util',
        'widgets',
    );

    // ベース作業ディレクトリ
    private $_baseDir = '../public_html/OmegaTrick/src/';

    // 出力先ディレクトリ
    private $_outDir = '../public_html/OmegaTrick/pkgs/';

    // {{{ compress

    /**
     * jsファイル圧縮メソッド
     *
     * @param $target 対象ディレクトリ名（$_targetDirsのいずれか）
     * @param $compress true: 圧縮 false:非圧縮
     * @param $baseDir ベース作業ディレクトリ
     * @param $outDir 出力先ディレクトリ
     * @return void
     */
    public function compress($target, $compress = true, $baseDir = '', $outDir = '')
    {

        // 作業ディレクトリ設定
        if (empty($baseDir)) {
            $baseDir = $this->_baseDir . $target;
        }

        // 出力先ディレクトリ
        if (empty($outDir)) {
            $outDir = $this->_outDir;
        }

        // 圧縮コマンドベース設定
        $baseCmd = 'java -jar compiler.jar --compilation_level WHITESPACE_ONLY ';

        // ファイル一覧取得
        $ret = get_filelist($baseDir);
        // JavaScriptファイル一覧作成
        $jslist = array();
        foreach ($ret as $js) {
            if (!matchesIn($js, '.svn')) {
                $jslist[] = $js;
            }
        }

        // 出力先ディレクトリ内のファイルを削除
        $ret = get_filelist($outDir . $target.'/');
        $outDirFiles = array();
        foreach ($ret as $file) {
            if (!matchesIn($js, '.svn')) {
                $outDirFiles[] = $file;
            }
        }
        foreach ($outDirFiles as $file) {
            @unlink($file);
        }

        // 各圧縮ファイル作成
        foreach ($jslist as $js) {

            // JSファイル名設定
            $cmd = $baseCmd . ' --js=' . $js;

            // 出力ファイル名設定
            $file = get_filename($js) . '-min.js';
            $cmd .=  ' --js_output_file=' . $outDir . $target . '/' . $file;

            if (matchesIn(PHP_OS, 'WIN')) {
                echo mb_convert_encoding($file . '出力中...' . PHP_EOL, 'sjis-win', 'UTF-8'); 
            } else {
                echo $file . '出力中...' . PHP_EOL; 
            }

            // 処理実行
            exec($cmd);
        }

        // パッケージファイル作成
        $cmd = $baseCmd;
        foreach ($jslist as $js) {

            // JSファイル名設定
            $cmd .= ' --js=' . $js;

        }

        // 出力ファイル名設定
        $cmd .=  ' --js_output_file=' . $outDir . $target.'-min.js';

        if (count($jslist) > 0) {

            if (matchesIn(PHP_OS, 'WIN')) {
                echo mb_convert_encoding($target.'-min.js 出力中...' . PHP_EOL, 'sjis-win', 'UTF-8'); 
            } else {
                echo $target.'-min.js 出力中...' . PHP_EOL; 
            }

            // 処理実行
            exec($cmd);
        }
    }

    // }}}

}

