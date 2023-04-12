const Button = ({title, handleBtnClick}) => {
    return (  
        <button onClick={handleBtnClick}>{title}</button>
    );
}
 
export default Button;