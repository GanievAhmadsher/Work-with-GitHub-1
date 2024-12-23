// * Homework ---------------------------------------------------------- start --

console.log("GitHub homework.");

// ? Masala1 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_< Start >_<
class GameHero {
  constructor(name, health, power) {
    this.name = name;
    this.health = health;
    this.maxHealth = health;
    this.power = power;
    this.level = 0;
    this.experience = 0;
  }
  attack() {
    this.power += Math.floor(Math.random() * 5);
    this.experience += 10;
    this.level++;
    this.health--;
    console.log("Hujum muafaqiyatli amalga oshirildi!");
  }
  Health() {
    if (this.health === this.maxHealth) {
      console.log(`${this.name}ning salomatligi allaqachon 100%.`);
    }
    this.health = this.maxHealth;
    console.log(`${this.name} shifo topdi! Hozirgi salomatlik: ${this.health}`);
  }
  getStats() {
    console.log({
      name: this.name,
      health: this.health,
      power: this.power,
      level: this.level,
      experience: this.experience,
    });
  }
}
// const gameHero = new GameHero("Shadow",100,20)
// gameHero.attack()
// gameHero.Health()
// gameHero.getStats()
// ? Masala1 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  End  >_<

// !  ~> & <~      ~> & <~      ~> & <~      ~> & <~      ~> & <~

// ? Masala2 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_< Start >_<
class BankAccount {
  Owner = "";
  Balance = 0;
  ServiceFee = 0;
  History = "";
  #Date = new Date();
  constructor(Owner, Balance) {
    this.Owner = Owner;
    this.Balance = Balance;
    this.ServiceFee = this.ServiceFee;
    this.History = [];
  }
  deposit(amount) {
    this.Balance += amount;
    this.History.push({
      KiritilganMablag: amount,
      Vaqit: {
        Sana: `${this.#Date.toDateString()}`,
        Soat: `${this.#Date.toLocaleTimeString()}`,
      },
    });
    console.log(`Hisobingizga ${amount} so'm tushdi!`);
  }
  withdraw(amount) {
    let foiz = (1 / 100) * amount;
    this.ServiceFee += foiz;
    this.Balance -= amount;
    this.History.push({
      YechibOlishUchunBelgilanganMablag: amount,
      YechibOlinganMablag: amount - foiz,
      XizmatXaqi: this.ServiceFee,
      Vaqit: {
        Sana: `${this.#Date.toDateString()}`,
        Soat: `${this.#Date.toLocaleTimeString()}`,
      },
    });
    console.log(
      `Hisobingizdan ${
        amount - foiz
      } so'm yechib olindi! Xizmat xaqi uchun ${foiz} so'm olib qolindi.`
    );
  }
  getBalance() {
    console.log(`Balance: `, this.Balance);
  }
  getHistory() {
    console.log(`Hisobingiz tarixi: `, this.History);
  }
}
// const bankAccount = new BankAccount("Asror", 0);
// bankAccount.deposit(1_000_000);
// bankAccount.withdraw(500_000);
// bankAccount.getBalance();
// bankAccount.getHistory();
// ? Masala2 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  End  >_<

// !  ~> & <~      ~> & <~      ~> & <~      ~> & <~      ~> & <~

// ? Masala3 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_< Start >_<
class MusicPlayer {
  playList = 0;
  currentTrack = 0;
  constructor() {
    this.playList = [];
    this.currentTrack = 0;
  }
  play() {
    console.log("Playing:", this.playList[this.currentTrack]);
  }
  pause() {
    console.log("Pause:", this.playList[this.currentTrack]);
  }
  next() {
    console.log("Next Playing:", this.playList[++this.currentTrack]);
  }
  previous() {
    console.log("Previous Playing", this.playList[--this.currentTrack]);
  }
  addToPlayList(music) {
    this.playList.push(music);
  }
  printMusicList() {
    console.log(" -- MusicList -- ");
    for (let i = 0; i < this.playList.length; i++) {
      console.log(`${i + 1}. ${this.playList[i]}`);
    }
  }
  shuffle() {
    this.playList = this.playList.sort(
      () => Math.random() - this.playList.length / 10
    );
  }
}
// const musicPlayer = new MusicPlayer();
// musicPlayer.addToPlayList("song1.mp3");
// musicPlayer.addToPlayList("song2.mp3");
// musicPlayer.addToPlayList("song3.mp3");
// musicPlayer.addToPlayList("song4.mp3");
// musicPlayer.addToPlayList("song5.mp3");
// musicPlayer.addToPlayList("song6.mp3");
// musicPlayer.next();
// musicPlayer.play();
// musicPlayer.shuffle();
// musicPlayer.printMusicList();
// ? Masala3 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  End  >_<

