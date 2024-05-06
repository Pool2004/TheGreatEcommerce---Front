import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      const user = action.payload;

      const newUser = {};
      newUser.id = user.idUsuario;
      newUser.email = user.correo;
      newUser.name = user.nombre;
      newUser.phone = user.telefono;
      newUser.rol = user.rol;
      return newUser;
    },

    logout: (state, action) => {
      return null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
