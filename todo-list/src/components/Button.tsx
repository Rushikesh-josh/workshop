
type ButtonProps = {
    title: string,
    onClick:()=>void
}
const Button = (props:ButtonProps) => {
    const { title, onClick } = props;
    return (  
        <button onClick={onClick}>{title}</button>
    );
}
 
export default Button;