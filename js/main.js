var app = new Vue({
  el: '#app',
  data: {
    isActive: 'profile',
    works: [
      {
        title: "Hobeeeeee!!",
        year: "2021/1",
        description: "新しい趣味を見つけたい・広めたい人の願望を叶えるWebサービス。好きそうな趣味をつながりから探せることによって、サークルの新歓のように趣味を見つける・広めることができる。",
        tags: ["Nuxt.js", "Firebase"],
        image: "img/hobeeeeee.png",
        link: "https://hobeeeeee.netlify.app/",
      },
      {
        title: "なっとうまき",
        year: "2020/6",
        description: "リレー小説に分岐を作ることで、Ifが書けるリレー小説投稿サイト。",
        tags: ["Ruby on Rails", "SQLite", "Docker"],
        image: "img/nattomaki.png",
        link: null,
      },
    ],
    games: [
      {
        title: "BlackJack!!",
        year: "2020/10",
        description: "サクッと遊べるトランプゲームのブラックジャック",
        tags: ["C#","Altseed"],
        image: "img/blackjack.png",
      },
      {
        title: "たこシューティング",
        year: "2020/3",
        description: "向かってくるタコを避けつつ弾を発射してハイスコアを目指すゲーム",
        tags: ["C#","Altseed"],
        image: "img/tako.png",
      },
      {
        title: "ちみちみざむらい",
        year: "2019/8",
        description: "侍を操作して、魑魅魍魎を蹴散らせ！シンプルな2Dアクション",
        tags: ["C#", "Altseed"],
        image: "img/ex2019.png",
      },
    ],
  },
})