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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
