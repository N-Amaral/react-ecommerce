import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
  const {
    palette: { neutral },
  } = useTheme();

  const textContent = {
    0: ["Careers", "Our Stores", "Terms & Conditions", "Privacy Policy"],
    1: ["Help Center", "Track Your Order", "Corporate & Bulk Purchasing", "Returns & Refunds"],
    2: ["50 North Elsewhere Blvd, Washington, DC 10501", "Email: thisisafakeaccount@mail.com", "(222)333-4444"],
  };
  return (
    <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
      <Box width="80%" margin="auto" display="flex" justifyContent="space-between" flexWrap="wrap" rowGap="30px" columnGap="clamp(20px,30px,40px)">
        <Box width="clamp(20%,30%,40%)">
          <Typography variant="h4" fontWeight="bold" color={shades.secondary[500]}>
            ECOMMERCE
          </Typography>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tmepor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </div>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            About Us
          </Typography>
          {textContent[0].map((el, i) => {
            return (
              <Typography mb="30px" key={i} sx={{ "&:hover": { color: "red", cursor: "pointer" } }}>
                {el}
              </Typography>
            );
          })}
        </Box>
        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          {textContent[1].map((el, i) => {
            return (
              <Typography mb="30px" key={i} sx={{ "&:hover": { color: "red", cursor: "pointer" } }}>
                {el}
              </Typography>
            );
          })}
        </Box>
        <Box width="clamp(20%,25%,30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px">
            Customer Care
          </Typography>
          {textContent[2].map((el, i) => {
            return (
              <Typography mb="30px" key={i}>
                {el}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
