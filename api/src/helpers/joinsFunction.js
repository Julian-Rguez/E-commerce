module.exports = function joins(name, names) {
  const name1 = name.toLowerCase();
  const name2 = names.toLowerCase();
  let co = [];
  for (var i = 0; i < name.length; i++) {
    co.push(name2[i]);
  }
  let cc = co.join("");
  if (name1 == cc) {
    return names;
  } else {
    return "no se encontro";
  }
};
