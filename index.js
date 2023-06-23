const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/login", (req, res) => {
  const data = {
    accessToken: "eyeyeyeyeyyeyeyeyyyyeyeyey",
    profileImg:
      "https://images.pexels.com/photos/6551763/pexels-photo-6551763.jpeg?auto=compress&cs=tinysrgb&w=1600",
  };
  res.json(data);
});
app.get("/story", (req, res) => {
  const data = [
    {
      id: 1,
      coverImg:
        "https://images.pexels.com/photos/3125171/pexels-photo-3125171.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Underwater train",
      circleImg:
        "https://images.pexels.com/photos/5384445/pexels-photo-5384445.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      coverImg:
        "https://images.pexels.com/photos/3732652/pexels-photo-3732652.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Cute bunny",
      circleImg:
        "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      coverImg:
        "https://images.pexels.com/photos/1770809/pexels-photo-1770809.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Eiszeit Kunstdruck",
      circleImg:
        "https://images.pexels.com/photos/3444087/pexels-photo-3444087.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 4,
      coverImg:
        "https://images.pexels.com/photos/1784578/pexels-photo-1784578.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Healthy Baking",
      circleImg:
        "https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      coverImg:
        "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "ZHAO LI YING",
      circleImg:
        "https://images.pexels.com/photos/4946515/pexels-photo-4946515.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  res.json(data);
});

app.get("/newsfeed", (req, res) => {
  const data = [
    {
      id: 1,
      user: {
        profileImg:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        firstName: "Mark",
        lastName: "Zuckerberg",
      },
      postDate: "October 20 at 9:57 PM",
      postType: "public",
      contentDescription:
        "Today is the Facebook Communities Summit, where we celebrate all the communities you've created here. There are over 100 million new group memberships every day on Facebook -- which is kind of incredible. We'll keep building new experiences like community chats so you can build even deeper connections around shared interests.",
      contentImage: "",
      interact: {
        like: 100234,
        love: 17960,
        haha: 8564,
        care: 1204,
        wow: 915,
        angry: 195,
        sad: 175,
        friends: ["Bat Bold", "Tuya Dulmaa"],
        comments: 25495,
        shares: 2657,
      },
      topComment: {
        user: {
          profileImg:
            "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
          firstName: "Mark",
          lastName: "Zuckerberg",
        },
        postDate: "3d",
        content: "You can check out the event at 9am",
        interact: {
          like: 3956,
          love: 928,
          haha: 561,
          care: 157,
          wow: 73,
          angry: 22,
          sad: 16,
        },
      },
    },
    {
      id: 2,
      user: {
        profileImg:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        firstName: "Mark",
        lastName: "Zuckerberg",
      },
      postDate: "6d",
      postType: "public",
      contentDescription:
        "WhatsApp is far more private and secure than iMessage, with end-to-end encryption that works across both iPhones and Android, including group chats. With WhatsApp you can also set all new chats to disappear with the tap of a button. And last year we introduced end-to-end encrypted backups too. All of which iMessage still doesn't have.",
      contentImage:
        "https://worldmapper.org/wp-content/uploads/2020/02/Grid_AnthropoceneWorld_2016-1000x500.png",
      interact: {
        like: 100234,
        love: 17960,
        haha: 8564,
        care: 1204,
        wow: 915,
        angry: 195,
        sad: 175,
        friends: ["Bat Bold", "Tuya Dulmaa"],
        comments: 25495,
        shares: 2657,
      },
      topComment: {
        user: {
          profileImg:
            "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-1/246669470_10101721115482941_8180822396798426088_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8icjOHQnIaoAX9zeIAa&_nc_oc=AQm0pyqOHieycfIfzMtc3mCtJRfxRbIG-H5PS8AjV5Q0TE8UXjXAeQwUR4VE7BjEPDg&_nc_ht=scontent.fuln1-2.fna&oh=00_AT_0e6h5PJn4P9DwwHDXgVKH4mUbTnc1ATsSnWsmZZJoXQ&oe=635B277C",
          firstName: "Nick",
          lastName: "Schrock",
        },
        postDate: "3d",
        content:
          "I’ll never switch to WhatsApp until it replicates the best feature of iMessage where it decides seemingly at random to send from your email address or phone number depending on what device you use.",
        interact: {
          like: 3956,
          love: 928,
          haha: 561,
          care: 157,
          wow: 73,
          angry: 22,
          sad: 16,
        },
      },
    },
    {
      id: 3,
      user: {
        profileImg:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        firstName: "Mark",
        lastName: "Zuckerberg",
      },
      postDate: "October 20 at 9:57 PM",
      postType: "public",
      contentDescription:
        "Today is the Facebook Communities Summit, where we celebrate all the communities you've created here. There are over 100 million new group memberships every day on Facebook -- which is kind of incredible. We'll keep building new experiences like community chats so you can build even deeper connections around shared interests.",
      contentImage: "",
      interact: {
        like: 100234,
        love: 17960,
        haha: 8564,
        care: 1204,
        wow: 915,
        angry: 195,
        sad: 175,
        friends: ["Bat Bold", "Tuya Dulmaa"],
        comments: 25495,
        shares: 2657,
      },
      topComment: {
        user: {
          profileImg:
            "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
          firstName: "Mark",
          lastName: "Zuckerberg",
        },
        postDate: "3d",
        content: "You can check out the event at 9am",
        interact: {
          like: 3956,
          love: 928,
          haha: 561,
          care: 157,
          wow: 73,
          angry: 22,
          sad: 16,
        },
      },
    },
    {
      id: 4,
      user: {
        profileImg:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        firstName: "Mark",
        lastName: "Zuckerberg",
      },
      postDate: "6d",
      postType: "public",
      contentDescription:
        "WhatsApp is far more private and secure than iMessage, with end-to-end encryption that works across both iPhones and Android, including group chats. With WhatsApp you can also set all new chats to disappear with the tap of a button. And last year we introduced end-to-end encrypted backups too. All of which iMessage still doesn't have.",
      contentImage:
        "https://worldmapper.org/wp-content/uploads/2020/02/Grid_AnthropoceneWorld_2016-1000x500.png",
      interact: {
        like: 100234,
        love: 17960,
        haha: 8564,
        care: 1204,
        wow: 915,
        angry: 195,
        sad: 175,
        friends: ["Bat Bold", "Tuya Dulmaa"],
        comments: 25495,
        shares: 2657,
      },
      topComment: {
        user: {
          profileImg:
            "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-1/246669470_10101721115482941_8180822396798426088_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8icjOHQnIaoAX9zeIAa&_nc_oc=AQm0pyqOHieycfIfzMtc3mCtJRfxRbIG-H5PS8AjV5Q0TE8UXjXAeQwUR4VE7BjEPDg&_nc_ht=scontent.fuln1-2.fna&oh=00_AT_0e6h5PJn4P9DwwHDXgVKH4mUbTnc1ATsSnWsmZZJoXQ&oe=635B277C",
          firstName: "Nick",
          lastName: "Schrock",
        },
        postDate: "3d",
        content:
          "I’ll never switch to WhatsApp until it replicates the best feature of iMessage where it decides seemingly at random to send from your email address or phone number depending on what device you use.",
        interact: {
          like: 3956,
          love: 928,
          haha: 561,
          care: 157,
          wow: 73,
          angry: 22,
          sad: 16,
        },
      },
    },
    {
      id: 5,
      user: {
        profileImg:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        firstName: "Mark",
        lastName: "Zuckerberg",
      },
      postDate: "October 20 at 9:57 PM",
      postType: "public",
      contentDescription:
        "Today is the Facebook Communities Summit, where we celebrate all the communities you've created here. There are over 100 million new group memberships every day on Facebook -- which is kind of incredible. We'll keep building new experiences like community chats so you can build even deeper connections around shared interests.",
      contentImage: "",
      interact: {
        like: 100234,
        love: 17960,
        haha: 8564,
        care: 1204,
        wow: 915,
        angry: 195,
        sad: 175,
        friends: ["Bat Bold", "Tuya Dulmaa"],
        comments: 25495,
        shares: 2657,
      },
      topComment: {
        user: {
          profileImg:
            "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
          firstName: "Mark",
          lastName: "Zuckerberg",
        },
        postDate: "3d",
        content: "You can check out the event at 9am",
        interact: {
          like: 3956,
          love: 928,
          haha: 561,
          care: 157,
          wow: 73,
          angry: 22,
          sad: 16,
        },
      },
    },
    {
      id: 6,
      user: {
        profileImg:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        firstName: "Mark",
        lastName: "Zuckerberg",
      },
      postDate: "6d",
      postType: "public",
      contentDescription:
        "WhatsApp is far more private and secure than iMessage, with end-to-end encryption that works across both iPhones and Android, including group chats. With WhatsApp you can also set all new chats to disappear with the tap of a button. And last year we introduced end-to-end encrypted backups too. All of which iMessage still doesn't have.",
      contentImage:
        "https://worldmapper.org/wp-content/uploads/2020/02/Grid_AnthropoceneWorld_2016-1000x500.png",
      interact: {
        like: 100234,
        love: 17960,
        haha: 8564,
        care: 1204,
        wow: 915,
        angry: 195,
        sad: 175,
        friends: ["Bat Bold", "Tuya Dulmaa"],
        comments: 25495,
        shares: 2657,
      },
      topComment: {
        user: {
          profileImg:
            "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-1/246669470_10101721115482941_8180822396798426088_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8icjOHQnIaoAX9zeIAa&_nc_oc=AQm0pyqOHieycfIfzMtc3mCtJRfxRbIG-H5PS8AjV5Q0TE8UXjXAeQwUR4VE7BjEPDg&_nc_ht=scontent.fuln1-2.fna&oh=00_AT_0e6h5PJn4P9DwwHDXgVKH4mUbTnc1ATsSnWsmZZJoXQ&oe=635B277C",
          firstName: "Nick",
          lastName: "Schrock",
        },
        postDate: "3d",
        content:
          "I’ll never switch to WhatsApp until it replicates the best feature of iMessage where it decides seemingly at random to send from your email address or phone number depending on what device you use.",
        interact: {
          like: 3956,
          love: 928,
          haha: 561,
          care: 157,
          wow: 73,
          angry: 22,
          sad: 16,
        },
      },
    },
    {
      id: 7,
      user: {
        profileImg:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        firstName: "Mark",
        lastName: "Zuckerberg",
      },
      postDate: "October 20 at 9:57 PM",
      postType: "public",
      contentDescription:
        "Today is the Facebook Communities Summit, where we celebrate all the communities you've created here. There are over 100 million new group memberships every day on Facebook -- which is kind of incredible. We'll keep building new experiences like community chats so you can build even deeper connections around shared interests.",
      contentImage: "",
      interact: {
        like: 100234,
        love: 17960,
        haha: 8564,
        care: 1204,
        wow: 915,
        angry: 195,
        sad: 175,
        friends: ["Bat Bold", "Tuya Dulmaa"],
        comments: 25495,
        shares: 2657,
      },
      topComment: {
        user: {
          profileImg:
            "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
          firstName: "Mark",
          lastName: "Zuckerberg",
        },
        postDate: "3d",
        content: "You can check out the event at 9am",
        interact: {
          like: 3956,
          love: 928,
          haha: 561,
          care: 157,
          wow: 73,
          angry: 22,
          sad: 16,
        },
      },
    },
    {
      id: 8,
      user: {
        profileImg:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        firstName: "Mark",
        lastName: "Zuckerberg",
      },
      postDate: "6d",
      postType: "public",
      contentDescription:
        "WhatsApp is far more private and secure than iMessage, with end-to-end encryption that works across both iPhones and Android, including group chats. With WhatsApp you can also set all new chats to disappear with the tap of a button. And last year we introduced end-to-end encrypted backups too. All of which iMessage still doesn't have.",
      contentImage:
        "https://worldmapper.org/wp-content/uploads/2020/02/Grid_AnthropoceneWorld_2016-1000x500.png",
      interact: {
        like: 100234,
        love: 17960,
        haha: 8564,
        care: 1204,
        wow: 915,
        angry: 195,
        sad: 175,
        friends: ["Bat Bold", "Tuya Dulmaa"],
        comments: 25495,
        shares: 2657,
      },
      topComment: {
        user: {
          profileImg:
            "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-1/246669470_10101721115482941_8180822396798426088_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8icjOHQnIaoAX9zeIAa&_nc_oc=AQm0pyqOHieycfIfzMtc3mCtJRfxRbIG-H5PS8AjV5Q0TE8UXjXAeQwUR4VE7BjEPDg&_nc_ht=scontent.fuln1-2.fna&oh=00_AT_0e6h5PJn4P9DwwHDXgVKH4mUbTnc1ATsSnWsmZZJoXQ&oe=635B277C",
          firstName: "Nick",
          lastName: "Schrock",
        },
        postDate: "3d",
        content:
          "I’ll never switch to WhatsApp until it replicates the best feature of iMessage where it decides seemingly at random to send from your email address or phone number depending on what device you use.",
        interact: {
          like: 3956,
          love: 928,
          haha: 561,
          care: 157,
          wow: 73,
          angry: 22,
          sad: 16,
        },
      },
    },
    {
      id: 9,
      user: {
        profileImg:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        firstName: "Mark",
        lastName: "Zuckerberg",
      },
      postDate: "October 20 at 9:57 PM",
      postType: "public",
      contentDescription:
        "Today is the Facebook Communities Summit, where we celebrate all the communities you've created here. There are over 100 million new group memberships every day on Facebook -- which is kind of incredible. We'll keep building new experiences like community chats so you can build even deeper connections around shared interests.",
      contentImage: "",
      interact: {
        like: 100234,
        love: 17960,
        haha: 8564,
        care: 1204,
        wow: 915,
        angry: 195,
        sad: 175,
        friends: ["Bat Bold", "Tuya Dulmaa"],
        comments: 25495,
        shares: 2657,
      },
      topComment: {
        user: {
          profileImg:
            "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
          firstName: "Mark",
          lastName: "Zuckerberg",
        },
        postDate: "3d",
        content: "You can check out the event at 9am",
        interact: {
          like: 3956,
          love: 928,
          haha: 561,
          care: 157,
          wow: 73,
          angry: 22,
          sad: 16,
        },
      },
    },
    {
      id: 10,
      user: {
        profileImg:
          "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
        firstName: "Mark",
        lastName: "Zuckerberg",
      },
      postDate: "6d",
      postType: "public",
      contentDescription:
        "WhatsApp is far more private and secure than iMessage, with end-to-end encryption that works across both iPhones and Android, including group chats. With WhatsApp you can also set all new chats to disappear with the tap of a button. And last year we introduced end-to-end encrypted backups too. All of which iMessage still doesn't have.",
      contentImage:
        "https://worldmapper.org/wp-content/uploads/2020/02/Grid_AnthropoceneWorld_2016-1000x500.png",
      interact: {
        like: 100234,
        love: 17960,
        haha: 8564,
        care: 1204,
        wow: 915,
        angry: 195,
        sad: 175,
        friends: ["Bat Bold", "Tuya Dulmaa"],
        comments: 25495,
        shares: 2657,
      },
      topComment: {
        user: {
          profileImg:
            "https://scontent.fuln1-2.fna.fbcdn.net/v/t39.30808-1/246669470_10101721115482941_8180822396798426088_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=8icjOHQnIaoAX9zeIAa&_nc_oc=AQm0pyqOHieycfIfzMtc3mCtJRfxRbIG-H5PS8AjV5Q0TE8UXjXAeQwUR4VE7BjEPDg&_nc_ht=scontent.fuln1-2.fna&oh=00_AT_0e6h5PJn4P9DwwHDXgVKH4mUbTnc1ATsSnWsmZZJoXQ&oe=635B277C",
          firstName: "Nick",
          lastName: "Schrock",
        },
        postDate: "3d",
        content:
          "I’ll never switch to WhatsApp until it replicates the best feature of iMessage where it decides seemingly at random to send from your email address or phone number depending on what device you use.",
        interact: {
          like: 3956,
          love: 928,
          haha: 561,
          care: 157,
          wow: 73,
          angry: 22,
          sad: 16,
        },
      },
    },
  ];
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
