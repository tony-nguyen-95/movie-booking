export interface IDropdownItemProps {
  title: string;
  subMenu?: ISubMenu;
}

export interface ISubMenu {
  title?: string;
  link?: string;
}
