// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';
import SvgIcon from '../../../shared/svg-icon';
import { Input } from '../../input/base/example';
import { Textarea } from '../../textarea/base/example';
import { Checkbox } from '../../checkbox/base/example';
import { Radio } from '../../radio-group/base/example';

const inputLabel = 'Form Element Label';
const inputId = 'input-unique-id';
const errorId = 'error-message-unique-id';

export let FormElement = props => {
  const {
    className,
    formControlClassName,
    required,
    label,
    hideLabel,
    inputId,
    inputIcon,
    errorId,
    tooltip,
    message,
    role,
    dropdown,
    children,
    ...rest
  } = props;

  let inputIconPosition;
  if (inputIcon === 'left') {
    inputIconPosition = 'nds-input-has-icon nds-input-has-icon_left';
  } else if (inputIcon === 'right') {
    inputIconPosition = 'nds-input-has-icon nds-input-has-icon_right';
  } else if (inputIcon === 'both') {
    inputIconPosition = 'nds-input-has-icon nds-input-has-icon_left-right';
  }

  return (
    <div
      {...rest}
      className={classNames('nds-form-element', className)}
      role={role}
    >
      {label ? (
        <label
          className={classNames('nds-form-element__label', {
            'nds-assistive-text': hideLabel
          })}
          htmlFor={inputId}
        >
          {required ? (
            <abbr className="nds-required" title="required">
              *
            </abbr>
          ) : null}
          {label}
        </label>
      ) : null}
      {tooltip ? (
        <div className="nds-form-element__icon">
          <button
            aria-describedby="help"
            className="nds-button nds-button_icon"
          >
            <SvgIcon
              className="nds-icon nds-icon_x-small nds-icon-text-default"
              sprite="utility"
              symbol="info"
            />
            <span className="nds-assistive-text">Help</span>
          </button>
        </div>
      ) : null}
      <div
        className={classNames(
          'nds-form-element__control',
          inputIconPosition,
          formControlClassName
        )}
      >
        {children}
      </div>
      {message ? (
        <div className="nds-form-element__help" id={errorId}>
          {message}
        </div>
      ) : null}
      {dropdown || null}
    </div>
  );
};

export default (
  <FormElement label={inputLabel} inputId={inputId}>
    <Input id={inputId} />
  </FormElement>
);

export let states = [
  {
    id: 'required',
    label: 'Required',
    element: (
      <FormElement label={inputLabel} inputId={inputId} required>
        <Input id={inputId} required />
      </FormElement>
    )
  },
  {
    id: 'error',
    label: 'Error',
    element: (
      <FormElement
        className="nds-has-error"
        label={inputLabel}
        inputId={inputId}
        errorId={errorId}
        required
        message="This field is required"
      >
        <Input id={inputId} required aria-describedby={errorId} />
      </FormElement>
    )
  }
];

export let examples = [
  {
    id: 'input',
    label: 'Input',
    element: (
      <FormElement label={inputLabel} inputId={inputId}>
        <Input id={inputId} />
      </FormElement>
    )
  },
  {
    id: 'textarea',
    label: 'Textarea',
    element: (
      <FormElement label={inputLabel} inputId={inputId}>
        <Textarea id={inputId} />
      </FormElement>
    )
  },
  {
    id: 'checkbox',
    label: 'Checkbox',
    element: (
      <FormElement>
        <Checkbox label="Checkbox Label" />
      </FormElement>
    )
  },
  {
    id: 'radio-group',
    label: 'Radio Group',
    element: (
      <fieldset className="nds-form-element">
        <legend className="nds-form-element__legend nds-form-element__label">
          Form Element Label
        </legend>
        <div className="nds-form-element__control">
          <Radio checked label="Radio Label One" />
          <Radio label="Radio Label Two" />
        </div>
      </fieldset>
    )
  },
  {
    id: 'inline-help',
    label: 'Inline Help',
    element: (
      <FormElement
        label={inputLabel}
        inputId={inputId}
        message="ex: (415)111-2222"
      >
        <Input id={inputId} />
      </FormElement>
    )
  },
  {
    id: 'tooltip-help',
    label: 'Tooltip Help',
    element: (
      <FormElement label={inputLabel} inputId={inputId} tooltip>
        <Input id={inputId} />
      </FormElement>
    )
  }
];
