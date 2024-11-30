class Logger {
  static logArray2d<T>(arr: Array<Array<T>>): void {
    for (let i = 0; i < arr.length; i++) {
      console.log(`[ ${arr[i].toString().replaceAll(',', ', ')} ] `)
    }
  }
}

export default Logger
