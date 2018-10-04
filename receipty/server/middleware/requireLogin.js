module.exports = (request, response, next) => {
    // request.user = {
    //   username: "erica",
    //   password: "erica",
    //   _id: "5bb1d50975f41aafb649c416"
    // }
  
    if (!request.user) {
      return response.status(401).send({ error: 'You must log in!' });
    }
  
    next();
  };