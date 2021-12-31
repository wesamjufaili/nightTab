import { language } from '../../language';

import { Button } from '../button';

import { Control_text } from '../control/text';

import { node } from '../../utility/node';
import { randomString } from '../../utility/randomString';
import { randomNumber } from '../../utility/randomNumber';

export const CustomThemeForm = function({
  customThemeData = false
} = {}) {

  this.element = {
    form: node('form|class:theme-custom-form'),
    main: node('div|class:theme-custom-form-main'),
    text: new Control_text({
      object: customThemeData.theme,
      path: 'name',
      id: 'name',
      value: customThemeData.theme.name,
      placeholder: language.current.theme.custom.form.name.placeholder,
      labelText: language.current.theme.custom.form.name.label
    }),
    randomName: new Button({
      text: language.current.theme.custom.form.random,
      style: ['line'],
      func: () => {
        customThemeData.theme.name = randomString({ adjectivesCount: randomNumber(1, 3) });
        this.element.text.update();
      }
    })
  };

  this.assemble = () => {

    this.element.main.appendChild(this.element.text.wrap());

    this.element.main.appendChild(this.element.randomName.wrap());

    this.element.form.appendChild(this.element.main);

  };

  this.form = () => {

    return this.element.form;

  };

  this.assemble();

};