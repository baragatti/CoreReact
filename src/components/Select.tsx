import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
} from '@material-ui/core';

interface SelectProps<T> {
  placeholder: string;
  list: T[];
  value: T;
  keyHandler: (value: T) => string;
  descriptionHandler: (value: T) => string;
  onChange: (value: T) => void;
}

const Select = function <T>(props: SelectProps<T>) {
  const {
    placeholder,
    list,
    value,
    keyHandler,
    descriptionHandler,
    onChange,
  } = props;

  return (
    <FormControl style={{width: '100%'}}>
      <InputLabel>{placeholder}</InputLabel>
      <MuiSelect
        value={keyHandler(value)}
        onChange={(event) => {
          onChange(list.find((item: T) => keyHandler(item) === event.target.value));
        }}
      >
        {list.map((item: T) => {
          const key = keyHandler(item);

          return (
            <MenuItem
              key={key}
              value={key}
            >
              {descriptionHandler(item)}
            </MenuItem>
          );
        })}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
