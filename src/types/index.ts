
export interface Values {
  formText: string;
  formNumber: number;
  formEmail: string;
  formPassword: string;
  confirmPassword: string;
  // radioOptions?: string;
  // formCheckbox?: boolean;
  // formSelect?: string;
  // formFile?: null;
  formDate: string;
  formTime: string;
  formRange: number;
  formTel: string;
  formUrl: string;
  formColor: string;
  formSearch: string;
}
export interface FormikHelpers {
  resetForm: (nextState?: any) => void;
}

export interface fields {
  name: string;
  label: string;
  type: string;
  value?:string
  placeholder?: string;
}

