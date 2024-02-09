document.querySelector('.btn').addEventListener('click', () => {
    fetch('https://samatkhabibyllin1991.amocrm.ru/oauth2/access_token', {
        method: 'post',
        body: JSON.stringify({
            client_id: "ebc84c4c-0d23-4566-99fd-e62e8c225d21",
            client_secret: "M5VXpBfKL6oKbv7PrAH6WilSDJJsE56NPr0iNtGkUwFA5rFLQFXBJCjehRPWgUDX",
            grant_type: "authorization_code",
            code: "def50200dcb81933fdb00322ff281efa347dd6ee55f50bbfc27d39da716d3d5b8e5f0b003911dfccf47ed7e66423b87d7018b218144ad2b529336fc956069b24637b204b2badfe29858d2c2e5e25b67d8cbcda3c3fca4e50ade9843e048e0092af532d1356d79a07d4980e9280fb5ae0060eb54a52d9a7694832ec2140547cdde31e390e995c14aa343b32f27eb8815e439a45c4f161bca27ea86a1fd5f376c85cb38606acb944fababf8e1f06f3d48cb3bb4f41b76fe6ce306a456520671c7a834f274124b60291125ba910a03185094089aa56d35766f5d77c9c79fd0d2e8aa28759e5fa6cc478f6ef5407d94a60660cc4d3e002e8ac6c1098fcfa487fe072716165c042a08cf6e539cf5a8ab52f797917d534f65d72fabaf70a1bb5e0a573a57e2970f63c60d7fcdc444579cffa384c0ff8cc186490e08106a919e403fe81601959c43b8e83f00b336680f321f156a726e5807e25a424920f69d8d080396aaf77ebcc53291591891587d95b6596d3080930390eae6951d744a4cf0ba22b9aea00812bacdbd2bc2d9f4ad3291a3ab1cf5c6bdd2a52e38b02c40bc87366637a3656792f732b803db55666717d133aeec8c70aa9476149ff8b237eacb14133ec98515c4f2fb1e642faacca89699a77402c28c3c980d60e4eb261f85df7a662797b8ae23e4efdefb507308531d7462f4cf0993eafd63b27d0dcddd46beae4f51b175337241735a6501d322c0cb29016bd",
            redirect_uri: "https://samatfontenddev.github.io/SamatFrontendDev.github.io/"
        }),
        mode: 'no-cors'
    }).then(res => res.json()).then(data => console.log(data))
})