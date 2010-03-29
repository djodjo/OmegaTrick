<?php

class OmegaTrick_core extends xFrameworkPX_Controller_Action
{
    public function execute()
    {
        // 作業ディレクトリ設定
        $baseDir = '../public_html/OmegaTrick/src/plugins/';

        // 出力先ディレクトリ
        $outDir = '../public_html/OmegaTrick/pkgs/';

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
        $ret = get_filelist($outDir . 'core/');
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
            $cmd .=  ' --js_output_file=' . $outDir . 'core/' . $file; 

            echo $file . '出力中...' . PHP_EOL; 

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
        $cmd .=  ' --js_output_file=' . $outDir . 'core-min.js';

        echo 'core-min.js 出力中...' . PHP_EOL; 

        // 処理実行
        exec($cmd);
 
    }
}

