export const en = {
  theme: {},
  layout: {},
  header: {},
  bookmark: {},
  group: {},
  toolbar: {}
};

en.theme = {
  preset: {
    header: 'Preset',
    helper: ['Applying a Preset will replace the current Colour, Accent, Font, Style, Radius, Shadow, Shade and Background.']
  },
  saved: {
    header: 'Saved',
    helper: 'Saving a Theme will record the current Colour, Accent, Font, Style, Radius, Shadow, Shade and Background.',
    save: 'Save current theme',
    edit: 'Edit saved themes'
  },
  style: {
    header: 'Style',
    dark: {
      label: 'Dark mode'
    },
    light: {
      label: 'Light mode'
    },
    automatic: {
      label: 'Automatic',
      description: 'Follow the system Light or Dark mode.'
    }
  },
  colour: {
    range: {
      primary: {
        h: 'Primary colour',
        s: 'Saturation'
      }
    },
    contrast: {
      label: 'Contrast range',
      left: 'Contrast start',
      right: 'Contrast end'
    },
  },
  accent: {
    preset: {
      color: {
        grey: 'Grey',
        red: 'Red',
        orange: 'Orange',
        yellow: 'Yellow',
        lime: 'Lime',
        green: 'Green',
        aqua: 'Aqua',
        cyan: 'Cyan',
        teal: 'Teal',
        blue: 'Blue',
        purple: 'Purple',
        magenta: 'Magenta',
        fuchsia: 'Fuchsia'
      },
      modifier: {
        light: {
          level3: 'Super extra light',
          level2: 'Extra light',
          level1: 'Light'
        },
        dark: {
          level3: 'Super extra dark',
          level2: 'Extra dark',
          level1: 'Dark'
        }
      }
    },
    color: 'Accent colour',
    random: {
      active: 'Random Accent colour on load/refresh',
      style: {
        any: 'Any',
        light: 'Light',
        dark: 'Dark',
        pastel: 'Pastel',
        saturated: 'Saturated'
      },
      randomise: 'Randomise now'
    },
    cycle: {
      speed: 'Change delay',
      step: 'Change steps',
      helper: ['Auto change Accent hue will not work when the Accent colour is a grey or black.']
    }
  },
  font: {
    display: {
      name: {
        label: 'Display font',
        placeholder: 'Google font name',
        helper: [{
            a1: 'Use a ',
            a2: 'Google Font',
            a3: ' to customise the Clock, Date, Group names and Bookmark Letters.',
          },
          'Add a font name as it appears on Google Fonts, including capital letters and spaces, eg: enter "Fredoka One" or "Kanit"', 'Clear the field to use the default font "Fjalla One".'
        ]
      },
      weight: {
        label: 'Font weight',
        light: 'Light',
        regular: 'Regular',
        bold: 'Bold',
        helper: ['Not all fonts support all weights. Refer to the Google Font page to see which are available.']
      },
      style: {
        normal: 'Normal',
        italic: 'Italic'
      }
    },
    ui: {
      name: {
        label: 'User interface font',
        placeholder: 'Google font name',
        helper: [{
            a1: 'Use a ',
            a2: 'Google Font',
            a3: ' to customise the Bookmark name, URL and form elements.'
          },
          'Add a font name as it appears on Google Fonts, including capital letters and spaces, eg: enter "Roboto", "Source Sans Pro" or "Noto Sans"',
          'Clear the field to use the default font "Open Sans".'
        ]
      },
      weight: {
        label: 'Font weight',
        light: 'Light',
        regular: 'Regular',
        bold: 'Bold',
        helper: 'Not all fonts support all weights. Refer to the Google Font page to see which are available.'
      },
      style: {
        normal: 'Normal',
        italic: 'Italic'
      }
    }
  },
  radius: 'Corners radius',
  shadow: 'Shadow size',
  shade: {
    opacity: 'Shade opacity',
    blur: {
      label: 'Shade blur',
      helper: 'Not supported by all browsers.'
    }
  },
  opacity: {
    general: {
      label: 'All opacity',
      helper: ['Change the opacity of Search bar, Bookmarks, Group controls and the Toolbar.', 'Opacity can also be changed when editing individual Bookmarks.']
    },
    toolbar: 'Toolbar',
    bookmark: 'Bookmark',
    search: 'Search box',
    openAll: 'Open all'
  },
  background: {
    type: {
      theme: {
        label: 'Background by Theme',
        description: 'Use the Background colour defined by the Theme.'
      },
      accent: {
        label: 'Background by Accent',
        description: 'Use the Accent colour for the Background.'
      },
      color: 'Custom colour',
      gradient: 'Gradient',
      image: 'Image',
      video: 'Video',
    },
    color: 'Background colour',
    gradient: {
      angle: 'Background gradient angle',
      start: 'Background gradient start',
      end: 'Background gradient end'
    },
    image: {
      alert
      url
      urlHelper
      blur
      grayscale
      scale
      accent
      opacity
      vignette: {
        opacity
        start
        end
      }
    }
  }
};
