import OrderData from '../order_data.json'
import { useState } from 'react';


const SearchTable = () => {
     const [searchTerm, setsearchTerm] = useState("")


    return (

        <div className='container'>
          <input type="text"
            placeholder="Search.." 
            className="form-control" 
            
            
            style={{marginTop:50, marginBottom:20, width: "40%" }}
             onChange={(e) => {setsearchTerm(e.target.value);}}
            />
           
           

            <table className='table table-underline'>
                        <thead className='thead-light'>
                           <tr>
                                <th>ORDER ID</th>
                                <th>CUSTOMER</th>
                                <th>COUNTRY</th>
                                <th>ADDRESS</th>
                                <th>PRODUCT</th>
                                <th>Product Description</th>
                                <th>Date</th>
                                <th>STATUS</th>


                           </tr>
                        </thead>
                        <tbody>
                            {OrderData.filter(value => {
                                      if (searchTerm === '') {
                                      return value;
                                       } else if (value.customer.toLowerCase().includes(searchTerm.toLowerCase())
                                       ) {
                                              return value
                                    }
                             }).map((m) => (
                                <tr key={m.id}>
                                     <td>{m.order_id}</td>
                                     <td>{m.customer}</td>
                                     <td>{m.country}</td>
                                     <td>{m.address}</td>
                                     <td>{m.product_title}</td>
                                     <td>{m.product_description}</td>
                                     <td>{m.date}</td>
                                     <td>{m.status}</td>


                                </tr>

                            ))}


                        </tbody>

            </table>
        </div>
    );
}

export default  SearchTable;

