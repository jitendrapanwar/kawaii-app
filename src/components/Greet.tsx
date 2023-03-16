type GreetProps = {
  fname: string
  lname?: string
  messageCount: number
  styles?: React.CSSProperties
}
export const Greet = ({fname, messageCount, styles}: GreetProps) => {
  return (
    <div style={styles}>
      Welcome {fname} you have {messageCount} in your mail box
      </div>
  )
}