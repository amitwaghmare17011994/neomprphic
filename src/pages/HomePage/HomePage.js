import React from "react";
import Card from "../../components/Card/Card";
import CircularLogo from "../../components/CircularLogo/CircularLogo";
import Input from "../../components/Input/Input";
import SearchBar from "../../components/SearchBar/SearchBar";
import Header from "./Header";
import banner from "../../banner.jpeg";
import "./homepage.css";
import Clickable from "../../components/Clickable/Clickable";

export default function HomePage() {
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <Card style={{ flex: 1, height: "96vh" }}>
        <div className="banner">
          <div className="profile">
            <CircularLogo src="https://ca.slack-edge.com/TBTS5A6DA-U01654DB551-8ed45ad73c15-512" style={{ borderRadius: "50%" }} />
            <span className="mt20 profile_name">Amit Waghmare</span>
          </div>
        </div>
      </Card>

      <div style={{ flex: 4, marginLeft: 10, marginTop: 30 }}>
        <Header />

        <Card style={{ margin: 0, marginRight: 10, height: 300 }} inset>
          <img src={banner} style={{ height: "100%", width: "100%", borderRadius: "40px", border: "none" }} />
        </Card>

        <div   className="row product_grid overflow-auto">
          {[1, 2, 3, 4, 5].map((i) => (
            <Clickable isPlay={false}  className="col-lg-3 col-sm-6 col-md-4  product_card" key={i}>
              <Card clickable style={{ height: 300 }}>
                <img src="https://static.toiimg.com/photo/msid-71614991/71614991.jpg" style={{ width: "100%", height: 140 }} className="banner" />
              </Card>
            </Clickable>
          ))}
        </div>
      </div>
    </div>
  );
}
