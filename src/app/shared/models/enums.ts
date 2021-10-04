
export enum ApplicationDocumentSecrecy {
  TOP_SECRET = 'TOP_SECRET',
  SECRET = 'SECRET',
  PUBLIC_USE = 'PUBLIC_USE'
}

export enum  ApplicationDocumentPriority {
  RED = 'RED',
  ORANGE = 'ORANGE',
  YELLOW = 'YELLOW',
  GREEN = 'GREEN'
}

export enum ApplicationDocumentScope {
  GLOBAL = 'GLOBAL',
  FEDERAL = 'FEDERAL',
  REGIONAL = 'REGIONAL'

}

export enum ApplicationDocumentType {
  INTERNAL = 'INTERNAL',
  EXTERNAL = 'EXTERNAL'
}

export enum ApplicationDocumentState {
  CREATED = 'CREATED',
  PROCESSING = 'PROCESSING',
  ON_CONFIRMATION = 'ON_CONFIRMATION',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
}

export enum UserPermissions {
   APPROVE = 'APPROVE',
   CREATE = 'CREATE',
   EDIT = 'EDIT',
   REJECT = 'REJECT',
   LOGIN = 'LOGIN'
}

export enum UserGroupRole {
  INITIATOR = 'INITIATOR',
  EDITOR = 'EDITOR',
  CONFIRMER = 'CONFIRMER'
}
