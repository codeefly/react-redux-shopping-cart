// import React from "react";
// import { connect } from "react-redux";
// import { addToCart } from "./../../redux/shopping/shopping-actions";
// const SingleProduct = ({ current, addToCart }) => {
//     console.log(current);
//     return (
//         <>
//             <div className="card">
//                 <div className="card-body">
//                     <img
//                         src={current.image}
//                         alt=""
//                         className="img-fluid card-image"
//                     />
//                     <h4 className="pt-3">{current.title}</h4>
//                     <p className="card-text">{current.description}</p>
//                     <h5 className="text-primary">$ {current.price}</h5>

//                     <div className="mt-5 d-flex justify-content-between">
//                         <Link href={`/product/${current.id}`}>
//                             <a onClick={() => loadCurrent()}>View more</a>
//                         </Link>
//                         <button
//                             className="btn btn-primary"
//                             onClick={() => addToCart(current.id)}
//                         >
//                             Add to Cart
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// const mapStateToProps = (state) => {
//     return {
//         current: state.shop.currentItem,
//     };
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToCart: (id) => dispatch(addToCart(id)),
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
