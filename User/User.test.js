const { User, PremiumUser } = require('./User');

basicUser = new User('krishna');
premiumUser = new PremiumUser('hari');

describe('User test suite', () => {
  test('calculatePrice static method should be defined in User class ', () => {
    expect(User.calculatePrice).toBeDefined();
  });

  test('getBasicService should be defined in User class ', () => {
    expect(basicUser.getBasicService()).toBeDefined();
  });

  test('getServiceWithJumba should be defined in User class ', () => {
    expect(basicUser.getServiceWithJumba()).toBeDefined();
  });

  test('getServiceWithBodyBuilding should be defined in User class ', () => {
    expect(basicUser.getServiceWithBodyBuilding()).toBeDefined();
  });

  test('should correctly calculate price of premium user with basic service', () => {
    premiumBasicService = premiumUser.getBasicService();
    expect(
      User.calculatePrice(premiumBasicService.price, premiumUser.discount)
    ).toBe(80);
  });

  test('should correctly calculate price of basic user having service with bodybuilding', () => {
    userBodyBuildingService = basicUser.getServiceWithBodyBuilding();
    expect(
      User.calculatePrice(userBodyBuildingService.price, basicUser.discount)
    ).toBe(500);
  });

  test('should correctly calculate price of premium user having service with jumba', () => {
    premiumJumbaService = premiumUser.getServiceWithJumba();
    expect(
      User.calculatePrice(premiumJumbaService.price, premiumUser.discount)
    ).toBe(160);
  });
});
