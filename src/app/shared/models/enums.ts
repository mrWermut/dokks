
export enum Secrecy {
  TOP_SECRET,
  SECRET,
  PUBLIC_USE
}

export enum  ApplicationFormPriority {
  RED,
  ORANGE,
  YELLOW,
  GREEN
}

export enum ApplicationScope {
  GLOBAL,
  FEDERAl,
  REGIONAL

}

export enum ApplicationFormType {
  INTERNAL,
  EXTERNAl
}

export enum ApplicationFormState {
  CREATED,
  PROCESSING,
  DONE
}

export enum UserPermissions {
   APPROVE,
   CREATE,
   EDIT,
   REJECT,
   LOGIN
}
