import * as Yup from "yup";

export const mortgageSchema = Yup.object().shape({
  price: Yup.number()
    .positive("Должно быть больше 0")
    .required("Выберите значение")
    .max(10000000, "Стоимость недвижимости не может превышать 10,000,000"),
  initialFee: Yup.number()
    .required("Выберите значение")
    .max(
      10000000,
      "Стоимость недвижимости не может быть больше 100% от стоимости недвижимости"
    )
    .min(
      100,
      "Сумма первоначального взноса не может быть меньше 25% от стоимости недвижимости"
    ),
  period: Yup.number()
    .required("Выберите значение")
    .max(30, "Cрок ипотеки не может превышать 30 лет")
    .min(4, "Cрок ипотеки не может быть меньше 4 лет"),
  monthlyPayment: Yup.number()
    .positive("Должно быть больше 0")
    .min(
      1,
      "Размер ежемесячного платежа не может быть меньше иначе срок будет больше 30 лет"
    )
    .required("Выберите значение"),
  city: Yup.string().required("Выберите ответ"),
  estimateTime: Yup.string().required("Выберите ответ"),
  estateType: Yup.string().required("Выберите ответ"),
  hasEstate: Yup.string().required("Выберите ответ"),
});
