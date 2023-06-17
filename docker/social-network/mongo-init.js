db = db.getSiblingDB("social-network");

db.createCollection("users");

db.users.insertMany([
  {
    id: 1,
    name: "Léa",
    pseudo: "lea31",
    location: "Toulouse",
    email: "lea.leroux.gribouille@gmail.com",
    createdOn: ISODate("2023-02-01T08:01:22Z"),
    password: "$2b$12$2pD/vfUxCOI5ngzrT54QseXD0oj/uM4uR276Kv7ZsIzYfVzULbEDy",
    description:
      "😻👯‍♀️ Crazy cat lady and proud! I love nothing more than spending time with my feline best friend, Gribouille, and my human bestie, Alexia. When we're not playing with Gribouille or planning our next adventure, you can find us binge-watching Stranger Things and theorizing about what's to come. 🕵️‍♀️💭 Let's talk all things cats, besties, and Stranger Things! #GribouilleObsessed #CatLady #BestFriends #StrangerThings #BingeWatching 🙌🏼😻👯‍♀️👀📺",
    photo: "/img/lea.png",
    cover: "/img/cover.png",
    friends: [2, 3],
    links: [
      {
        textDisplay: "Follow me on instagram",
        url: process.env.LEA_INSTA_URL,
      },
    ],
  },
  {
    id: 2,
    name: "Kevin",
    pseudo: "Keke",
    location: "Internet",
    email: "kevin@keke.com",
    createdOn: ISODate("2023-02-01T15:01:33Z"),
    description:
      "💻🎥 Tech enthusiast by day, Netflix addict by night. " +
      "When I'm not building new projects or writing about the latest PHP developments, " +
      "you can find me discussing plot twists and character arcs with my sister, Alexia. 🤔💬" +
      "Let's build something awesome together and talk all things Netflix! #CodeCrusaderAndChill #TechieByDayNetflixAddictByNight #BingeWatcher #BuildingTheFuture 🚀👨‍💻📺🍿",
    photo: "/img/kevin.png",
    cover: "/img/cover2.jpg",
    password: "$2b$12$IdbVgLBVLU2ZRHkjQZr6lOEcjEiTS5AC5PyJ9ygvmMNbbfQNilfNu",
    friends: [1, 3],
    links: [],
  },
  {
    id: 3,
    name: "Alexia",
    pseudo: "YourGirlfriend",
    location: "Tinder",
    email: "alexia@girlfriend.com",
    createdOn: ISODate("2023-02-05T12:21:01Z"),
    description:
      "📺🍿 Binge-watcher and proud!" +
      "When I'm not working, you can find me glued to my TV screen, catching up on the latest shows on Netflix." +
      "From drama to comedy to reality TV, I'm always looking for my next obsession.\n" +
      "BFF with Lea 😍" +
      "My mail : alexia@girlfriend.com",
    photo: "/img/alexia.png",
    cover: "/img/cover3.jpg",
    password: "$2b$12$cOqwj2oCaXLz/HHg0JetsOJYAvst70qv2tnJo.nP887S/DxGWH59e",
    friends: [1, 2, 4],
    links: [],
  },
  {
    id: 4,
    name: "Alexis",
    pseudo: "MrDevHacker",
    location: "Darknet",
    email: "mrhacker.hackbook@proton.me",
    createdOn: ISODate("2023-02-05T12:21:01Z"),
    description:
      "I am a software developer 💻 who has been working for Hackbook, a popular social networking platform, for the past five years.\nI grew up in a small town in the United States and developed a passion for programming at an early age 🧑‍💻.\nI graduated from a top university with a degree in computer science and joined Hackbook shortly after.\nToday, I am responsible for software development 👨‍💼. I designed the authentication system of Hackbook. 🔐",
    photo: "/img/dev-hacker.png",
    cover: "/img/cover-default.png",
    password: "$2a$12$ZwiELRvZoTf8EKhTLs6dRO5VpD.bs4cGVM2o/ehkh1mgrHGhQWV16",
    friends: [3],
    links: [
      {
        textDisplay: "My latest project on GitHub",
        url: "https://github.com/MrDevHacker",
      },
    ],
  },
]);

