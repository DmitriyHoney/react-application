const state = {
    sidebar: {
        links : [
            {url: '/profile', icon: 'fa-home', text: 'My Profile'},
            {url: '/feed', icon: 'fa-align-left', text: 'News'},
            {url: '/dialogs', icon: 'fa-comments', text: 'Messages'},
            {url: '/friend', icon: 'fa-user', text: 'Friends'},
            {url: '#', icon: 'fa-users', text: 'Communities!!!'},
            {url: '#', icon: 'fa-music', text: 'Music!!!'},
            {url: '#', icon: 'fa-film', text: 'Videos!!!'},
            {url: '#', icon: 'fa-gamepad', text: 'Games!!!'}
        ],
        friends: [
            {userId: 1, name: 'Pavel Durov', src: 'https://rossaprimavera.ru/static/files/2c7ca8526ecb.jpg'},
            {userId: 2, name: 'Geralt of Rivia', src: 'http://gamebomb.ru/files/galleries/001/2/23/330556.jpg'},
            {userId: 3, name: 'Jennifer Connelly', src: 'https://avatars.mds.yandex.net/get-pdb/1935444/7ad1efd1-cc5f-48fc-96ad-c65bab20970c/s1200'},
            {userId: 4, name: 'Harry Potter', src: 'https://avatars.mds.yandex.net/get-zen_doc/236854/pub_5a316bb4830905958b6dbad4_5a316bda77d0e6afcba2ac2d/scale_1200'},
            {userId: 5, name: 'Jack Sheppard', src: 'http://static2.kinootziv.com/source/files/wallpapers/matt/matthewfox67978.jpg'}
        ]
    },
    profilePage: [
        {message: "My first post! Hello, world!", likeCount: 7},
        {message: "You don`t know me, but believe me", likeCount: 25},
        {message: "В частности, сплочённость команды профессионалов представляет собой интересный эксперимент проверки существующих финансовых и административных условий.", likeCount: 42},
    ],
    dialogsPage: [
        {userId: 1, name: 'Pavel Durov', src: 'https://rossaprimavera.ru/static/files/2c7ca8526ecb.jpg'},
        {userId: 2, name: 'Geralt of Rivia', src: 'http://gamebomb.ru/files/galleries/001/2/23/330556.jpg'},
        {userId: 3, name: 'Jennifer Connelly', src: 'https://avatars.mds.yandex.net/get-pdb/1935444/7ad1efd1-cc5f-48fc-96ad-c65bab20970c/s1200'},
        {userId: 4, name: 'Harry Potter', src: 'https://avatars.mds.yandex.net/get-zen_doc/236854/pub_5a316bb4830905958b6dbad4_5a316bda77d0e6afcba2ac2d/scale_1200'},
        {userId: 5, name: 'Jack Sheppard', src: 'http://static2.kinootziv.com/source/files/wallpapers/matt/matthewfox67978.jpg'}
    ]
};

export default state;