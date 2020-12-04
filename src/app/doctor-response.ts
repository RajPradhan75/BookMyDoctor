import { Doctor } from "./doctor";

export class DoctorResponse{
  statusCode: number;
  message: string;
  description: string;
  doctors: Doctor[];
}
