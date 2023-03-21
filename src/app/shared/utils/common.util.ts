export class CommonUtil {
  static generateArrayByObj<T>(obj: {}): T[] {
    return Object.values<T>(obj);
  }
}
