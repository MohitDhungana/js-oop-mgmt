const {
  BasicService,
  ServiceWithJumba,
  ServiceWithBodyBuilding,
} = require('../Service/Service');

class User {
  name;
  discount = 1;

  constructor(name) {
    this.name = name.toUpperCase();
  }

  getBasicService() {
    return new BasicService();
  }

  getServiceWithJumba() {
    return new ServiceWithJumba();
  }

  getServiceWithBodyBuilding() {
    return new ServiceWithBodyBuilding();
  }

  static calculatePrice(price, discount) {
    return price * discount;
  }
}

class PremiumUser extends User {
  discount = 0.8;
  constructor(name) {
    super(name);
  }
}

// implementation details

// pu = new PremiumUser('harry');
// puService = pu.getServiceWithJumba();
// console.log(
//   `${pu.name} has to pay:`,
//   User.calculatePrice(puService.price, pu.discount)
// );

module.exports = { User, PremiumUser };
