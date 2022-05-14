import colors from "./colors"

// Define the theme colours for the modal

// light mode (set your colours here or leave values empty '' for default theme)
export const lightTheme = {
  pageBg: `${colors.lightOpacity}`,
  modalBg: `${colors.primary}`,
  modalTxt: `${colors.tertiary}`,
  modalBorder: `solid 2px ${colors.secondary}`,
  modalBtnColor: `${colors.tertiary}`,
  modalShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
  // modalRadius: "false",
}

// dark mode (set your colours here: if needed?)
export const darkTheme = {
  pageBg: `${colors.lightestNavyOpacity}`,
  modalBg: `${colors.navy}`,
  modalTxt: `${colors.lightGreen}`,
  modalBorder:`solid 2px ${colors.chromeBlue}`,
  modalBtnColor: `${colors.lightGreen}`,
  modalShadow: 'rgba(0, 0, 0, 1) 0px 5px 15px'
  // modalRadius: "false",
}

// changeable theme parameters for the modal 
// pageBg: sets background color of the whole page background when modal is open
// modalBg: sets background color of the modal body
// modalTxt: sets text color of the modal    
// modalBorder: sets border of the modal
// modalBtnColor: sets the color of the "X" close button on the modal
// modalShadow: sets the box shadow of the modal (default: 'none')
// modalRadius: 'false' removes default border-radius of 20px
