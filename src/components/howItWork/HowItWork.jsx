import React, { Component } from "react";
import "./HowItWork.scss";
class HowItWork extends Component {
  data = [
    {
      id: 1,
      title: "Create your event",
      desc: "Customize your event according to the type of experience you want your guest to have.",
      image: "images/event.png",
    },
    {
      id: 2,
      title: "Share your private code",
      desc: "Pass your event code to your guest and give them access to information about your event.",
      image: "images/private.png",
    },
    {
      id: 3,
      title: "Manage your event",
      desc: "Your guest list and other event activity can be managed from one platform and push notification can be sent to your guest to inform them of any new updates.",
      image: "images/manage.png",
    },
  ];
  render() {
    return (
      <div id="work" className="text-center mt-5 mb-5">
        <h1 className="pt-5">How It Works</h1>
        <p>Get started with 3 easy steps.</p>

        <div className="box mt-5 p-5">
          <div className="row">
            {this.data.map((item) => (
              <div key={item.id} className="col-md-4 my-3">
                <img src={item.image} height="100" alt={item.title} />
                <h5 className="mt-3">{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default HowItWork;
