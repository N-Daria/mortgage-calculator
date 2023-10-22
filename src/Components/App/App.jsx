import "./App.css";
import Button from "../../ui-kit/Button/Button";
import Input from "../../ui-kit/Input/Input";
import Select from "../../ui-kit/Select/Select";
import { formOptions } from "../../mockData";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateState, resetForm, sendForm } from "../../features/formSlice";
import { useFormik } from "formik";
import { mortgageSchema } from "../../schemas/mortgageSchema";

export default function App() {
  const formData = useSelector((state) => state.formCollection);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(updateState(values));
    dispatch(sendForm(values)).then(() => {
      dispatch(resetForm());

      alert("data has been send");

      countDefaultValues();
    });
  }

  const { values, errors, handleChange, setFieldValue, isValid, touched } =
    useFormik({
      initialValues: formData.formData,
      validationSchema: mortgageSchema,
    });

  const [formMinMaxValues, setFormMinMaxValues] = React.useState({
    monthlyPaymentMin: 0,
    monthlyPaymentMax: 0,
    initialFeeMin: 0,
    initialFeeMax: 0,
    initialFeePercent: 0,
  });

  function countMonthlyPayment(time, price, initialFee) {
    const mortgageRate = 5;

    const mortgageBody = price - initialFee;
    const percents = mortgageRate * mortgageBody * time;
    const periodMonths = time * 12;

    return ((percents + mortgageBody) / periodMonths).toFixed(3);
  }

  function updateFormMinMaxValues(price, initialFee) {
    // 25% of the cost
    const initialFeeMin = price / 4;
    // 100% of the cost
    const initialFeeMax = price;

    const periodYearsMin = formOptions.period.min;
    const periodYearsMax = formOptions.period.max;

    const monthlyPaymentMax = countMonthlyPayment(
      periodYearsMin,
      price,
      initialFee
    );
    const monthlyPaymentMin = countMonthlyPayment(
      periodYearsMax,
      price,
      initialFee
    );

    const initialFeePercent = ((initialFee / price) * 100).toFixed(1);

    setFormMinMaxValues({
      monthlyPaymentMin,
      monthlyPaymentMax,
      initialFeePercent,
      initialFeeMin,
      initialFeeMax,
    });
  }

  function countDefaultValues() {
    const price = formOptions.price.default;
    // 50% of the cost
    const initialFee = price / 2;
    const periodYears = formOptions.period.default;
    const monthlyPayment = countMonthlyPayment(periodYears, price, initialFee);

    updateFormMinMaxValues(price, initialFee);

    setFieldValue("price", price, true);
    setFieldValue("initialFee", initialFee, true);
    setFieldValue("period", periodYears, true);
    setFieldValue("monthlyPayment", monthlyPayment, true);
    setFieldValue("city", "", true);
    setFieldValue("estimateTime", "", true);
    setFieldValue("estateType", "", true);
    setFieldValue("hasEstate", "", true);
  }

  function countChangedPrice() {
    const price = values.price;
    const initialFee = values.initialFee;

    const monthlyPayment = countMonthlyPayment(
      values.period,
      price,
      initialFee
    );

    setFieldValue("monthlyPayment", monthlyPayment, true);
    updateFormMinMaxValues(price, initialFee);
  }

  function countChangedInitialFee() {
    const price = values.price;
    const initialFee = values.initialFee;

    const periodYears = formOptions.period.default;
    const monthlyPayment = countMonthlyPayment(periodYears, price, initialFee);
    updateFormMinMaxValues(price, initialFee);

    setFieldValue("monthlyPayment", monthlyPayment, true);
  }

  function countChangedPeriod() {
    const price = values.price;
    const initialFee = values.initialFee;
    const periodYears = values.period;

    const monthlyPayment = countMonthlyPayment(periodYears, price, initialFee);

    updateFormMinMaxValues(price, initialFee);

    setFieldValue("monthlyPayment", monthlyPayment, true);
  }

  function countChangedMonthlyPayment() {}

  useEffect(() => {
    countDefaultValues();
  }, []);

  useEffect(() => {
    values.price && countChangedPrice();
  }, [values.price]);

  useEffect(() => {
    values.initialFee && countChangedInitialFee();
  }, [values.initialFee]);

  useEffect(() => {
    values.period && countChangedPeriod();
  }, [values.period]);

  useEffect(() => {
    values.monthlyPayment && countChangedMonthlyPayment();
  }, [values.monthlyPayment]);

  return (
    <div className="app w-full bg-themeColor mx-auto px-[60px]">
      <form
        onSubmit={handleSubmit}
        className="form text-white pt-120 w-full flex flex-wrap gap-8 mx-auto max-w-mainContentM tablet:max-w-mainContentT desktop:max-w-mainContentD"
      >
        <h1 className="form__header tablet:text-5xl">
          Рассчитайте ипотеку быстро и просто
        </h1>

        <fieldset className="flex flex-wrap gap-8 tablet:w-full">
          <div className="flex gap-8 flex-wrap tablet:gap-y-[23px] tablet:gap-x-[68px] w-full desktop:gap-x-[77px]">
            <Input
              id="price"
              max={formOptions.price.max}
              min={formOptions.price.min}
              header="Стоимость недвижимости"
              inputName
              isIconCurrency={true}
              // onChange={setPrice}
              styles=""
              onChange={handleChange}
              defaultValue={values.price}
              value={values.price}
              isError={errors.price}
              errorText={errors.price}
            />

            <Select
              id="city"
              placeholder="Выберите ответ"
              header="Город покупки недвижимости"
              onChange={setFieldValue}
              options={formOptions.city.options}
              isSearch={true}
              styles="hidden tablet:block"
              isError={touched.city && errors.city}
              errorText={errors.city}
              value={values.city}
            />

            <Select
              id="estimateTime"
              placeholder="Выберите период"
              header="Когда вы планируете оформить ипотеку?"
              onChange={setFieldValue}
              options={formOptions.estimateTime.options}
              styles=""
              isError={touched.estimateTime && errors.estimateTime}
              errorText={errors.city}
              value={values.estimateTime}
            />
          </div>

          <div className="flex gap-8 flex-wrap tablet:gap-y-[23px] tablet:gap-x-[68px] w-full desktop:gap-x-[77px]">
            <Input
              id="initialFee"
              defaultValue={values.initialFee}
              value={values.initialFee}
              min={formMinMaxValues.initialFeeMin}
              max={formMinMaxValues.initialFeeMax}
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
              sliderOnChange={setFieldValue}
              isMessage={true}
              messageText={
                <div>
                  <p className="m-0">
                    Cумма финансирования:
                    <span className="font-semibold">
                      {values.price - values.initialFee}₪
                    </span>
                  </p>
                  <p className="m-0">
                    Процент финансирования:
                    <span className="font-semibold">
                      {formMinMaxValues.initialFeePercent}%
                    </span>
                  </p>
                </div>
              }
              onChange={handleChange}
              isError={errors.initialFee}
              errorText={errors.initialFee}
              styles=""
            />

            <Select
              id="estateType"
              placeholder="Выберите тип недвижимости"
              header="Тип недвижимости"
              onChange={setFieldValue}
              options={formOptions.estateType.options}
              styles=""
              isError={touched.estateType && errors.estateType}
              errorText={errors.estateType}
              value={values.estateType}
            />

            <Select
              id="hasEstate"
              placeholder="Выберите ответ"
              header="Вы уже владеете недвижимостью?"
              onChange={setFieldValue}
              options={formOptions.hasEstate.options}
              styles=""
              isError={touched.hasEstate && errors.hasEstate}
              errorText={errors.hasEstate}
              value={values.hasEstate}
            />
          </div>
        </fieldset>

        <fieldset className="form__fieldset w-full flex flex-wrap gap-8 tablet:gap-y-[23px] tablet:gap-x-[68px] tablet:pt-[24px] desktop:pt-0 relative">
          <Input
            id="period"
            defaultValue={values.period}
            value={values.period}
            header="Срок ипотеки"
            max={formOptions.period.max}
            min={formOptions.period.min}
            isSlider={true}
            sliderOnChange={setFieldValue}
            sliderText={formOptions.period.sliderText}
            onChange={handleChange}
            isError={errors.period}
            errorText={errors.period}
          />

          <Input
            id="monthlyPayment"
            defaultValue={values.monthlyPayment}
            value={values.monthlyPayment}
            header="Ежемесячный платеж"
            max={formMinMaxValues.monthlyPaymentMax}
            min={formMinMaxValues.monthlyPaymentMin}
            isIconCurrency={true}
            isMessage={true}
            messageText="Увеличьте ежемесячный платеж и переплачивайте меньше"
            isSlider={true}
            sliderOnChange={setFieldValue}
            sliderText={formOptions.monthlyPayment.sliderText}
            onChange={handleChange}
            isError={errors.monthlyPayment}
            errorText={errors.monthlyPayment}
          />
        </fieldset>

        <div className="w-full form__button-block bg-secondaryColor tablet:bg-inherit pb-6">
          <Button
            textButton="Продолжить"
            isDisabled={!isValid || formData.loading}
          />
        </div>
      </form>
    </div>
  );
}
