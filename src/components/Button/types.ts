export interface Ibutton {
  title:string;
  variant?:string;
  onClick?: () => void;
  type?: string;
}

export interface IbuttonStyled {
  variant:string;
}