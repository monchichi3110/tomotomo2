document.addEventListener('DOMContentLoaded', () => {

    const buttons = document.querySelectorAll('.menu-btn');
    const pages = document.querySelectorAll('.page-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // すでにアクティブなボタンを押した時は何も動かさない
            if(button.classList.contains('active')) return;

            // ▼ ゲームの決定エフェクト風：一瞬ピカッと光らせるクラスを追加 ▼
            button.classList.add('flash');
            
            // 0.2秒後（光るアニメーションが終わる頃）にページを切り替える
            setTimeout(() => {
                // 光るクラスを外す
                button.classList.remove('flash');

                // ボタンの選択状態の切り替え
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // ページの切り替え
                const targetPageId = button.getAttribute('data-target');
                pages.forEach(page => page.classList.remove('active'));

                const targetPage = document.getElementById(targetPageId);
                if (targetPage) {
                    targetPage.classList.add('active'); // ここでCSSの「poyon」アニメーションが発動します
                }
                
                // ページトップへスムーズにスクロール
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }, 150); // 150ミリ秒だけわざと遅らせてピカッと感を強調
        });
    });
});