
export enum Secrecy {
  TOP_SECRET,
  SECRET,
  PUBLIC_USE
}

export enum  ApplicationDocumentPriority {
  RED,
  ORANGE,
  YELLOW,
  GREEN
}

export enum ApplicationDocumentScope {
  GLOBAL,
  FEDERAl,
  REGIONAL

}

export enum ApplicationDocumentType {
  INTERNAL,
  EXTERNAl
}

export enum ApplicationDocumentState {
  CREATED,
  PROCESSING,
  CONFIRMED,
  REJECTED
}

export enum UserPermissions {
   APPROVE,
   CREATE,
   EDIT,
   REJECT,
   LOGIN
}

export enum UserGroupRole {
  INITIATOR,
  EDITOR,
  CONFIRMER
}
