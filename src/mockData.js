export const formOptions = {
  price: {
    min: 0,
    default: 1000000,
    max: 10000000,
  },
  city: {
    options: [
      "Тель-авив",
      "Акко",
      "Ариэль",
      "something",
      "somewhere",
      "sometimes",
    ],
  },
  estimateTime: {
    options: [
      "В ближайший месяц",
      "В ближайшие 2 месяц",
      "В ближайшие 3 месяца",
      "В ближайшие 6 месяцев",
    ],
  },
  initialFee: {
    min: "25%",
    default: "50%",
  },
  estateType: {
    options: [
      "Частный дом",
      "Квартира от застройщика",
      "Квартира на вторичном рынке",
      "Частный дом",
      "Земельный участок / Строительство",
      "Коммерческая недвижимость",
    ],
  },
  hasEstate: {
    options: [
      "Да, у меня уже есть недвижимость в собственности",
      "Нет, я пока не владею недвижимостью",
      "Я собираюсь продать единственную недвижимость в ближайшие два года, чтобы использовать полученный капитал для приобретения новой",
      "something",
      "somewhere",
      "sometimes",
    ],
  },
  period: {
    min: 4,
    max: 30,
    default: 30,
    sliderText: (value) => {
      const result = value?.substr(value.length - 1).match(/[1-4]/);
      return result ? "года" : "лет";
    },
  },
  monthlyPayment: {
    default: "min",
    sliderText: "₪",
  },
};
