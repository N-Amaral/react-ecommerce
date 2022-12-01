import { Box, useMediaQuery, TextField } from "@mui/material";
import { getIn } from "formik";

const AddressForm = ({ type, values, errors, touched, handleBlur, handleChange }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const textFieldVariables = [
    { label: "First Name", value: "firstName", gridColumn: "span 2" },
    { label: "Last Name", value: "lastName", gridColumn: "span 2" },
    { label: "Country", value: "country", gridColumn: "span 4" },
    { label: "Street Address", value: "street1", gridColumn: "span 2" },
    { label: "Street Address 2 (optional)", value: "street2", gridColumn: "span 2" },
    { label: "City", value: "city", gridColumn: "span 2" },
    { label: "State", value: "state", gridColumn: "1fr" },
    { label: "Zip Code", value: "zipCode", gridColumn: "1fr" },
  ];
  // these functions allow for better code readability
  const formattedName = (field) => `${type}.${field}`;

  //checks if there's even an error
  const formattedError = (field) => Boolean(getIn(touched, formattedName(field)) && getIn(errors, formattedName(field)));
  // shows the error iself
  const formattedHelper = (field) => getIn(touched, formattedName(field)) && getIn(errors, formattedName(field));

  return (
    <Box
      display="grid"
      gap="15px"
      gridTemplateColumns="repeat(4,minmax(0,1fr))"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
      }}
    >
      {textFieldVariables.map((element, i) => (
        <TextField
          key={`${element.value}-${i}`}
          fullWidth
          type="text"
          label={element.label}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values[`${element.value}`]}
          name={formattedName(`${element.value}`)}
          error={formattedError(`${element.value}`)}
          helperText={formattedHelper(`${element.value}`)}
          sx={{ gridColumn: `${element.gridColumn}` }}
        />
      ))}
    </Box>
  );
};

export default AddressForm;
