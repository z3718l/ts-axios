export default class Cancel {
  message?: string

  constructor(message?: string) {
    this.message = message
  }
}

export function isCancel(value: any): boolean {
  // 判断是不是Cancel的实例
  return value instanceof Cancel
}
