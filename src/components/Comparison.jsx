import "../App.css";
import { TiTick } from "react-icons/ti";
import { BsDashLg } from "react-icons/bs";

export default function Comparison() {
  const comparisonData = [
    {
      heading: "Ticket Management",
      mighty: "none",
      fantastic: "none",
      enterprise: "none",
      enterprisePlus: "none",
    },
    {
      heading: "Unlimited Mailboxes",
      mighty: true,
      fantastic: true,
      enterprise: true,
      enterprisePlus: true,
    },
    {
      heading: "Unlimited Categories",
      mighty: true,
      fantastic: true,
      enterprise: true,
      enterprisePlus: true,
    },
    {
      heading: "Unlimited Tickets",
      mighty: true,
      fantastic: true,
      enterprise: true,
      enterprisePlus: true,
    },
  ];

  return (
    <section className="comparison-section">
      <div className="compare-title">
        <h2>Compare Help Desk Plans</h2>
      </div>
      <table className="comparison-table-container">
        <tr className="table-header">
          <th></th>
          <th className="header-element">Mighty</th>
          <th className="header-element">Fantastic</th>
          <th className="header-element">Enterprise</th>
          <th className="header-element">Enterprise Plus</th>
        </tr>

        {comparisonData.map((comparisonData) => (
          <tr>
            <td className="td-element">
              <a
                href="#"
                style={{
                  borderBottom: "1px solid #777676",
                  color: "#777676",
                  fontWeight: "400",
                }}
              >
                {comparisonData.heading}
              </a>
            </td>
            <td className="td-element">
              {(() => {
                switch (comparisonData.mighty) {
                  case true:
                    return <TiTick className="green-tick" />;
                  case false:
                    return <BsDashLg className="dash-style" />;
                  case "none":
                    return <></>;
                }
              })()}
            </td>
            <td className="td-element">
              {(() => {
                switch (comparisonData.fantastic) {
                  case true:
                    return <TiTick className="green-tick" />;
                  case false:
                    return <BsDashLg className="dash-style" />;
                  case "none":
                    return <></>;
                }
              })()}
            </td>
            <td className="td-element">
              {(() => {
                switch (comparisonData.enterprise) {
                  case true:
                    return <TiTick className="green-tick" />;
                  case false:
                    return <BsDashLg className="dash-style" />;
                  case "none":
                    return <></>;
                }
              })()}
            </td>
            <td className="td-element">
              {(() => {
                switch (comparisonData.enterprisePlus) {
                  case true:
                    return <TiTick className="green-tick" />;
                  case false:
                    return <BsDashLg className="dash-style" />;
                  case "none":
                    return <></>;
                }
              })()}
            </td>
          </tr>
        ))}

        {/* <tr>
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
            </tr> */}
      </table>
      <div className="view-btn-container">
        <button className="view-all-btn">VIEW ALL +</button>
        <p>* Planned</p>
        <p># Only with custom domain</p>
      </div>
    </section>
  );
}
