module.exports.index = (req, res, next) => {
  res.render('index.ejs', {
    title: "About",
    path: "about"
  });
};

module.exports.resume = (req, res, next) => {
  res.render('index.ejs', {
    title: "Resume",
    path: "resume"
  });
};

module.exports.projects = (req, res, next) => {
  res.render('index.ejs', {
    title: "Projects",
    path: "projects"
  });
};

module.exports.thinkery = (req, res, next) => {
  res.render('index.ejs', {
    title: "Thinkery",
    path: "thinkery"
  });
};

module.exports.contact = (req, res, next) => {
  res.render('index.ejs', {
    title: "Contact",
    path: "contact"
  });
};
