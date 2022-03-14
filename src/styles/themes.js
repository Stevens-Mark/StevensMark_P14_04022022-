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
        // note: if ommitted, default colour set
        // examples of values are: 
        // `rgba(0, 0, 0, 0.7)` 
        // "black" 
        // '#EDF0F1'
        // `${colors.lightGreen}` .....eg, imported colour (as above)

// modalBg: sets background color of the modal body
        // note: if ommitted, default colour set
        // examples of values are: same as for pageBg

// modalTxt: sets text color of the modal
        // note: if ommitted, default color set
        // examples of values are: same as for pageBg

        
// modalBorder: sets border of the modal
        // note: if ommitted, default set to "none"
        // examples of values are: 
        // `solid 1px rgba(0, 0, 0, 0.7)` 
        // "solid 1px black" 
        // 'solid 1px #EDF0F1'
        // `solid 1px ${colors.chromeBlue}` .....rg, imported colour (as above)

// modalBtnColor: sets the color of the "X" close button on the modal
        // note: if ommitted, default colour set
        // examples of values are: same as for pageBg

// modalShadow: sets the box shadow of the modal
        // note: if ommitted, default box shadow is set
        // examples of values are: 
        // 'rgba(0, 0, 0, 1) 0px 5px 15px'
        // 'none'

// modalRadius: removes default border-radius
        // note: if ommitted, default border radius set to 20px
        // example of value is : 
        // modalRadius: "false"
