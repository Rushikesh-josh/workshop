import Button from "./button";

const ListComponent = ({todolist, header, handleClick, handleRefreshClick}) => {
    return ( 
        <div>
            <h1 className="pb-2 mt-4">{header}</h1>
            {
                todolist.length ?
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
                            <Button title={'Delete todo'} handleBtnClick={() => handleClick(list.id)}/>
                        </div>
                    )
                }):
                <>
                {
                    <div className="mt-4 mb-4">
                    <h4>To do list is empty please click on refresh button to reload</h4>
                    <Button handleBtnClick={handleRefreshClick} title={'Refresh'}/>
                    </div>
                }
                </>
            }
        </div>
    );
}
 
export default ListComponent;