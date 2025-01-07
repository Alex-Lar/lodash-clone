class Logger {
  static logArray2d<T>(arr: Array<Array<T>>): void {
    for (let i = 0; i < arr.length; i++) {
      this.logArray(arr[i])
    }
  }

  static logArray<T>(arr: Array<T>): void {
    console.log(`[ ${arr.toString().replaceAll(',', ', ')} ] `)
  }
}

export default Logger
