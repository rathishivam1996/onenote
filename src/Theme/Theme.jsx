import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const token = {
  __md_source: "#6750A4;",
  /* primary --md-ref-palette- */
  white: "#ffffff",
  black: "#000000",
  source: {
    seed: "#6750A4",
    primary: "#6750A4",
    secondary: "#625B71",
    tertiary: "#7D5260",
    neutral: "#605D62",
    neutralVariant: "#605D66",
    error: "#B3261E",
  },
  palette: {
    primary0: "#000000;",
    primary10: "#21005D",
    primary20: "#381E72",
    primary30: "#4F378B",
    primary40: "#6750A4",
    primary50: "#7F67BE",
    primary60: "#9A82DB",
    primary70: "#B69DF8",
    primary80: "#D0BCFF",
    primary90: "#EADDFF",
    primary95: "#F6EDFF",
    primary99: "#FFFBFE",
    primary100: "#FFFFFF",
    /* secondary */
    secondary0: "#000000",
    secondary10: "#1D192B",
    secondary20: "#332D41",
    secondary30: "#4A4458",
    secondary40: "#625B71",
    secondary50: "#7A7289",
    secondary60: "#958DA5",
    secondary70: "#B0A7C0",
    secondary80: "#CCC2DC",
    secondary90: "#E8DEF8",
    secondary95: "#F6EDFF",
    secondary99: "#FFFBFE",
    secondary100: "#FFFFFF",
    /* tertiary */
    tertiary0: "#000000",
    tertiary10: "#31111D",
    tertiary20: "#492532",
    tertiary30: "#633B48",
    tertiary40: "#7D5260",
    tertiary50: "#986977",
    tertiary60: "#B58392",
    tertiary70: "#D29DAC",
    tertiary80: "#EFB8C8",
    tertiary90: "#FFD8E4",
    tertiary95: "#FFECF1",
    tertiary99: "#FFFBFA",
    tertiary100: "#FFFFFF",
    /* error */
    error0: "#000000",
    error10: "#410E0B",
    error20: "#601410",
    error30: "#8C1D18",
    error40: "#B3261E",
    error50: "#DC362E",
    error60: "#E46962",
    error70: "#EC928E",
    error80: "#F2B8B5",
    error90: "#F9DEDC",
    error95: "#FCEEEE",
    error99: "#FFFBF9",
    error100: "#FFFFFF",
    /* neutral */

    neutral0: "#000000",
    neutral10: "#1C1B1F",
    neutral20: "#313033",
    neutral30: "#484649",
    neutral40: "#605D62",
    neutral50: "#787579",
    neutral60: "#939094",
    neutral70: "#AEAAAE",
    neutral80: "#C9C5CA",
    neutral90: "#E6E1E5",
    neutral95: "#F4EFF4",
    neutral99: "#FFFBFE",
    neutral100: "#FFFFFF",
    /* neutral_variant */
    neutral_variant0: "#000000",
    neutral_variant10: "#1D1A22",
    neutral_variant20: "#322F37",
    neutral_variant30: "#49454F",
    neutral_variant40: "#605D66",
    neutral_variant50: "#79747E",
    neutral_variant60: "#938F99",
    neutral_variant70: "#AEA9B4",
    neutral_variant80: "#CAC4D0",
    neutral_variant90: "#E7E0EC",
    neutral_variant95: "#F5EEFA",
    neutral_variant99: "#FFFBFE",
    neutral_variant100: "#FFFFFF",
  },

  /* typescale */
  typescale: {
    display: {
      /* __md_sys_typescale_ */
      large: {
        /* display _ large  */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "400",
        font_size: "57px",
        line_height: "64px",
        letter_spacing: "_0.25px",
      },
      medium: {
        /* display _ medium */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "400",
        font_size: "45px",
        line_height: "52px",
        letter_spacing: "0px",
      },
      small: {
        /* display _ small */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "400",
        font_size: "36px",
        line_height: "44px",
        letter_spacing: "0px",
      },
    },
    headline: {
      large: {
        /* headline _ large */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "400",
        font_size: "32px",
        line_height: "40px",
        letter_spacing: "0px",
      },
      medium: {
        /* headline _ medium */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "400",
        font_size: "28px",
        line_height: "36px",
        letter_spacing: "0px",
      },
      small: {
        /* headline _ small */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "400",
        font_size: "24px",
        line_height: "32px",
        letter_spacing: "0px",
      },
    },
    body: {
      large: {
        /* body _ large */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "400",
        font_size: "16px",
        line_height: "24px",
        letter_spacing: "0.50px",
      },
      medium: {
        /* body _ medium */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "400",
        font_size: "14px",
        line_height: "20px",
        letter_spacing: "0.25px",
      },
      small: {
        /* body _ small */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "400",
        font_size: "12px",
        line_height: "16px",
        letter_spacing: "0.40px",
      },
    },
    label: {
      large: {
        /* label _ large */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "500",
        font_size: "14px",
        line_height: "20px",
        letter_spacing: "0.10px",
      },
      medium: {
        /* label _ medium */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "500",
        font_size: "12px",
        line_height: "16px",
        letter_spacing: "0.50px",
      },
      small: {
        /* label _ small */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "500",
        font_size: "11px",
        line_height: "16px",
        letter_spacing: "0.50px",
      },
    },
    title: {
      large: {
        /* title _ large */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "400",
        font_size: "22px",
        line_height: "28px",
        letter_spacing: "0px",
      },
      medium: {
        /* title _ medium */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "500",
        font_size: "16px",
        line_height: "24px",
        letter_spacing: "0.15px",
      },
      small: {
        /* title _ small */
        font_family: "Roboto",
        font_style: "normal",
        font_weight: "500",
        font_size: "14px",
        line_height: "20px",
        letter_spacing: "0.10px",
      },
    },
  },
  sys: {
    /* light */
    light: {
      primary_light: "#6750A4",
      on_primary_light: "#FFFFFF",
      primary_container_light: "#EADDFF",
      on_primary_container_light: "#21005D",
      secondary_light: "#625B71",
      on_secondary_light: "#FFFFFF",
      secondary_container_light: "#E8DEF8",
      on_secondary_container_light: "#1D192B",
      tertiary_light: "#7D5260",
      on_tertiary_light: "#FFFFFF",
      tertiary_container_light: "#FFD8E4",
      on_tertiary_container_light: "#31111D",
      error_light: "#B3261E",
      on_error_light: "#FFFFFF",
      error_container_light: "#F9DEDC",
      on_error_container_light: "#410E0B",
      outline_light: "#79747E",
      background_light: "#FFFBFE",
      on_background_light: "#1C1B1F",
      surface_light: "#FFFBFE",
      on_surface_light: "#1C1B1F",
      surface_variant_light: "#E7E0EC",
      on_surface_variant_light: "#49454F",
      inverse_surface_light: "#313033",
      inverse_on_surface_light: "#F4EFF4",
      inverse_primary_light: "#D0BCFF",
      shadow_light: "#000000",
      surface_tint_light: "#6750A4",
      outline_variant_light: "#CAC4D0",
      scrim_light: "#000000",
    },
    /* dark */
    dark: {
      primary_dark: "#D0BCFF",
      on_primary_dark: "#381E72",
      primary_container_dark: "#4F378B",
      on_primary_container_dark: "#EADDFF",
      secondary_dark: "#CCC2DC",
      on_secondary_dark: "#332D41",
      secondary_container_dark: "#4A4458",
      on_secondary_container_dark: "#E8DEF8",
      tertiary_dark: "#EFB8C8",
      on_tertiary_dark: "#492532",
      tertiary_container_dark: "#633B48",
      on_tertiary_container_dark: "#FFD8E4",
      error_dark: "#F2B8B5",
      on_error_dark: "#601410",
      error_container_dark: "#8C1D18",
      on_error_container_dark: "#F9DEDC",
      outline_dark: "#938F99",
      background_dark: "#1C1B1F",
      on_background_dark: "#E6E1E5",
      surface_dark: "#1C1B1F",
      on_surface_dark: "#E6E1E5",
      surface_variant_dark: "#49454F",
      on_surface_variant_dark: "#CAC4D0",
      inverse_surface_dark: "#E6E1E5",
      inverse_on_surface_dark: "#313033",
      inverse_primary_dark: "#6750A4",
      shadow_dark: "#000000",
      surface_tint_dark: "#D0BCFF",
      outline_variant_dark: "#49454F",
      scrim_dark: "#000000",
    },
  },
  surfaces: {
    light: {
      surface1: {
        surface: "rgba(255, 251, 254, 1)",
        overlay: "rgba(103, 80, 164, 0.05)",
      },
      surface2: {
        surface: "rgba(255, 251, 254, 1)",
        overlay: "rgba(103, 80, 164, 0.08)",
      },
      surface3: {
        surface: "rgba(255, 251, 254, 1)",
        overlay: "rgba(103, 80, 164, 0.11)",
      },
      surface4: {
        surface: "rgba(255, 251, 254, 1)",
        overlay: "rgba(103, 80, 164, 0.12)",
      },
      surface5: {
        surface: "rgba(255, 251, 254, 1)",
        overlay: "rgba(103, 80, 164, 0.14)",
      },
    },
    dark: {
      surface1: {
        surface: "rgba(28, 27, 31, 1)",
        overlay: "rgba(208, 188, 255, 0.05)",
      },
      surface2: {
        surface: "rgba(28, 27, 31, 1)",
        overlay: "rgba(208, 188, 255, 0.08)",
      },
      surface3: {
        surface: "rgba(28, 27, 31, 1)",
        overlay: "rgba(208, 188, 255, 0.11)",
      },
      surface4: {
        surface: "rgba(28, 27, 31, 1)",
        overlay: "rgba(208, 188, 255, 0.12)",
      },
      surface5: {
        surface: "rgba(28, 27, 31, 1)",
        overlay: "rgba(208, 188, 255, 0.14)",
      },
    },
  },
  elevation: {
    levelToDpMap: {
      // TODO: pull the keys from tokens
      0: 0,
      1: 1,
      2: 3,
      3: 6,
      4: 8,
      5: 12,
    },
    levelToOpacityMap: {
      1: 0.05,
      2: 0.08,
      3: 0.11,
      4: 0.12,
      5: 0.14,
    },
    key_opacity: 0.3,
    ambiant_opacity: 0.15,
    shadow_map: {
      0: { key: "0px 0px 0px 0px", ambient: "0px 0px 0px 0px" },
      1: { key: "0px 1px 2px 0px", ambient: "0px 1px 3px 1px" },
      2: { key: "0px 1px 2px 0px", ambient: "0px 2px 6px 2px" },
      3: { key: "0px 1px 3px 0px", ambient: "0px 4px 8px 3px" },
      4: { key: "0px 2px 3px 0px", ambient: "0px 6px 10px 4px" },
      5: { key: "0px 4px 4px 0px", ambient: "0px 8px 12px 6px" },
    },
  },
};

function MyTheme({ children }) {
  return <ThemeProvider theme={token}>{children}</ThemeProvider>;
}

MyTheme.propTypes = {
  children: PropTypes.node,
};

export { MyTheme, token };
