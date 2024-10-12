declare module '*.ttf' {
  const content: string
  export default content
}
declare module '*.css' {
  const classes: { [key: string]: string }
  export default classes
}
