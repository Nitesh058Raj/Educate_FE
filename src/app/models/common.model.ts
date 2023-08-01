export interface SideBarItemInterface {
  title: string;
  label: string;
}

export interface AnnouncementsInterface {
  announcementId: number;
  content: string;
  created_at: string;
}

export interface AnnouncementsResponseInterface {
  message: string;
  statusCode: number;
  status: string;
  data: AnnouncementsInterface[];
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
