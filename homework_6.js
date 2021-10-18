class Car {
    
    #brand = 'Брэнд не определён'
    #model = 'Модель не определена'
    #yearOfManufacturing = 'Год производства не определён'
    #maxSpeed = 'Максимальная скорость не определена'
    #maxFuelVolume = 'Максимальный объём не определён'
    #fuelConsumption = 'Расход топлива не определён'
    #currentFuelVolume = 0
    #isStarted = false
    #mileage = 0


    get brand() {
        return this.#brand
    }

    set brand(brand) {
        if (typeof brand !== 'string' || brand.length < 1 || brand.length > 50) {
            throw new Error('Ошибка brand!')
        } else {
            this.#brand = brand
        }
    }


    get model() {
        return this.#model
    }

    set model(model) {
        if (typeof model !== 'string' || model.length < 1 || model.length > 50) {
            throw new Error('Ошибка model!')
        } else {
            this.#model = model
        }
    }


    get yearOfManufacturing() {
        return this.#yearOfManufacturing
    }

    set yearOfManufacturing(year) {
            if (Number.isSafeInteger(year) && year >= 1900 && year <= new Date().getFullYear()) {
        this.#yearOfManufacturing = year
        } else {
            throw new Error('Ошибка yearOfManufacturing!')
        }
    }


    get maxSpeed() {
        return this.#maxSpeed
    }

    set maxSpeed(speed) {
        if (Number.isSafeInteger(speed) && speed >= 100 && speed <= 300) {
            this.#maxSpeed = speed
        } else {
            throw new Error('Ошибка maxSpeed!')
        }
    }


    get maxFuelVolume() {
        return this.#maxFuelVolume
    }

    set maxFuelVolume(liters) {
        if (Number.isSafeInteger(liters) && liters >= 5 && liters <= 20) {
            this.#maxFuelVolume = liters
        } else {
            throw new Error('Ошибка maxFuelVolume!')
        }
    }


    get fuelConsumption() {
        return this.#fuelConsumption
    }

    set fuelConsumption(consumption) {
        if (Number.isSafeInteger(consumption)) {
            this.#fuelConsumption = consumption
        } else {
            throw new Error('Ошибка fuelConsumption!')
        }
    }


    get currentFuelVolume() {
        return this.#currentFuelVolume
    }

    get isStarted() {
        return this.#isStarted
    }

    get mileage() {
        return this.#mileage
    }



    start() {
        if (this.#isStarted) {
            throw new Error('Машина уже заведена')
        } else {
            this.#isStarted = true
        }
    }

    shutDownEngine() {
        if (!this.#isStarted) {
            throw new Error('Машина ещё не заведена')
        } else {
            this.#isStarted = false
        }
    }

    fillUpGasTank(liters) {
        if (!Number.isSafeInteger(liters) || liters <= 0) {
            throw new Error('Неверное количество топлива для заправки')
        } else if ((this.#currentFuelVolume + liters) > this.#maxFuelVolume) {
            throw new Error('Топливный бак переполнен')
        } else {
            this.#currentFuelVolume += liters
        }
    }

    drive(speed, hours) {
        let requiredFuel = (speed * hours) * this.#fuelConsumption / 100;

        if (!Number.isSafeInteger(speed) || speed <= 0) {
            throw new Error('Неверная скорость')
        } else if (!Number.isSafeInteger(hours) || hours <= 0) {
            throw new Error('Неверное количество часов')
        } else if (speed > this.#maxSpeed) {
            throw new Error('Машина не может ехать так быстро')
        } else if (!this.#isStarted) {
            throw new Error('Машина должна быть заведена чтобы ехать')
        } else if (this.#currentFuelVolume < requiredFuel) {
            throw new Error('Недостаточно топлива')
        } else {
            this.#currentFuelVolume -= requiredFuel;
            this.#mileage += speed * hours
        }
    }
}