// !  ~> & <~      ~> & <~      ~> & <~      ~> & <~      ~> & <~

// ? Masala4 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_< Start >_<
class RestaurantMenu {
  constructor() {
    this.menu = [];
    this.totalAmount = 0;
  }
  addDish(dish, price) {
    this.menu.push({ dish, price });
  }
  removeDish(dish) {
    this.menu = this.menu.filter((value, index, array) => value.dish !== dish);
  }
  calculateTotal() {
    this.totalAmount = this.menu.reduce((prewValue, currentValue) => {
      return prewValue + currentValue.price;
    }, 0);
    console.log(`Calculate total: ${this.totalAmount}`);
  }
  showMenu() {
    this.menu.forEach((value, index) => {
      console.log(
        `${index + 1}. Dish: ${value.dish}  -  Price: ${value.price}`
      );
    });
  }
}
// const menu = new RestaurantMenu();
// menu.addDish("Pizza", 40_000);
// menu.addDish("Lavash", 33_000);
// menu.addDish("Mini Lavash", 27_000);
// menu.showMenu();
// menu.removeDish("Lavash");
// menu.showMenu();
// menu.calculateTotal();
// ? Masala4 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  End  >_<

// !  ~> & <~      ~> & <~      ~> & <~      ~> & <~      ~> & <~

// ? Masala5 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_< Start >_<
class quizGame {
  constructor() {
    this.questions = [];
    this.currentScore = 0;
    this.totalQuestions = this.questions.length;
    this.currentQuestionIndex = 0;
  }
  addQuestion(question, options, correctAnswer) {
    this.questions.push({ question, options, correctAnswer });
    this.totalQuestions = this.questions.length;
  }
  checkAnswer(answer) {
    if (
      this.questions[this.currentQuestionIndex].correctAnswer.toLowerCase() ===
      answer.toLowerCase()
    ) {
      this.currentScore++;
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.questions.length) {
        this.askQuestion();
      } else {
        this.getScore();
      }
    } else {
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.questions.length) {
        this.askQuestion();
      } else {
        this.getScore();
      }
    }
  }
  getScore() {
    alert(
      `Jami savol ${this.totalQuestions} ta, javobi topilgan savol ${
        this.currentScore
      } ta, javobi topilmagan savol ${
        this.questions.length - this.currentScore
      } ta, Jami ${this.currentScore} bal to'plandi.`
    );
  }
  askQuestion() {
    alert(this.questions[this.currentQuestionIndex].question);
    alert(JSON.stringify(this.questions[this.currentQuestionIndex].options));
    this.checkAnswer(prompt("Javobni kiriting"));
  }
}
// const quiz = new quizGame();
// quiz.addQuestion(
//   "O'zbekiston Poytahti qayer?",
//   { a: "Anqara", b: "Samarqand", c: "Toshkent", d: "Qohira" },
//   "c"
// );
// quiz.addQuestion(
//   "Turkiyaning poytahti qayer?",
//   { a: "Qohira", b: "Istanbul", c: "Anqara", d: "Tabriz" },
//   "c"
// );
// quiz.addQuestion(
//   "2**4 nima bo'ladi?",
//   { a: "5", b: "8", c: "6", d: "16" },
//   "d"
// );
// quiz.addQuestion(
//   "(5,4,3,6,7) sonlarning o'rta arifmetigini toping?",
//   { a: "12", b: "8", c: "5", d: "16" },
//   "c"
// );
// quiz.askQuestion(); // ? bu masala htmlda ishlaydi. 'home3.html'
// ? Masala5 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  End  >_<

