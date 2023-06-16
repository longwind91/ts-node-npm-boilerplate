class Hello {
  private name: string = ''
  private count: number = 0
  constructor(name) {
    this.name = name
  }
  hi() {
    console.log(this.count++ + ' hi ' + this.name + '!')
  }
}
export { Hello }
