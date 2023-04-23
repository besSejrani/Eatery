import { makeVar } from "@Apollo/client";

const initialState = {
  isAdmin: false,
  isUser: false,
  isSideBarOpen: false,
  isCartOpen: false,
  isToastrOpen: false,
  isDarkMode: "light",
  isConfirmationDialogOpen: {
    open: false,
    dialogContentText: "",
    identifier: "",
    handleClose: () => {},
    deleteResource: () => {},
  },
};

type UI = {
  isAdmin?: boolean;
  isUser?: boolean;
  isSideBarOpen?: boolean;
  isCartOpen?: boolean;
  isToastrOpen?: boolean;
  isDarkMode?: string;
  isConfirmationDialogOpen?: {
    open?: boolean;
    identifier?: string;
    handleClose?: any;
    deleteResource?: any;
  };
};

export const ui = makeVar<UI>(initialState);
