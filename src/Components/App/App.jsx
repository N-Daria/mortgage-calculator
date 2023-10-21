import "./App.css";
import Button from "../../ui-kit/Button/Button";
import Input from "../../ui-kit/Input/Input";
import Select from "../../ui-kit/Select/Select";
import { formOptions } from "../../mockData";
import React from "react";

export default function App() {
  function handleInputChange() {}

  function countDefault() {}

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
              max={formOptions.price.max}
              min={formOptions.price.min}
              defaultValue={formOptions.defaultValue}
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
              defaultValue={countDefault}
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
              // didn't get it as an interactive element at beginning
              isMessage={true}
              messageText={
                <div>
                  <p className="m-0">
                    Cумма финансирования:
                    <span className="font-semibold">500,000 ₪</span>
                  </p>
                  <p className="m-0">
                    Процент финансирования:
                    <span className="font-semibold">50%</span>
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
            defaultValue={formOptions.period.default}
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
            defaultValue={countDefault}
            header="Ежемесячный платеж"
            max={countDefault}
            min={countDefault}
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