// !  ~> & <~      ~> & <~      ~> & <~      ~> & <~      ~> & <~

// ? Masala6 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_< Start >_<
class smartHome {
  constructor() {
    this.qurilmalar = {
      chiroqlar: {
        mehmonXona: { holat: false, yorqinlik: 0 },
        yotoqXona: { holat: false, yorqinlik: 0 },
        oshxona: { holat: false, yorqinlik: 0 },
      },
      iqlim: {
        mehmonXona: { holat: false, temperatura: 23 },
        yotoqXona: { holat: false, temperatura: 23 },
        oshxona: { holat: false, temperatura: 23 },
      },
      xafsizlik: {
        asosiyEshik: { qulif: false },
        derazalar: { qulif: false },
        signalTizimi: { faol: false },
      },
    };
  }
  turnOn(qurilmaTuri, xona) {
    if (this.qurilmalar[qurilmaTuri]) {
      if (qurilmaTuri !== "xafsizlik") {
        if (this.qurilmalar[qurilmaTuri][xona] && qurilmaTuri === "chiroqlar") {
          this.qurilmalar[qurilmaTuri][xona].holat = true;
          this.qurilmalar[qurilmaTuri][xona].yorqinlik = 100;
        } else if (
          this.qurilmalar[qurilmaTuri][xona] &&
          qurilmaTuri === "iqlim"
        ) {
          this.qurilmalar[qurilmaTuri][xona].holat = true;
        }
        console.log(`${xona} ${qurilmaTuri} yoqildi`);
        return true;
      } else {
        if (this.qurilmalar[qurilmaTuri][xona] && xona === "asosiyEshik") {
          this.qurilmalar[qurilmaTuri][xona].qulif = true;
          console.log(`${qurilmaTuri} ${xona} qulifi yoqildi`);
          return true;
        } else if (this.qurilmalar[qurilmaTuri][xona] && xona === "derazalar") {
          this.qurilmalar[qurilmaTuri][xona].qulif = true;
          console.log(`${qurilmaTuri} ${xona} qulifi yoqildi`);
          return true;
        } else if (
          this.qurilmalar[qurilmaTuri][xona] &&
          xona === "signalTizimi"
        ) {
          this.qurilmalar[qurilmaTuri][xona].faol = true;
          console.log(`${qurilmaTuri} ${xona} yoqildi`);
          return true;
        } else {
          console.log(`Xafsizlikni ${xona} bo'limi topilmadi.`);
          return false;
        }
      }
    }
    console.log(`Qurulma topilmadi.`);
    return false;
  }
  turnOff(qurilmaTuri, xona) {
    if (this.qurilmalar[qurilmaTuri]) {
      if (qurilmaTuri !== "xafsizlik") {
        if (this.qurilmalar[qurilmaTuri][xona] && qurilmaTuri === "chiroqlar") {
          this.qurilmalar[qurilmaTuri][xona].holat = false;
          this.qurilmalar[qurilmaTuri][xona].yorqinlik = 0;
        } else if (
          this.qurilmalar[qurilmaTuri][xona] &&
          qurilmaTuri === "iqlim"
        ) {
          this.qurilmalar[qurilmaTuri][xona].holat = false;
        }
        console.log(`${xona} ${qurilmaTuri} o'chirildi`);
        return true;
      } else {
        if (this.qurilmalar[qurilmaTuri][xona] && xona === "asosiyEshik") {
          this.qurilmalar[qurilmaTuri][xona].qulif = false;
          console.log(`${qurilmaTuri} ${xona} qulifi o'chirildi`);
          return true;
        } else if (this.qurilmalar[qurilmaTuri][xona] && xona === "derazalar") {
          this.qurilmalar[qurilmaTuri][xona].qulif = false;
          console.log(`${qurilmaTuri} ${xona} qulifi o'chirildi`);
          return true;
        } else if (
          this.qurilmalar[qurilmaTuri][xona] &&
          xona === "signalTizimi"
        ) {
          this.qurilmalar[qurilmaTuri][xona].faol = false;
          console.log(`${qurilmaTuri} ${xona} o'chirildi`);
          return true;
        } else {
          console.log(`Xafsizlikni ${xona} bo'limi topilmadi.`);
          return false;
        }
      }
    }
    console.log(`Qurulma topilmadi.`);
    return false;
  }
  setTemperature(xona, temperatura) {
    if (this.qurilmalar.iqlim[xona]) {
      this.qurilmalar.iqlim[xona].temperatura = temperatura;
      this.qurilmalar.iqlim[xona].holat = true;
      console.log(`${xona} harorati ${temperatura}°C ga o'rnatildi`);
      return true;
    }
    console.log(`Xona topilmadi`);
    return false;
  }
  getStatus() {
    console.log(`Smart Home Status:`);

    // * chiroqlar holati
    console.log("Chiroqlar:");
    Object.keys(this.qurilmalar.chiroqlar).forEach((room) => {
      console.log(
        ` - ${room}: ${
          this.qurilmalar.chiroqlar[room].holat ? "Yongan" : "O'chgan"
        } (Yorqinlik: ${this.qurilmalar.chiroqlar[room].yorqinlik}%)`
      );
    });

    // * Klimat tizimi holati
    console.log("Klimat tizimi:");
    Object.keys(this.qurilmalar.iqlim).forEach((room) => {
      console.log(
        ` - ${room}: ${
          this.qurilmalar.iqlim[room].holat ? "Yongan" : "O'chgan"
        } (Harorat: ${this.qurilmalar.iqlim[room].temperatura}°C)`
      );
    });

    // * Xafsizlik tizimi holati
    console.log("Xafsizlik tizimi:");
    console.log(
      ` - Eshik: ${
        this.qurilmalar.xafsizlik.asosiyEshik.qulif ? "Qulflangan" : "Ochiq"
      }`
    );
    console.log(
      ` - Derazalar: ${
        this.qurilmalar.xafsizlik.derazalar.qulif ? "Qulflangan" : "Ochiq"
      }`
    );
    console.log(
      ` - Signalizatsiya: ${
        this.qurilmalar.xafsizlik.signalTizimi.faol ? "Faol" : "Nofaol"
      }`
    );
  }
}
// const home = new smartHome();
// home.turnOn('chiroqlar', 'mehmonXona');
// home.turnOn('chiroqlar', 'oshXona');
// home.setTemperature('yotoqXona', 24);
// home.turnOff('chiroqlar', 'mehmonXona');
// home.turnOn("xafsizlik","asosiyEshik")
// home.getStatus();
// ? Masala6 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  End  >_<

