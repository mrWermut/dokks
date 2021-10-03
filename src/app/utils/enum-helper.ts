
export class EnumHelper {

  static getEnumOptions<T>(e: T) {
      return Object.keys(e).map( key => ({value : e[key]  , id : key }));
  }

}
