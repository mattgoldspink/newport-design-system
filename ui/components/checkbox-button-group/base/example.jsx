// Copyright (c) 2015-present, salesforce.com, inc. All rights reserved
// Licensed under BSD 3-Clause - see LICENSE.txt or git.io/sfdc-license

import React from 'react';
import classNames from 'classnames';

/// ////////////////////////////////////////
// Partial(s)
/// ////////////////////////////////////////

let Fieldset = props => (
  <fieldset className={classNames('nds-form-element', props.className)}>
    <legend className="nds-form-element__legend nds-form-element__label">
      Scheduled Day(s)
    </legend>
    <div className="nds-form-element__control">{props.children}</div>
  </fieldset>
);

let CheckboxGroup = props => (
  <div className="nds-checkbox_button-group">{props.children}</div>
);

let Checkbox = props => (
  <span
    className={classNames('nds-button nds-checkbox_button', props.className)}
  >
    <input
      aria-describedby={props.errorId}
      disabled={props.disabled}
      id={props.id}
      name="checkbox"
      type="checkbox"
    />
    <label className="nds-checkbox_button__label" htmlFor={props.id}>
      <span className="nds-checkbox_faux">{props.children}</span>
    </label>
  </span>
);

/// ////////////////////////////////////////
// Export
/// ////////////////////////////////////////

export default (
  <Fieldset>
    <CheckboxGroup>
      <Checkbox id="monday">Mon</Checkbox>
      <Checkbox id="tuesday">Tue</Checkbox>
      <Checkbox id="wednesday">Wed</Checkbox>
      <Checkbox id="thursday">Thu</Checkbox>
      <Checkbox id="friday">Fri</Checkbox>
    </CheckboxGroup>
  </Fieldset>
);

export let states = [
  {
    id: 'has-error',
    label: 'Error',
    element: (
      <Fieldset className="nds-has-error">
        <CheckboxGroup>
          <Checkbox errorId="error_01" id="monday">
            Mon
          </Checkbox>
          <Checkbox errorId="error_01" id="tuesday">
            Tue
          </Checkbox>
          <Checkbox errorId="error_01" id="wednesday">
            Wed
          </Checkbox>
          <Checkbox errorId="error_01" id="thursday">
            Thu
          </Checkbox>
          <Checkbox errorId="error_01" id="friday">
            Fri
          </Checkbox>
        </CheckboxGroup>
        <div id="error_01" className="nds-form-element__help">
          This field is required
        </div>
      </Fieldset>
    )
  },
  {
    id: 'disabled',
    label: 'Disabled',
    element: (
      <Fieldset>
        <CheckboxGroup>
          <Checkbox id="monday" disabled="true">
            Mon
          </Checkbox>
          <Checkbox id="tuesday" disabled="true">
            Tue
          </Checkbox>
          <Checkbox id="wednesday" disabled="true">
            Wed
          </Checkbox>
          <Checkbox id="thursday" disabled="true">
            Thu
          </Checkbox>
          <Checkbox id="friday" disabled="true">
            Fri
          </Checkbox>
        </CheckboxGroup>
      </Fieldset>
    )
  }
];
