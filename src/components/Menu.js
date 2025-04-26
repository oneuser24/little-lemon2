import dishes from "../dishes";

const underConstruction = () => {
    window.Swal.fire({
        icon: "error",
        title: "Under construction",
        text: "Visit this page later",
        footer: false
      });
}


const handleDelivery = (name) => {
    window.Swal.fire({
        title: "Are you sure?",
        text: `You ordered ${name}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#495E57",
        cancelButtonColor: "#ee9972",
        confirmButtonText: "Yes, place order",
        allowOutsideClick: false,
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
          },
          buttonsStyling: true
      }).then((result) => {
        if (result.isConfirmed) {
            window.Swal.fire({
            title: "Ordered!",
            text: `Your ${name} is on the way`,
            icon: "success",
            allowOutsideClick: false,
          });
        }
      });
}



const Menu = () => {

    return (
        <div className="menu-container" id="online-menu">

            <div className="menu-header" >
                <h1>This week special!</h1>
                <button onClick={underConstruction}>Online Menu</button>                
            </div>

            <div className="cards" >
                {
                    dishes.map((item) => <div key={item.id} className="menu-item">
                        <img src={item.getImageSrc()} alt={item.name} />
                        <div className="menu-content">
                            <div className="heading">
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>
                            </div>
                            
                            <p>{item.description}</p>
                        </div>
                        <div >
                            <button className="delivery" onClick={(e)=>handleDelivery(item.name)}>Order a delivery</button>
                        </div>
                                                
                       </div>)
                }
            </div>

        </div>


    );
};

export default Menu;