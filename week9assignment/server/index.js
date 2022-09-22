import express from "express";
import cors from "cors";
import pgPromise from "pg-promise";
import bodyParser from "body-parser";

const pgp = pgPromise({});

const db = pgp("postgres://localhost:5432/eventonica");

// let mockUsers = [
//     { id: 1, name: 'Marlin', email: 'marlin@gmail.com' },
//     { id: 2, name: 'Nemo', email: 'nemo@gmail.com' },
//     { id: 3, name: 'Dory', email: 'dory@gmail.com' }
//   ];

const app = express();
const PORT = 8080;

app.use(cors());
app.use(bodyParser.json());

// app.get('/', (req, res) => {
//     res.json("Hello from J");
// });


//added for db
app.get("/users", async function (req, res, next) {
  try {
    const users = await db.any("SELECT * FROM users", [true]);
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});



app.post("/users", async (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
  };
  console.log(user);
  try {
    //const users = await db.any("SELECT * FROM users", [true]);
    //console.log(users);
    // if (users.length === 0) {
    //   db.any("ALTER SEQUENCE user_id_seq RESTART WITH 1");
    // }
    const createdUser = await db.one(
      "INSERT INTO users(name, email) VALUES ($1, $2) RETURNING * ",
      [user.name, user.email]
    );
    console.log(createdUser);
    res.send(createdUser);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.delete("/users/:id", async (req, res) => {
  const userId = req.params.id;
  console.log(userId);
  try {
    await db.many("DELETE FROM users WHERE id=$1", [userId]);
    res.send({ status: "success" });
  } catch (e) {
    return res.status(400).json({ e });
  }
});

app.listen(PORT, () => console.log(`Hello from port ${PORT}`));

//export default db;