// !  ~> & <~      ~> & <~      ~> & <~      ~> & <~      ~> & <~

// ? Masala7 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_< Start >_<
class virtualPet {
  constructor(name) {
    this.name = name;
    this.hunger = false;
    this.energy = 100;
  }
  feed() {
    console.log(`${this.name} is eating.`);
    this.energy += 25;
    if (this.energy > 100) this.energy = 100;
    this.hunger = true;
  }
  play() {
    console.log(`${this.name} is playing.`);
    this.energy -= 20;
    if (this.energy < 0) {
      this.energy = 0;
      this.sleep();
    }
    this.hunger = false;
  }
  sleep() {
    console.log(`${this.name} is sleeping.`);
    this.energy += 30;
    if (this.energy > 100) this.energy = 100;
    this.hunger = false;
  }
  checkStatus() {
    console.log(
      `Name: ${this.name}, Hunger: ${this.hunger}, Energy: ${this.energy}%`
    );
  }
}
// const virtual = new virtualPet("Alex")
// virtual.play()
// virtual.play()
// virtual.play()
// virtual.sleep()
// virtual.checkStatus()
// ? Masala7 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  End  >_<

// !  ~> & <~      ~> & <~      ~> & <~      ~> & <~      ~> & <~

// ? Masala8 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_< Start >_<
class Inventory {
  constructor(capacity = 10) {
    this.items = [];
    this.capacity = capacity;
  }
  addItem(item) {
    if (this.items.length <= this.capacity) {
      this.items.push(item);
      console.log(`${item} inventoryga qo'shildi.`);
      return true;
    } else {
      console.log(`Inventory to'lgan. Yangi element qo'shib bo'lmaydi.`);
    }
  }
  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
      console.log(`${item} inventordan o'chirildi`);
      return true;
    } else {
      console.log(`Inventoryda mavjud emas`);
      return false;
    }
  }
  checkSpace() {
    const remainingSpace = this.capacity - this.items.length;
    console.log(`Inventoryda qolgan joy: ${remainingSpace}`);
    return remainingSpace;
  }
  listItems() {
    if (this.items.length === 0) {
      console.log(`Inventory bo'sh`);
    } else {
      console.log(`Inventorydagi elementlar:`);
      this.items.forEach((value, index) => {
        console.log(`${index + 1}. ${value}`);
      });
      return this.items;
    }
  }
}
// const inventory = new Inventory(5);

