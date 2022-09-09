---
title: "Talishar.net - an unofficial Flesh and Blood online client"
date: "2022-09-09"
coverImage: "./images/talishar-header.png"
path: "talishar-dot-net"
description: "Talishar.net is a fan-made, unofficial, online client to play Flesh & Blood TCG."
---

I had the pleasure over the last few weeks to work with the team behind [Talishar.net](https://www.talishar.net/) which is a fan-made, unofficial client to play Legend Story Studios' critically acclaimed Trading Card Game, [Flesh and Blood](http://www.fabtcg.com)

My involvement with the project was to revamp the front end, building a brand new program leveraging React and Redux to handle the sometimes complicated game state that Flesh & Blood can have. All game logic is from the backend and was largely untouched.

The advantage of using React is that now the game logic is a completely different entitiy to the users display, and APIs and ways of communicating between the FE and BE can completely be changed or swapped out, and the FE "experience" would still be the same. Follow up steps would involve having a websocket connection to reduce the amount of data to be sent from the BE to FE and even faster communication between the FE and BE to make the game more responsive.

Also on the 'stretch goals' list are animations to make the game even more interactive!

While the game is not open source I highly recommend you check out the game on [Talishar.net](https://www.talishar.net/) - the new UI should be available soon in spectator mode.

Tech used: React (Create React App), Typescript, Redux etc.
