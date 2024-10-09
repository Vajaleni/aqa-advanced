const { CarsController } = require('../CarsController');
const carsController = new CarsController();

describe('Check Cars API', () => {
  beforeAll(async () => {
    await carsController.login();
  });

  afterAll(async () => {
    const carsResponse = await carsController.getCars();
    const carIds = carsResponse.data.data.map((c) => c.id);
    for (const carId of carIds) {
      await carsController.deleteCarById(carId);
    }
  });

  test('User can create a new car with valid data', async () => {
    let carsResponse = await carsController.getCars();
    const carList = [...carsResponse.data.data];

    // Создаю новую машину с корректными данными
    const newCarResponse = await carsController.createCar(1, 1, 1020);

    // Получаю обновленный список машин
    carsResponse = await carsController.getCars();
    const newCarList = carsResponse.data.data;

    // Проверяю, что количество машин увеличилось на 1
    expect(newCarList.length).toBe(carList.length + 1);

    // Проверяю, что новая машина находится в списке
    expect(
      newCarList.find((car) => car.id === newCarResponse.data.data.id)
    ).toBeDefined();
  });

  test('Fail to create car with invalid brandId (negative)', async () => {
    // Создаю машину с недействительным brandId
    try {
      await carsController.createCar(9999, 1, 1020);
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data.message).toBe('Route or entity not found');
    }
  });

  test('Fail to create car with invalid modelId (negative)', async () => {
    // Получаю список брендов для валидного brandId
    const brandsResponse = await carsController.getBrands();
    const validBrand = brandsResponse.data.data[0];

    try {
      //Создаю машину с недействительным modelId
      await carsController.createCar(validBrand.id, 9999, 1020);
    } catch (error) {
      expect(error.response.status).toBe(404);
      expect(error.response.data.message).toBe('Route or entity not found');
    }
  });

  test('Fail to create car with invalid mileage (negative)', async () => {
    // Получаю валидные данные для бренда и модели
    const brandsResponse = await carsController.getBrands();
    const validBrand = brandsResponse.data.data[0];
    const validModel = validBrand.models[0];
  
    // Создаю машину с некорректным значением пробега (например, -6)
    try {
      await carsController.createCar(validBrand.id, validModel.id, -6);
    } catch (error) {
      // Проверяю, что ответ содержит статус ошибки
      expect(error.response.status).toBe(400); //  сервер вернёт ошибку 400
      // Проверяю, что сообщение об ошибке соответствует ожидаемому
      expect(error.response.data.message).toBe('Bad request error');
    }
  });
});  