// inventory.addItem("Qilich");
// inventory.addItem("Kalkan");
// inventory.addItem("Helm");
// inventory.checkSpace();
// inventory.listItems();
// inventory.removeItem("Kalkan");
// inventory.checkSpace();
// ? Masala8 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  End  >_<

// !  ~> & <~      ~> & <~      ~> & <~      ~> & <~      ~> & <~

// ? Masala9 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_< Start >_<

// ? Masala9 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  End  >_<

// !  ~> & <~      ~> & <~      ~> & <~      ~> & <~      ~> & <~

// ? Masala10 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_< Start >_<
class fitnessCalculate {
  constructor() {
    this.activities = [];
    this.dailyStats = {
      steps: 0,
      calories: 0,
      distance: 0,
    };
    this.WeeklyStats = [];
  }
  addActivity(type, duration) {
    const caloryCalculator = {
      running: 10,
      walking: 5,
      cycling: 8,
      swimming: 12,
    };
    const stepCalculator = {
      running: 120,
      walking: 50,
      cycling: 80,
      swimming: 20,
    };
    const distanceCalculator = {
      running: 0.15, // * km/minute
      walking: 0.08, // * km/minute
      cycling: 0.3, // * km/minute
      swimming: 0.05, // * km/minute
    };
    const caloriesBurned = (caloryCalculator[type] || 0) * duration;
    const steps = (stepCalculator[type] || 0) * duration;
    const distance = (distanceCalculator[type] || 0) * duration;
    const activity = {
      type,
      duration,
      caloriesBurned,
      date: new Date(),
    };
    this.activities.push(activity);

    this.dailyStats.steps = steps;
    this.dailyStats.calories = caloriesBurned;
    this.dailyStats.distance = distance;
  }
  getDailyStats() {}
  getweeklyStats() {}
}
// ? Masala10 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  End  >_<

// !  ~> & <~      ~> & <~      ~> & <~      ~> & <~      ~> & <~

