export interface SideBarItemInterface {
  title: string;
  label: string;
}

export interface SchoolDetailsInterface {
  schoolName: string;
  schoolAddress: string;
}

export interface SchoolDetailsResponseInterface {
  message: string;
  statusCode: number;
  status: string;
  data: SchoolDetailsInterface[];
}
