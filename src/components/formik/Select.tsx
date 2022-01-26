import { MenuItem, TextField } from "@mui/material";
import { Field } from "formik";

const Select = (props: { [x: string]: any }) => {
  const { label, name, options, ...rest } = props;

  return (
    <Field name={name}>
      {({ field, form }: any) => {
        return (
          <TextField
            fullWidth
            {...rest}
            {...field}
            id={name}
            label={label}
            variant="outlined"
            error={form.errors[name] && form.touched[name]}
            helperText={form.touched[name] && form.errors[name]}
            select
          >
            {options?.map((option: any) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        );
      }}
    </Field>
  );
};

export default Select;