// ? Masala11 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_< Start >_<
class RaceCar {
  constructor() {
    this.tezlik = 0;
    this.yoqilgi = { gaz: 0, benzin: 0 };
    this.pozitsa = 0;
  }
  TezlikniOshirish() {
    if (this.yoqilgi.benzin > 0 || this.yoqilgi.gaz > 0) {
      this.tezlik += 50;
      console.log(`Tezlik: ${this.tezlik} km/h`);
      this.pozitsa += this.tezlik / 10;
      if (this.yoqilgi.benzin > 0) {
        this.yoqilgi.benzin -= this.tezlik / 10;
        if (this.yoqilgi.benzin < 0) this.yoqilgi.benzin = 0;
      } else if (this.yoqilgi.gaz > 0) {
        this.yoqilgi.gaz -= this.tezlik / 10;
        if (this.yoqilgi.gaz < 0) this.yoqilgi.gaz = 0;
      }
      return true;
    }
    console.log(`Yoqilg'i tugadi`);
    return null;
  }
  Tormiz() {
    this.tezlik -= 30;
    if (this.tezlik < 0) {
      this.tezlik = 0;
    }
    console.log(`To'rmiz bosildi`);
  }
  YoqilgiQuyish(type, miqdor) {
    if (this.yoqilgi[type] + 1) {
      if (type === "gaz") {
        this.yoqilgi.gaz += miqdor;
        console.log(`${type} mofaqiyatli quyuldi`);
        return true;
      }
      if (type === "benzin") {
        this.yoqilgi.benzin += miqdor;
        console.log(`${type} mofaqiyatli quyuldi`);
        return true;
      }
    }
    console.log(`Bunday yoqilgi turi yo'q`);
    return false;
  }
  getPozitsa() {
    console.log(`Pozitsa: ${this.pozitsa}`);
  }
}
// const raceCar = new RaceCar();
// raceCar.YoqilgiQuyish("gaz", 100);
// raceCar.TezlikniOshirish();
// raceCar.Tormiz();
// raceCar.getPozitsa();
// ? Masala11 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  End  >_<

// !  ~> & <~      ~> & <~      ~> & <~      ~> & <~      ~> & <~

// ? Masala12 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_< Start >_<
class Diary {
  student = "";
  lessons = {
    subjects: [],
    grades: [],
    gradeAverage: 0,
    attendance: {
      eachLessonAttendance: [],
      percentAttendance: 0,
      totalLessons: 0,
    },
  };
  constructor(student) {
    if (String.toString(student) && student) {
      this.student = student;
      this.lessons = {
        subjects: [],
        grades: [],
        gradeAverage: 0,
        attendance: {
          eachLessonAttendance: [],
          percentAttendance: 0,
          totalLessons: 5,
        },
      };
      return true;
    }
    console.log(`Studentning ismi kiritilmadi`);
    this.student = "";
    return false;
  }
  addGrade(subject, grade, attendance = false) {
    if (this.lessons.subjects.length < this.lessons.attendance.totalLessons) {
      if (attendance === true) {
        this.lessons.subjects.push(subject);
        this.lessons.grades.push(grade);
        this.lessons.attendance.eachLessonAttendance.push(true);
      } else {
        this.lessons.subjects.push(subject);
        this.lessons.grades.push("None");
        this.lessons.attendance.eachLessonAttendance.push(false);
      }
    }
    let attendancedLessons =
      this.lessons.attendance.eachLessonAttendance.filter(
        (value) => value === true
      ).length;
    this.lessons.attendance.percentAttendance =
      (attendancedLessons / this.lessons.attendance.totalLessons) * 100;

    this.lessons.grades.forEach((value, index, array) => {
      this.lessons.gradeAverage += value;
    });
    this.lessons.gradeAverage /= this.lessons.grades.length;
  }
  getReport() {
    console.log(`Student: ${this.student}`);
    this.lessons.subjects.forEach((item, index) => {
      console.log(
        `${index + 1}. Subject: ${item}, Grade: ${
          this.lessons.grades[index]
        }, Attendance: ${this.lessons.attendance.eachLessonAttendance[index]}`
      );
    });
    console.log(
      `Attendance Percentage: ${this.lessons.attendance.percentAttendance}, Total Lesson: ${this.lessons.attendance.totalLessons}, Average Grade: ${this.lessons.gradeAverage}`
    );
  }
}
// const diary = new Diary("Atham");
// diary.addGrade("Math", 4, true);
// diary.addGrade("English", 5, false);
// diary.addGrade("Programming", 4, true);
// diary.getReport();
// ? Masala12 >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  >_<  End  >_<

// * Homework ----------------------------------------------------------  end  --
