type Props = {
  press: boolean;
  setPress: any;
}

export const Button = (props: Props) => {

  return (
    <div className="button-wrapper">
      {!props.press ? (
        <button
          onClick={() => props.setPress(true)}
          className="btn btn-primary size"
          type="button"
        >
          Please register now
        </button>
      ) : (
        <button
          onClick={() =>  props.setPress(false)}
          className="btn btn-warning size"
          type="button"
        >
          Register later
        </button>
      )}
    </div>
  )
}
