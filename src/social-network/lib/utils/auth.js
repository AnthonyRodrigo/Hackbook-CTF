import bcrypt from "bcryptjs";
import clientPromise from "../mongodb";

export const signIn = async (user) => {
  try {
    const email = user.email.trim();
    const password = user.password.trim();

    // Check if email and password are not empty.
    if (email === "" || password === "")
      return { error: "Fields can not be empty !" };

    // Check if email is valid.
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

    if (!email.match(regEx)) return { error: "Email is not valid !" };

    const client = await clientPromise;
    const db = client.db("social-network");

    const existingUser = await db.collection("users").findOne({ email: email });

    if (existingUser) {
      // Compare hash of passwords.
      if (!bcrypt.compareSync(password, existingUser.password))
        return { error: "Bad password !" };

      return {
        user: {
          id: existingUser.id,
          name: existingUser.name,
          pseudo: existingUser.pseudo,
          location: existingUser.location,
          email: existingUser.email,
          creadtedOn: existingUser.createdOn,
          description: existingUser.description,
          photo: existingUser.photo,
          cover: existingUser.cover,
          friends: existingUser.friends,
          links: existingUser.links,
        },
      };
    }
  } catch (error) {
    return { error };
  }
};

export const signUp = async (user) => {
  try {
    const name = user.name.trim();
    const pseudo = user.pseudo.trim();
    const description = user.description.trim();
    const location = user.location.trim();
    const email = user.email.trim();
    let password = user.password.trim();
    const confirmPassword = user.confirmPassword.trim();
    const createdOn = new Date();
    const photo = "/img/avatar.png";
    const cover = "/img/cover-default.png";
    const friends = [];
    const links = [];

    // Check if name is empty;
    if (name === "") return { error: "Name must not be empty !" };

    // Check if email is empty.
    if (email === "") return { error: "Email must not be empty !" };

    // Check if email is valid.
    const regEx =
      /^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;

    if (!email.match(regEx)) return { error: "Email is not valid !" };

    // Check if user already exist.
    const client = await clientPromise;
    const db = client.db("social-network");
    const existingUser = await db.collection("users").findOne({ email: email });

    if (existingUser) return { error: "Email already taken !" };

    // Check if passwords are empty.
    if (password === "" || confirmPassword === "")
      return { error: "Passwords must not be empty !" };

    // Check if password are identical.
    if (password !== confirmPassword)
      return { error: "Passwords should be identical !" };

    // Get the next Id
    var nextId;
    const test2 = await db
      .collection("users")
      .find({}, { id: 1, _id: 0 })
      .sort({ _id: -1 })
      .limit(1)
      .forEach(function (myDoc) {
        nextId = myDoc.id + 1;
      });
    const id = nextId;

    // Hash the password.
    password = bcrypt.hashSync(password, 12);

    // Create user in DB.
    const newUser = await db.collection("users").insertOne({
      id,
      name,
      pseudo,
      location,
      email,
      createdOn,
      description,
      photo,
      cover,
      password,
      friends,
      links,
    });

    return { user: newUser };
  } catch (error) {
    return { error };
  }
};
