import "./ForgotPassword.scss"

const ForgotPassword = () => {
  return (
    <div className='ForgotPasswrd'>
        <div className="content_forgot">
            <div className="content_forgot_box">
                <div className="content_info">
                    <h1 className="title">Forgot Password</h1>
                    <p className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, praesentium reiciendis. Minus, fugiat deserunt consequatur harum deleniti laboriosam saepe aut vel reiciendis dolorem fugit. Soluta omnis quos commodi similique est.</p>
                </div>
                <form className="content_form_forgot">
                    <label htmlFor="">Email</label>
                    <div className="input_forgot">
                        <input type="text" placeholder="enter your email to reset a new password"/>
                    </div>
                    <button >Send Email</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword