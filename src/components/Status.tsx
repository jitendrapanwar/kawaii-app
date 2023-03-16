type StatusProps = {
  status: 'loading' | 'success' | 'error'
}
export const Status = (props: StatusProps) => {

 return (
  <div>{props.status}</div>
 ) 
}