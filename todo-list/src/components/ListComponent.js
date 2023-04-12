import Button from "./Button";

const ListComponent = (props) => {
    const {todolist, header, deleteClick} = props
    return ( 
        <div>
            <h1 className="pb-2 mt-4">{header}</h1>
            {
                todolist.map(list => {
                    return(
                        <div key={list.id} className="p-4 mb-3 border ">
                            <div>
                                <div className="d-flex">
                                    <h5>Title: </h5>
                                    <p className="ps-1">{list.title}</p>
                                </div>
                                <div className="d-flex">
                                    <h5>Id: </h5>
                                    <p className="ps-1">{list.id}</p>
                                </div>
                                <div className="d-flex">
                                    <h5>Description: </h5>
                                    <p className="ps-1">{list.description}</p>
                                </div>
                            </div>
                            <Button title='Delete todo' onClick={() => deleteClick(list.id)}/>
                        </div>
                    )
                })
            }
        </div>
    );
}
 
export default ListComponent;