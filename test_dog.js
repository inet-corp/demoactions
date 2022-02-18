let Dog = require("./dog");

const dog1 = new Dog("Tom", 13);

if (dog1.getName() != "Tom") {
  process.exit(1);
}

if (dog1.getAge() != 12) {
  process.exit(1);
}

process.exit(0);
