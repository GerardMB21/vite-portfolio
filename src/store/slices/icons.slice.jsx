import { createSlice } from "@reduxjs/toolkit";

const iconsSlice = createSlice({
  name: 'icons',
  initialState: {
    react: <ion-icon name="logo-react" class='react'></ion-icon>,
    css: <ion-icon name="logo-css3" class='css'></ion-icon>,
    nodejs: <ion-icon name="logo-nodejs" class='nodejs'></ion-icon>,
    binder: {
      active: <ion-icon name="folder-open-outline" class='binder'></ion-icon>,
      inherit: <ion-icon name="folder-outline" class='binder'></ion-icon>
    },
    json: <ion-icon name="code-working-outline" class='json'></ion-icon>,
    html: <ion-icon name="logo-html5" class='html'></ion-icon>,
    javascript: <ion-icon name="logo-javascript" class='javascript'></ion-icon>,
    python: <ion-icon name="logo-python" class='python'></ion-icon>,
    wordpress: <ion-icon name="logo-wordpress" class='wordpress'></ion-icon>,
    github: <ion-icon name="logo-github" class='github'></ion-icon>,
    linkedin: <ion-icon name="logo-linkedin" class='linkedin'></ion-icon>,
    whatsapp: <ion-icon name="logo-whatsapp" class='whatsapp'></ion-icon>
  },
  reducers: {
  },
})

export const {  } = iconsSlice.actions
export default iconsSlice.reducer