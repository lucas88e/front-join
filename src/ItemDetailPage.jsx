const ItemDetailPage = ({item}) => {

  return (
    <>
    <h1> {item.title}</h1>
    <h3>Completed: {`${item.completed}`}</h3>
    </>
 
  );
};

export default ItemDetailPage;
