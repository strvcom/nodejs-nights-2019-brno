# Homework

Homework has three parts:


## 1. Refactor your current article api project

1. Refactor your current article api implementation to match the _routes_, _controllers_, _operations_, _repositories_ layered model.
2. Also don't forget to implement configuration, error handling and validation.
3. Implement authorization routes and middleware.

Don't be afraid to heavily inspire yourself by the existing code in this branch. The objective here is to get your hands on how the parts of the system connect one to another, not to reinvent it from the ground up. Therefore even copying parts of files from this repository works fine for this task. Good luck to all you adventurous who will take me up on this challenge.

## 2. Implement user sign in route to your project

The new route should have following signature

```json
POST /sessions/user
{
  "email": "zaphod@beeblebrox.me",
  "password": "Password124!"
}
```

You will need `comparePasswords` function in `cryto.js` file

```javascript
function comparePasswords(plaintext, ciphertext) {
  return bcrypt.compare(pepperify(plaintext), ciphertext)
}
```

Don't be afraid to heavily inspire yourself by the existing code in this branch.

## 3. Update text analysis (optional)

When article is rude store article to database with boolean flag `enabled = false`. Update `GET /articles` endpoint to return only enabled articles.
