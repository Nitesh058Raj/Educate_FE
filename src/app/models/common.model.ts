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

export interface ResourcesInterface {
  resourceID: number;
  classID: number;
  resourceName: string;
  resourceUrl: string;
}

export interface ResourcesResponseInterface {
  message: string;
  statusCode: number;
  status: string;
  data: ResourcesInterface[];
}

export interface CreateClassDataInterface {
  className: string;
  classDescription: string;
  teacherID: number;
  schoolID: number;
}

export interface ClassInterface {
  classID: number;
  className: string;
}

export interface ClassResponseInterface {
  message: string;
  statusCode: number;
  status: string;
  data: ClassInterface[];
}

export interface ClassDetailsInterface {
  className: string;
  classDescription: string;
}

export interface ClassDetailsResponseInterface {
  message: string;
  statusCode: number;
  status: string;
  data: ClassDetailsInterface[];
}

export interface AssignmentCountInterface {
  total_assignments: number;
  active_assignments: number;
}

export interface AssignmentCountResponseInterface {
  message: string;
  statusCode: number;
  status: string;
  data: AssignmentCountInterface[];
}

export interface AssignmentInterface {
  assignmentID: number;
  classID: number;
  assignmentName: string;
  assignmentDescription: string;
  assignmentDueDate: string;
  assignmentStatus: string;
}

export interface AssignmentResponseInterface {
  message: string;
  statusCode: number;
  status: string;
  data: AssignmentInterface[];
}

export interface LoginFormInterface {
  username: string;
  password: string;
  role: string;
}
