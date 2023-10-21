import "./App.css";
import Button from "../../ui-kit/Button/Button";
import Input from "../../ui-kit/Input/Input";
import Select from "../../ui-kit/Select/Select";
import { formOptions } from "../../mockData";
import React, { useEffect } from "react";

export default function App() {
  const [formValues, setFormValues] = React.useState({
    price: 0,
    monthlyPayment: 0,
    monthlyPaymentMin: 0,
    monthlyPaymentMax: 0,
    initialFee: 0,
    initialFeeMin: 0,
    initialFeeMax: 0,
    initialFeePercent: 0,
    period: 0,
  });

  function handleInputChange() {}

  function countDefaultValues() {
    const price = formOptions.price.default;
    // 50% of the cost
    const initialFee = price / 2;
    const periodYears = formOptions.period.default;
    const periodYearsMin = formOptions.period.min;
    const periodYearsMax = formOptions.period.max;
    const mortgageRate = 5;

    const monthlyPayment = countMonthlyPayment(periodYears).toFixed(3);
    const monthlyPaymentMax = countMonthlyPayment(periodYearsMin).toFixed(3);
    const monthlyPaymentMin = countMonthlyPayment(periodYearsMax).toFixed(3);

    function countMonthlyPayment(time) {
      const percents = mortgageRate * (price - initialFee) * time;
      const mortgageBody = price - initialFee;
      const periodMonths = time * 12;

      return (percents + mortgageBody) / periodMonths;
    }

    //  periodMonths = (percents + mortgageBody) * monthlyPayment;

    // 25% of the cost
    const initialFeeMin = price / 4;
    // 97% of the cost
    const initialFeeMax = price * 0.97;
    const initialFeePercent = formOptions.initialFee.default;

    setFormValues({
      price,
      monthlyPayment,
      monthlyPaymentMin,
      monthlyPaymentMax,
      initialFee,
      initialFeePercent,
      initialFeeMin,
      initialFeeMax,
      period: periodYears,
    });

    // проценты всего = ставка * (стоимость недвижимости - первоначальный взнос) * срок
    // тело кредита = (стоимость недвижимости - первоначальный взнос)
    // время = ( срок * 12 )

    //  ( процент + тело ) / время
  }

  useEffect(() => {
    countDefaultValues();
  }, []);

  return (
    <div className="app w-full bg-themeColor mx-auto px-[60px]">
      <form className="form text-white pt-120 w-full flex flex-wrap gap-8 mx-auto max-w-mainContentM tablet:max-w-mainContentT desktop:max-w-mainContentD">
        <h1 className="form__header tablet:text-5xl">
          Рассчитайте ипотеку быстро и просто
        </h1>

        <fieldset className="flex flex-wrap gap-8 tablet:w-full">
          <div className="flex gap-8 flex-wrap tablet:gap-y-[23px] tablet:gap-x-[68px] w-full desktop:gap-x-[77px]">
            <Input
              id="price"
              max={formOptions?.price.max}
              min={formOptions?.price.min}
              defaultValue={formValues?.price}
              header="Стоимость недвижимости"
              inputName
              isIconCurrency={true}
              onChange={handleInputChange}
              errorText="Стоимость недвижимости не может превышать 10,000,000"
              styles=""
            />

            <Select
              id="city"
              placeholder="Выберите ответ"
              header="Город покупки недвижимости"
              errorText="Выберите ответ"
              onChange={handleInputChange}
              options={formOptions.city.options}
              isSearch={true}
              styles="hidden tablet:block"
            />

            <Select
              id="estimateTime"
              placeholder="Выберите период"
              header="Когда вы планируете оформить ипотеку?"
              errorText="Выберите ответ"
              onChange={handleInputChange}
              options={formOptions.estimateTime.options}
              styles=""
            />
          </div>

          <div className="flex gap-8 flex-wrap tablet:gap-y-[23px] tablet:gap-x-[68px] w-full desktop:gap-x-[77px]">
            <Input
              id="initialFee"
              defaultValue={formValues.initialFee}
              min={formValues.initialFeeMin}
              max={formValues.initialFeeMax}
              header="Первоначальный взнос"
              isIconCurrency={true}
              isTooltip={true}
              tooltipText={
                <div>
                  <p>
                    Основная квартира: у заемщика нет квартиры ставка
                    финансирования
                    <br />
                    <span className="font-medium">Максимум до 75%</span>
                  </p>
                  <br />
                  <p>
                    Альтернативная квартира: Для заемщика квартира, которую он
                    обязуется продать в течение двух лет ставка финансирования
                    <br /> <span className="font-medium">Максимум до 70% </span>
                  </p>
                  <br />
                  <p>
                    Вторая квартира или выше: у заемщика уже есть ставка
                    финансирования квартиры
                    <br />
                    <span className="font-medium"> Максимум до 50%</span>
                  </p>
                </div>
              }
              isSlider={true}
              isMessage={true}
              messageText={
                <div>
                  <p className="m-0">
                    Cумма финансирования:
                    <span className="font-semibold">
                      {formValues.initialFee}₪
                    </span>
                  </p>
                  <p className="m-0">
                    Процент финансирования:
                    <span className="font-semibold">
                      {formValues.initialFeePercent}%
                    </span>
                  </p>
                </div>
              }
              onChange={handleInputChange}
              errorText="Сумма первоначального взноса не может быть меньше 25% от стоимости недвижимости"
              styles=""
            />

            <Select
              id="estateType"
              placeholder="Выберите тип недвижимости"
              header="Тип недвижимости"
              errorText="Выберите ответ"
              onChange={handleInputChange}
              options={formOptions.estateType.options}
              styles=""
            />

            <Select
              id="hasEstate"
              placeholder="Выберите ответ"
              header="Вы уже владеете недвижимостью?"
              errorText="Выберите ответ"
              onChange={handleInputChange}
              options={formOptions.hasEstate.options}
              styles=""
            />
          </div>
        </fieldset>

        <fieldset className="form__fieldset w-full flex flex-wrap gap-8 tablet:gap-y-[23px] tablet:gap-x-[68px] tablet:pt-[24px] desktop:pt-0 relative">
          <Input
            id="period"
            defaultValue={formValues.period}
            header="Срок ипотеки"
            max={formOptions.period.max}
            min={formOptions.period.min}
            isSlider={true}
            sliderText={formOptions.period.sliderText}
            errorText="Cрок ипотеки не может превышать 30 лет"
            onChange={handleInputChange}
          />

          <Input
            id="monthlyPayment"
            defaultValue={formValues.monthlyPayment}
            header="Ежемесячный платеж"
            max={formValues.monthlyPaymentMax}
            min={formValues.monthlyPaymentMin}
            isIconCurrency={true}
            isMessage={true}
            messageText="Увеличьте ежемесячный платеж и переплачивайте меньше"
            isSlider={true}
            sliderText={formOptions.monthlyPayment.sliderText}
            errorText={`Размер ежемесячного платежа не может быть меньше ${""} иначе ${"срок будет больше 30 лет"}`}
            onChange={handleInputChange}
          />
        </fieldset>

        <div className="w-full form__button-block bg-secondaryColor tablet:bg-inherit pb-6">
          <Button textButton="Продолжить" isDisabled={true} />
        </div>
      </form>
    </div>
  );
}