db.createCollection("posts");

post1 = new ObjectId();
post2 = new ObjectId();
post3 = new ObjectId();
post4 = new ObjectId();
post5 = new ObjectId();
post6 = new ObjectId();
post7 = new ObjectId();
post8 = new ObjectId();
post9 = new ObjectId();
post10 = new ObjectId();
post11 = new ObjectId();
post12 = new ObjectId();
post13 = new ObjectId();
post14 = new ObjectId();
post15 = new ObjectId();
post16 = new ObjectId();

// The comments and the post are stored in the same document.
// Thereafter, we don't need to add comments in our project.
db.posts.insertMany([
  {
    text: "🐾 Hi friends! This is Gribouille, my adventurous cat 🐱 Today, I decided to go discover a park in Toulouse and I must say I was pleasantly surprised! \n\n 🌳 The park is huge, with trees, lawns and even a small pond where Gribouille was able to observe ducks 🦆 He also crossed paths with other cats and even a few dogs, but everything went well because everyone was on a leash. \n\n 🌞 The weather was beautiful today, so Scribbler took time to bask in the sun ☀️ and explore every corner of the park. He climbed trees, chased butterflies 🦋 and even found a quiet little spot to take a nap. \n\n 📷 I took a picture of Doodle to show you how beautiful he is and I can't wait to go back and continue discovering new things! If you're looking for a cool place to walk around in Toulouse, I highly recommend this park!",
    photos: ["/img/gribouille-park.png"],
    userId: 1,
    createdOn: ISODate("2023-02-16T13:31:31Z"),
    comments: [
      {
        text: "I love Gribouille <3",
        userId: 3,
        createdOn: ISODate("2023-02-16T11:01:22Z"),
      },
    ],
    likes: [1, 2],
    shares: 2,
    saved: [],
    links: [],
  },
  {
    _id: post2,
    text: "Having a cat at home has so many benefits! They're great company, can reduce stress levels, and even lower your risk of heart disease. Plus, there's nothing quite like cuddling up with a furry friend on a lazy afternoon. 🐾😻",
    photos: ["/img/chat-blanc.jpg"],
    userId: 1,
    createdOn: ISODate("2023-02-15T10:01:22Z"),
    comments: [
      {
        text: "I like it ! ",
        userId: 2,
        createdOn: ISODate("2023-02-15T11:01:22Z"),
      },
      {
        text: "I agree with you <3",
        userId: 3,
        createdOn: ISODate("2023-02-15T12:01:22Z"),
      },
    ],
    likes: [1, 2, 3],
    shares: 0,
    saved: [2, 3],
    links: [
      { textDisplay: "CatLover", url: "https://www.wordsense.eu/catlover/" },
      {
        textDisplay: "PetTherapy",
        url: "https://www.doctissimo.fr/sante/diaporamas/pet-therapy-ces-animaux-qui-soignent",
      },
      {
        textDisplay: "HealthyLifestyle",
        url: "https://www.health.harvard.edu/blog/healthy-lifestyle-5-keys-to-a-longer-life-2018070514186",
      },
    ],
  },
  {
    _id: post3,
    text:
      "📢 Hey friends! Today I'm taking you to my amazing city, " +
      "located in the department 31: Toulouse! 🌇 \n\n" +
      "🏰 Known for its beautiful historical buildings such as the famous Saint-Sernin Basilica or the Place du Capitole. \n\n" +
      "Toulouse is full of surprises and wonders to discover. " +
      "With its cobblestone streets, lively squares, museums and gardens, there is so much to see and do in this dynamic and exciting city! \n\n" +
      "🍽️ Of course, one should not forget to mention the famous gastronomy of Toulouse, with specialties such as cassoulet, Toulouse sausage, " +
      "foie gras or Toulouse violets.\n\n" +
      "Department 31 is full of local producers who offer quality products that will delight your taste buds. \n\n" +
      "Are you convinced? Don't hesitate any longer and come and discover Toulouse, a city in department 31, which has so much to offer! 🤩 \n\n\n" +
      "💖 #Gribouille",
    photos: ["/img/toulouse.jpg"],
    userId: 1,
    createdOn: ISODate("2023-03-31T13:31:31Z"),
    comments: [
      {
        text: "The 31 is really the best ! ",
        userId: 2,
        createdOn: ISODate("2023-03-31T11:01:22Z"),
      },
    ],
    likes: [1],
    shares: 1,
    saved: [],
    links: [
      { textDisplay: "Toulouse", url: "https://thcon.party/" },
      { textDisplay: "31", url: "https://fr.wikipedia.org/wiki/Toulouse" },
    ],
  },
  {
    _id: post4,
    text:
      "Watching Stranger Things with Alexia is just awesome ! " +
      "😍 We are totally addicted to this series, and can't get enough of it ! " +
      "👀 But what's really sweet about Alexia is that she lends me her Netflix account" +
      " so I can continue to follow the adventures of" +
      " my favorite heroes. She really is too nice, isn't she? ❤️ " +
      "Thanks again Alexia for this moment of pure fun, I couldn't do it without you! 🤗 \n\n" +
      "😍 #Friends 💖#BFF \n",
    photos: ["/img/stranger-things.jpg"],
    userId: 1,
    createdOn: ISODate("2023-04-04T11:01:22Z"),
    comments: [
      {
        text: "With my great pleasure my best friend! You can ask me for services whenever you want ;) <3 ",
        userId: 3,
        createdOn: ISODate("2023-04-05T11:01:22Z"),
      },
    ],
    likes: [1, 2, 3],
    shares: 1,
    saved: [3],
    links: [
      {
        textDisplay: "StrangerThings",
        url: "https://www.netflix.com/fr/title/80057281",
      },
      { textDisplay: "Netflix", url: "https://www.netflix.com/fr/" },
      {
        textDisplay: "SeriesAddict",
        url: "https://www.20minutes.fr/arts-stars/culture/2699995-20191004-series-addict-les-series-les-plus-addictives",
      },
    ],
  },
  {
    // Post to explain authentication
    text: "Authenticating a website with a password hash is a security process that protects users' passwords by storing them in an encrypted form. The idea is that the website does not store the password in clear text, but rather an encrypted version of the password, called a hash. \n The hashing process uses a hash algorithm that takes the plaintext password and turns it into a unique, hard-to-read string of characters. The hash is then stored in the website's database, rather than the plaintext password. \n When a user logs on to the website, he enters his password in clear text. The website then calculates the hash of this password and compares it to the hash stored in the database. If the two hashes correspond, the user is successfully authenticated and can access his account.",
    photos: ["/img/bcrypt.jpg"],
    userId: 2,
    createdOn: ISODate("2023-03-21T11:01:22Z"),
    comments: [
      {
        text: "Good explanation! Indeed, it seems that Hackbook uses the following hash function bcrypt.hashSync(password, 12) ",
        userId: 4,
        createdOn: ISODate("2023-03-22T11:01:22Z"),
      },
    ],
    likes: [1, 2, 3, 4],
    shares: 1,
    saved: [1],
    links: [],
  },
  {
    _id: post6, // Post to present blog php
    text:
      "Create a blog with mysql and php is very simple.👌 \n" +
      "First you need to create a SQL database with the following structure \n \n" +
      ' A table "articles" with : \n' +
      "\t-A field  id, to identify the element 🆔\n" +
      "\t-A field title, the title of the article 🖊️\n" +
      "\t-A field content, the content of your article 📜 \n" +
      "\t-A field date, the date of your article 📆 \n\n" +
      "Once it is done, you can create a php file to display the content of the database. \n" +
      "Your php file should begin like this 💻: \n" +
      "<?php \n" +
      "\t$db = new PDO('mysql:host=localhost;dbname=blog;charset=utf8', 'root', ''); \n" +
      "\t$articles = $db->query('SELECT * FROM articles ORDER BY date DESC'); \n" +
      "?> \n\n" +
      "Don't forget to add a login page like this : \n" +
      "<?php \n" +
      "\tsession_start(); \n" +
      "\tif (isset($_POST['login']) && isset($_POST['password'])) { \n" +
      "\t\tif ($_POST['login'] == 'admin' && $_POST['password'] == 'admin') { \n" +
      "\t\t\t$_SESSION['login'] = $_POST['login']; \n" +
      "\t\t\t$_SESSION['password'] = $_POST['password']; \n" +
      "\t\t} \n" +
      "\t} \n" +
      "\tif (!isset($_SESSION['login']) || !isset($_SESSION['password'])) { \n" +
      "\t\theader('Location: login.php'); \n" +
      "\t\texit(); \n" +
      "\t} \n" +
      "?> \n\n" +
      " Don't forget to follow me for more advices and tips about web development 🤗",
    photos: ["/img/logo-php.png"],
    userId: 2,
    createdOn: ISODate("2023-03-21T12:01:22Z"),
    comments: [
      {
        text: "Don't forget to sanitize your inputs!",
        userId: 4,
        createdOn: ISODate("2023-03-22T11:01:22Z"),
      },
    ],
    likes: [1, 4],
    shares: 1,
    saved: [1],
    links: [{ textDisplay: "PHPBlog", url: process.env.BLOG_BASE_URL+"/cv" }],
  },
  {
    _id: post7, // Post troll
    text:
      //write a post with a link to a website that will be used to troll the user but seems to present a new technology
      "Web development is a very interesting field. \n" +
      "Did you know that you can use Javascript for your server 🖲️ and not only for your client side 🖥️? \n" +
      "You can use NodeJS to create a server with Javascript. 👌 \n" +
      "You can also use ExpressJS to create a server with Javascript. 👍  \n" +
      "You can also use ReactJS to create a server with Javascript. 😍 \n" +
      "You can also use AngularJS to create a server with Javascript. 🤮\n" +
      "You can also use VueJS to create a server with Javascript. 🤷‍♀️ \n" +
      "But according to me the best framework to create a server with Javascript is this following one 🤩 : \n",
    photos: ["/img/logo-node.png"],
    userId: 2,
    createdOn: ISODate("2023-03-23T12:31:06Z"),
    comments: [
      {
        text: "I agree with you, very useful link !",
        userId: 4,
        createdOn: ISODate("2023-03-24T11:01:22Z"),
      },
    ],
    likes: [1, 2, 3, 4],
    shares: 3,
    saved: [],
    //url for rick roll
    links: [
      {
        textDisplay: "best framework to create website",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
    ],
  },
  {
    _id: post8, // netflix
    text:
      "My favorite serie is You. 🥸 \n" +
      "It's about a guy who is a stalker. 😶‍🌫️ \n" +
      "But, once, someone told me that I look like the guy from this serie. \n" +
      "I was very disturbed by this comment. \n" +
      "Fortunately, Alexia told me that I don't have the same personality as the guy from the serie You. 🙀 \n" +
      "She reassured me while we were watching together on her netflix account 🎥 \n",
    photos: ["/img/you-serie.png"],
    userId: 2,
    createdOn: ISODate("2023-03-23T12:31:06Z"),
    comments: [
      {
        text: "You're right, I don't think you're a stalker.",
        userId: 3,
        createdOn: ISODate("2023-03-23T13:01:22Z"),
      },
      {
        text: "It is true you look like him 🙀",
        userId: 1,
        createdOn: ISODate("2023-03-24T20:01:12Z"),
      },
    ],
    likes: [2, 3],
    shares: 3,
    saved: [3],
    //url for rick roll
    links: [
      {
        textDisplay: "YouSeries",
        url: "https://www.netflix.com/fr/title/80211991",
      },
    ],
  },
  {
    text: "Do you know Hashcat? \n It's a tool that allows you to break hashes using several types of attacks: combinator, dictionary, brute-force, hybrid, ... If a hacker manages to steal the password hashes, he may be able to recover your password! \n It is therefore very important to use different passwords on each site.",
    photos: [],
    userId: 2,
    createdOn: ISODate("2023-03-21T13:01:22Z"),
    comments: [
      {
        text: "Excellent tool! Many people use simple passwords, easily guessed with OSINT and combinator attack. More info here : https://hashcat.net/wiki/doku.php?id=combinator_attack",
        userId: 4,
        createdOn: ISODate("2023-03-25T22:22:22Z"),
      },
    ],
    likes: [1, 2, 3, 4],
    shares: 3,
    saved: [1, 3, 4],
  },
  {
    _id: post9, // netflix
    text:
      "📺🍿 Just finished binge-watching \"The Queen's Gambit\" on Netflix and I'm OBSESSED ! \n" +
      "♟️🤯 Anya Taylor-Joy was amazing as Beth Harmon and the storyline had me hooked from start to finish." +
      "🙌🏼 Can't wait to see what other shows Netflix has in store for us! 😍\n",
    photos: ["/img/queen-gambit.jpeg"],
    userId: 3,
    createdOn: ISODate("2023-03-26T00:31:06Z"),
    comments: [
      {
        text: "What a great serie !",
        userId: 1,
        createdOn: ISODate("2023-03-27T00:41:22Z"),
      },
    ],
    likes: [1, 2, 3],
    shares: 1,
    saved: [1, 2],
    //url for rick roll
    links: [
      {
        textDisplay: "NetflixAddict",
        url: "https://www.netflix.com/fr/title/80234304",
      },
      {
        textDisplay: "TheQueensGambit",
        url: "https://www.netflix.com/fr/title/80234304",
      },
      {
        textDisplay: "AnyaTaylorJoy",
        url: "https://fr.wikipedia.org/wiki/Anya_Taylor-Joy",
      },
    ],
  },
  {
    _id: post10, // message
    text:
      "📱🎉 Finally got my new phone and I am SO excited to be able to respond to all of my messages now!" +
      " 🙌🏼📨 Sorry to everyone who has been waiting for a reply, I promise I'll get back to you ASAP!" +
      " 😅 Can't wait to catch up with all of my friends and family. 👩‍❤️‍💋‍👨💬" +
      " 😍💻📲 #TextMe #FriendsAndFamily #Excited ",
    photos: ["/img/iphone.jpg"],
    userId: 3,
    createdOn: ISODate("2023-03-28T09:30:00Z"),
    comments: [
      {
        text: "I can't wait to see your new phone !",
        userId: 1,
        createdOn: ISODate("2023-03-28T12:20:08Z"),
      },
      {
        text: "I know the feeling !",
        userId: 2,
        createdOn: ISODate("2023-03-29T19:30:00Z"),
      },
    ],
    likes: [1, 2],
    shares: 1,
    saved: [3],
    //url for rick roll
    links: [],
  },
  {
    _id: post11, // filler
    text:
      "📝😅 Just had a mini-heart attack when I realized I forgot my Netflix password... but thank goodness I wrote it down on a piece of paper!\n" +
      '🙏🏼👀 Lesson learned - always keep track of your passwords, people! 😂 Now, it\'s time to continue my binge-watch of "The Crown".\n' +
      "👑🍿 #NoteToSelf 👸🏻📺😍 #BingeWatching ",
    photos: [],
    userId: 3,
    createdOn: ISODate("2023-04-01T22:30:00Z"),
    comments: [],
    likes: [1, 2],
    shares: 1,
    saved: [3],
    links: [
      {
        textDisplay: "TheCrown",
        url: "https://www.netflix.com/fr/title/80025678",
      },
    ],
  },
  {
    _id: post12, // filler
    text:
      "💅🏼💖 Just got my nails done and I am LOVING this new shade of pink!\n" +
      "😍🎀 It's the perfect pop of color to brighten up any outfit." +
      "💁🏼‍♀️ Plus, it's always fun to have an excuse to show off my hand gestures. 👋🏼😉" +
      " #FeelingFancy 💅🏼✨🌸",
    photos: ["/img/nails.jpg"],
    photos: [],
    userId: 3,
    createdOn: ISODate("2023-04-02T07:20:10Z"),
    comments: [
      {
        text: "I love it !",
        userId: 1,
        createdOn: ISODate("2023-04-02T07:30:00Z"),
      },
    ],
    likes: [1],
    shares: null,
    saved: [],
    links: [],
  },
  {
    _id: post13, // same password
    text:
      "Hi everyone! \n" +
      "Today I wanted to tell you about a bad habit that many of us have including myself: using the same password on several websites. 💣I know it sounds convenient, but it's a really bad idea. \n\n " +
      "The problem is that if a website is hacked and your password is stolen, hackers can use it to access other accounts you have on other sites.\n\n" +
      "I know it's tempting to reuse a password you already have in your memory, but please don't do it! 🙏 \n\n" +
      "#onlinesecurity #strongpasswords #personalprotection",
    photos: ["/img/same-pwd.jpg"],
    userId: 2,
    createdOn: ISODate("2023-04-03T22:30:00Z"),
    comments: [
      {
        text: "And it's not you who does that Alexia? 😂",
        userId: 1,
        createdOn: ISODate("2023-04-03T22:31:00Z"),
      },
      {
        text: "Don't worry Alexia, I have to be careful too!",
        userId: 2,
        createdOn: ISODate("2023-04-03T22:33:00Z"),
      },
    ],
    likes: [1, 2, 3],
    shares: 1,
    saved: [2, 3],
    links: [
      {
        textDisplay: "PCmag",
        url: "https://www.pcmag.com/news/stop-using-the-same-password-on-multiple-sites-no-really",
      },
    ],
  },
  {
    _id: post14, // filler
    text:
      "🤔📜 Ever wonder what Morse code is and how it works? 🤔🤔🤔\n " +
      "It's actually a system of communication that uses a series of dots and dashes to represent letters and numbers." +
      "Each letter or number is represented by a unique combination of dots and dashes, which can be sent over long distances using sound or light signals.\n " +
      "🌐🔦🔊 Morse code was first developed in the 1830s and is still used today in some forms of radio communication. " +
      "Who knew dots and dashes could be so powerful? 🤯🙌🏼 \n" +
      "#MorseCode #Communication #HistoryLesson #Technology #LearnSomethingNewEveryday 🧐📚💡",
    photos: ["/img/morse.png"],
    userId: 2,
    createdOn: ISODate("2023-04-03T09:20:10Z"),
    comments: [],
    likes: [],
    shares: null,
    saved: [],
    links: [],
  },
  {
    _id: post15, // troll
    text:
      "Hi everyone! Today I'd like to talk about Base64 and Hexa encryption."+
      "Base64 encryption is an encryption technique that converts binary data into ASCII text. Using this method, it is possible to transmit sensitive information securely, as ASCII text is easily transferable via standard communication channels such as email and text messages. \n\n"+
      "Hexa encryption, on the other hand, is another encryption technique that uses a hexadecimal base. It is often used to store data such as MAC and IP addresses, as well as for digital signatures.\n\n"+
      "The main advantage of these encryption techniques is that they allow sensitive information to be hidden in standard text. However, it is important to note that these methods are not foolproof and can be decrypted by malicious people.\n\n"+
      "It is therefore important to always use more advanced encryption techniques to protect your most sensitive data. In the meantime, Base64 and Hexa encryption remains a simple and effective method to protect your information in some cases.\n\n"+
      "For example, this secret of love is easy to decrypt: 61 48 52 30 63 48 4d 36 4c 79 39 6e 61 58 51 75 61 57 38 76 4c 6e 4a 69 62 48 67 3d",
    photos: ["/img/subscribeTHC.png"],
    userId: 2,
    createdOn: ISODate("2023-04-03T10:20:10Z"),
    comments: [
      {
        text: "53 69 64 68 61 57 31 6c 49 4f 6c 6a 63 6d 6c 79 5a 53 42 6a 62 32 31 74 5a 53 42 6a 59 51 3d 3d 😂",
        userId: 4,
        createdOn: ISODate("2023-04-03T10:21:00Z"),
      },
    ],
    likes: [1,2,3],
    shares: null,
    saved: [],
    links: [      
      {
        textDisplay: "Dcode",
        url: "https://www.dcode.fr/",
      },
    ],
  },
  {
    _id: post16, // thc
    text:
      "Hello to all! \n\n"+
      "Today I'd like to tell you about an event happening in Toulouse, the THC 2023!\n\n"+
      "The Toulouse Hacking Convention (or THCon) is a cybersecurity conference that brings together hobbyists, professionals and researchers!\n\n"+
      "Since its creation in 2017, the THCon was held every year in Toulouse, France. Today, it is an unmissable cybersecurity event in Occitania, and beyond.",
    photos: ["/img/thc2023.png"],
    userId: 2,
    createdOn: ISODate("2023-04-05T10:20:10Z"),
    comments: [],
    likes: [1,2,3,4],
    shares: null,
    saved: [],
    links: [      
      {
        textDisplay: "THC",
        url: "https://thcon.party/",
      },
      {
        textDisplay: "Youtube channel",
        url: "https://www.youtube.com/channel/UCynu1UtpaZCpDV2IVenAdkg",
      },
    ],
  },
]);

db.createCollection("notes");

// The comments and the post are stored in the same document.
// Thereafter, we don't need to add comments in our project.
db.notes.insertMany([
  {
    userId: 1,
    text: "Well done, you managed to find my password. \n Here is the flag you're looking for : THCon23{H$shedP$ssLe$k&Cr$cked###LEA_PASSWORD} \n ‼️ You have to replace LEA_PASSWORD by the password you found.",
    createdOn: ISODate("2023-02-23T17:01:10Z"),
  },
  {
    userId: 2,
    text: "Well done, you managed to find my password. \n Here is the flag you're looking for : THCon23{UnsecureBIog+E$syInjectI0n###KEVIN_PASSWORD} \n ‼️ You have to replace KEVIN_PASSWORD by the password you found.",
    createdOn: ISODate("2023-02-24T17:01:10Z"),
  },
  {
    userId: 3,
    text: "Well done, you managed to find my password. \n Here is the flag you're looking for : THCon23{^NeverUseTheS$meP$ssw0rd!###ALEXIA_PASSWORD} \n ‼️ You have to replace ALEXIA_PASSWORD by the password you found.",
    createdOn: ISODate("2023-02-25T17:01:10Z"),
  },
  {
    userId: 3,
    text: "DON'T ASK ALEXIS SOME HELP OR AN HINT !",
    createdOn: ISODate("2023-03-25T17:01:11Z"),
  },
  {
    userId: 4,
    text: "Ask Alexia for the photos of our last weekend together at DisneyLand and Paris. ❤️❤️❤️",
    createdOn: ISODate("2023-02-26T17:01:10Z"),
  },
  {
    userId: 4,
    text: "Well done, you have successfully logged into my account. \n Here is the flag you're looking for : THCon23{T$ke-C$re(0f/Your^Secret}",
    createdOn: ISODate("2023-02-27T17:01:10Z"),
  },
]);

// db.createCollection("photos");

// // The comments and the post are stored in the same document.
// // Thereafter, we don't need to add comments in our project.
// db.photos.insertMany([
//   { userId: 1, url: "" },
//   { userId: 1, url: "" },
// ]);

// Other implantation with views
// db.createCollection("savedPostsLink");
// db.savedPostsLink.insertMany([{ saverUserId: 1, postId: post2 }]);

// db.createView("savedPosts", "savedPostsLink", [
//   {
//     $lookup: {
//       from: "posts",
//       localField: "postId",
//       foreignField: "_id",
//       as: "postData",
//     },
//   },
// ]);
