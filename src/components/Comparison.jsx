import '../App.css';
import { TiTick } from "react-icons/ti";
import { BsDashLg } from "react-icons/bs";

export default function Comparison() {
    return (
    <section className='comparison-section'>
        <div className="compare-title">
            <h2>Compare Help Desk Plans</h2>
        </div>
        <table className='comparison-table-container'>

            <tr className='table-header'>
                    <th></th>
                    <th className='header-element'>Mighty</th>
                    <th className='header-element'>Fantastic</th>
                    <th className='header-element'>Enterprise</th>
                    <th className='header-element'>Enterprise Plus</th>
            </tr>

            <tr>
                <td className='bold-element' style={{ marginTop: '30px'}}>Ticket Management</td>
            </tr>

            <tr>
                <td className='td-element'><a href="#" style={{borderBottom: '1px solid #777676', color: '#777676', fontWeight: '400'}}>Unlimited Mailboxes</a></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
            </tr>
            <tr>
                <td className='td-element'><a href="#" style={{borderBottom: '1px solid #777676', color: '#777676', fontWeight: '400'}}>Unlimited Categories</a></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
            </tr>
            <tr>
                <td className='td-element'><a href="#" style={{borderBottom: '1px solid #777676', color: '#777676', fontWeight: '400'}}>Unlimited Tickets</a></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
            </tr>

            <tr>
                <td className='td-element'><a href="#" style={{borderBottom: '1px solid #777676', color: '#777676', fontWeight: '400'}}>Unlimited Mailboxes</a></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
            </tr>
            <tr>
                <td className='td-element'><a href="#" style={{borderBottom: '1px solid #777676', color: '#777676', fontWeight: '400'}}>Unlimited Categories</a></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
            </tr>
            <tr>
                <td className='td-element'><a href="#" style={{borderBottom: '1px solid #777676', color: '#777676', fontWeight: '400'}}>Unlimited Tickets</a></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
            </tr>
            <tr>
                <td className='td-element'><a href="#" style={{borderBottom: '1px solid #777676', color: '#777676', fontWeight: '400'}}>Unlimited Mailboxes</a></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
            </tr>
            <tr>
                <td className='td-element'><a href="#" style={{borderBottom: '1px solid #777676', color: '#777676', fontWeight: '400'}}>Unlimited Categories</a></td>
                <td className='td-element'><BsDashLg className='dash-style'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
            </tr>
            <tr>
                <td className='td-element'><a href="#" style={{borderBottom: '1px solid #777676', color: '#777676', fontWeight: '400'}}>Unlimited Tickets</a></td>
                <td className='td-element'><BsDashLg className='dash-style'/></td>
                <td className='td-element'><BsDashLg className='dash-style'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
            </tr><tr>
                <td className='td-element'><a href="#" style={{borderBottom: '1px solid #777676', color: '#777676', fontWeight: '400'}}>Unlimited Mailboxes</a></td>
                <td className='td-element'><BsDashLg className='dash-style'/></td>
                <td className='td-element'><BsDashLg className='dash-style'/></td>
                <td className='td-element'><BsDashLg className='dash-style'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
            </tr>
            <tr>
                <td className='td-element'><a href="#" style={{borderBottom: '1px solid #777676', color: '#777676', fontWeight: '400'}}>Unlimited Categories</a></td>
                <td className='td-element'><BsDashLg className='dash-style'/></td>
                <td className='td-element'><BsDashLg className='dash-style'/></td>
                <td className='td-element'><BsDashLg className='dash-style'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
            </tr>
            <tr>
                <td className='td-element'><a href="#" style={{borderBottom: '1px solid #777676', color: '#777676', fontWeight: '400'}}>Unlimited Tickets</a></td>
                <td className='td-element '><BsDashLg className='dash-style'/></td>
                <td className='td-element'><BsDashLg className='dash-style'/></td>
                <td className='td-element'><BsDashLg className='dash-style'/></td>
                <td className='td-element'><TiTick className='green-tick'/></td>
            </tr>

            <tr>
                <td className='td-element'><a href="#" style={{borderBottom: '1px solid #777676', color: '#777676', fontWeight: '400'}}>Attachment Store</a></td>
                <td className='td-element'>50 GB</td>
                <td className='td-element'>500 GB</td>
                <td className='td-element'>1 TB</td>
                <td className='td-element'>2 TB</td>
            </tr>
        </table>
        <div className='view-btn-container'>
        <button className='view-all-btn'>VIEW ALL +</button>
        <p>* Planned</p>
        <p># Only with custom domain</p>
        </div>
    </section>
    
    );
  }
  