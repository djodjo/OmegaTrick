/**
 * OmegaTrickローディングマスク
 *
 * Ext JS/Omega Trickが読み込まれる前に、ピュアJavaScriptのみで
 * ローディングマスクを動的に生成します。
 */

// OmegaTrickオブジェクト生成
OmegaTrick = {
    createElement : function(o) {

        var div = document.createElement((o.tag || 'div'));

        if(o.id) {
            div.id = o.id;
        }

        if(o.renderTo) {
            o.renderTo.appendChild(div);
        }

        return div;
    }
};

// 全体を覆うマスクDIVタグ生成
OmegaTrick.createElement({
    id: 'OMEGATRICK_LOADINGMASK',
    renderTo: document.body    
});

// ロゴ表示用DIVタグ生成
OmegaTrick.createElement({
    id: 'OMEGATRICK_LOADING_LOGO',
    renderTo: document.body
});

// 処理状態表示用DIVタグ生成
OmegaTrick.progress = OmegaTrick.createElement({
    id: 'OMEGATRICK_LOADING_PROGRESS', 
    renderTo: document.body
});

delete OmegaTrick;
